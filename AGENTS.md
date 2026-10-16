# AGENTS.md

Guidance for AI coding agents working in this repository.

This repository is a published React component library, not an application.

## Core stack

- React 19
- TypeScript 6
- Vite 8
- Storybook 10
- Biome
- vite-plugin-dts
- styled-components ecosystem
- framer-motion

## Important rules

- Use Yarn 1 (`yarn@1.22.22`)
- Do not edit build output manually
- Keep TypeScript strict
- Use @local/* alias for src imports
- Respect Biome formatting and lint rules
- Keep public APIs stable
- Do not manually maintain package exports; generate them

## Commands

```bash
yarn gen:exports
yarn typecheck
yarn typecheck:storybook
yarn biome:lint
yarn build:library
yarn build:storybook
yarn storybook
```

## Public API

vite.config.ts is the source of truth for public entries.

If adding/removing public exports:

1. Update vite.config.ts
2. Run yarn gen:exports
3. Verify package.json exports
4. Run build validation

## Components

- Keep reusable
- Add stories for visible behavior
- Export types intentionally
- Avoid app-specific logic

## Hooks and contexts

- Keep reusable
- Avoid business logic coupling
- Preserve stable public contracts

## Build output

Never hand-edit:

- build/
- build-storybook/
