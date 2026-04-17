import fs from 'node:fs';
import path from 'node:path';
import { logger } from '@jenesei-software/jenesei-library-log';
const ROOT_DIR = process.cwd();
const VITE_CONFIG_PATH = path.join(ROOT_DIR, 'vite.config.ts');
const PACKAGE_JSON_PATH = path.join(ROOT_DIR, 'package.json');

function readTextFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function readJsonFile(filePath) {
  return JSON.parse(readTextFile(filePath));
}

function fail(message) {
  logger.error(message);
  process.exit(1);
}

function getLibEntryBlock(viteConfigText) {
  const entryBlockMatch = viteConfigText.match(/entry\s*:\s*\{([\s\S]*?)\}\s*,\s*formats\s*:/m);

  if (!entryBlockMatch) {
    fail('Could not find the `lib.entry` block in vite.config.ts.');
  }

  return entryBlockMatch[1];
}

function parseEntries(entryBlockText) {
  const entryPattern =
    /^\s*(?:(["'])(.*?)\1|([A-Za-z_$][\w$-]*))\s*:\s*resolve\(\s*__dirname\s*,\s*(["'])(.*?)\4\s*\)\s*,?\s*$/gm;

  const entries = [];
  const seenKeys = new Set();

  let match = entryPattern.exec(entryBlockText);

  while (match !== null) {
    const key = match[2] ?? match[3];
    const relativeSourcePath = match[5];

    if (seenKeys.has(key)) {
      fail(`Duplicate entry key found in vite.config.ts: "${key}".`);
    }

    seenKeys.add(key);
    entries.push({
      key,
      relativeSourcePath,
      absoluteSourcePath: path.join(ROOT_DIR, relativeSourcePath),
    });

    match = entryPattern.exec(entryBlockText);
  }

  if (entries.length === 0) {
    fail('Could not parse any `lib.entry` items from vite.config.ts.');
  }

  return entries;
}

function validateEntries(entries) {
  const missingEntries = entries.filter((entry) => !fs.existsSync(entry.absoluteSourcePath));

  if (missingEntries.length > 0) {
    const details = missingEntries.map((entry) => `- ${entry.key}: ${entry.relativeSourcePath}`).join('\n');
    fail(`Found lib.entry items that point to missing files:\n${details}`);
  }
}

function createExportRecord(name) {
  return {
    types: `./build/${name}.d.ts`,
    import: `./build/${name}.es.js`,
    require: `./build/${name}.cjs.js`,
    default: `./build/${name}.es.js`,
  };
}

function createExportsMap(entries) {
  const exportsMap = {};

  for (const entry of entries) {
    const exportKey = entry.key === 'index' ? '.' : `./${entry.key}`;
    exportsMap[exportKey] = createExportRecord(entry.key);
  }

  return exportsMap;
}

function writePackageJson(packageJson) {
  fs.writeFileSync(PACKAGE_JSON_PATH, `${JSON.stringify(packageJson, null, 2)}\n`, 'utf8');
}

const viteConfigText = readTextFile(VITE_CONFIG_PATH);
const packageJson = readJsonFile(PACKAGE_JSON_PATH);

const entryBlockText = getLibEntryBlock(viteConfigText);
const entries = parseEntries(entryBlockText);

validateEntries(entries);

packageJson.exports = createExportsMap(entries);

writePackageJson(packageJson);

logger.info(`OK: exports updated from vite.config.ts (${entries.length} entries)`);
