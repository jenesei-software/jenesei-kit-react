import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const vitePath = path.join(root, 'vite.config.ts');
const pkgPath = path.join(root, 'package.json');

const viteText = fs.readFileSync(vitePath, 'utf8');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

// 1) Найти блок entry: { ... }
const entryMatch = viteText.match(/entry\s*:\s*\{([\s\S]*?)\}\s*,\s*formats\s*:/m);
if (!entryMatch) {
  console.error('Не нашёл блок lib.entry в vite.config.ts (ожидал entry: { ... }, formats: ...).');
  process.exit(1);
}
const entryBody = entryMatch[1];

// 2) Спарсить строки вида: key: resolve(__dirname, 'src/...')
const entries = [];
const re = /^\s*(?:(["'])(.*?)\1|([A-Za-z_$][\w$-]*))\s*:\s*resolve\(\s*__dirname\s*,\s*(["'])(.*?)\4\s*\)\s*,?\s*$/gm;

let m;
m = re.exec(entryBody);
while (m !== null) {
  const key = m[2] ?? m[3];
  const src = m[5];
  entries.push({ key, src });
  m = re.exec(entryBody);
}

if (entries.length === 0) {
  console.error(
    "Не смог распарсить entry-ключи. Проверь, что записи выглядят как: key: resolve(__dirname, 'src/...').",
  );
  process.exit(1);
}

// 3) Собрать exports
const exportsMap = {};

// helper: строим запись export
function exportRecord(name) {
  return {
    types: `./build/${name}.d.ts`,
    import: `./build/${name}.es.js`,
    require: `./build/${name}.cjs.js`,
    default: `./build/${name}.es.js`,
  };
}

for (const { key } of entries) {
  if (key === 'index') {
    exportsMap['.'] = exportRecord('index');
  } else {
    exportsMap[`./${key}`] = exportRecord(key);
  }
}

// 4) Записать обратно
pkg.exports = exportsMap;

// опционально: чтобы top-level тоже был консистентный
// pkg.main = "./build/index.cjs.js";
// pkg.module = "./build/index.es.js";
// pkg.types = "./build/index.d.ts";

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');

console.log(`OK: exports обновлён из vite.config.ts (${entries.length} entries)`);
