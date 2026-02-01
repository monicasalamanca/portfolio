# Copilot Instructions for my-portfolio

This project is a personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. It is structured for clarity, modularity, and easy theming.

## Architecture Overview

- **App Directory**: All routing and page logic is under `src/app/` using the Next.js App Router. The main entry is `src/app/page.tsx`.
- **Components**: UI and logic components are in `src/components/`, with further organization:
  - `ui/`: Reusable UI primitives (e.g., buttons, cards)
  - `sections/`: Page sections (e.g., hero, about, projects)
  - `theme-provider.tsx` and `theme-toggle.tsx`: Handle dark/light theme switching
- **Content**: Static or markdown content (if any) is in `src/content/`.
- **Styles**: Global styles in `src/app/globals.css` and design tokens in `src/styles/tokens.css`. Tailwind config is in `tailwind.config.ts`.
- **Lib**: Utility functions and custom hooks in `src/lib/`.

## Developer Workflows

- **Start Dev Server**: `pnpm dev` (preferred), or `npm run dev`, `yarn dev`, `bun dev`
- **Build**: `pnpm build`
- **Lint**: `pnpm lint` (uses ESLint config in `eslint.config.mjs`)
- **Format**: If Prettier is used, run `pnpm format`
- **Tailwind**: Configured via `tailwind.config.ts` and `postcss.config.mjs`

## Project Conventions

- **TypeScript**: All code is written in TypeScript. Use types and interfaces for props and data.
- **Component Structure**: Prefer functional components. Co-locate styles and tests (if any) with components.
- **Theming**: Use the `theme-provider` and `theme-toggle` components for color mode logic. Reference `tokens.css` for design tokens.
- **UI Primitives**: Build new UI elements in `components/ui/` for reuse.
- **Sections**: Page sections go in `components/sections/` and are composed in `page.tsx`.
- **Content**: If using markdown or static content, place in `src/content/` and import as needed.

## Integration & Patterns

- **External Libraries**: Uses Next.js, React, Tailwind CSS. Fonts are loaded via `next/font` (see README).
- **No API Layer**: This portfolio is static; add API logic in `src/app/api/` if needed.
- **Cross-Component Communication**: Use React context or props drilling. Theme context is provided by `theme-provider`.

## Key Files & Directories

- `src/app/page.tsx`: Main page composition
- `src/components/`: All UI and logic components
- `src/styles/tokens.css`: Design tokens for consistent theming
- `tailwind.config.ts`: Tailwind setup
- `eslint.config.mjs`: Linting rules

## Example Patterns

- To add a new section: create a component in `components/sections/`, then import and use it in `page.tsx`.
- To add a new UI primitive: add to `components/ui/` and document usage.
- To update theming: edit `theme-provider.tsx`, `theme-toggle.tsx`, or `tokens.css`.

---

For more, see the [README.md](../README.md) or ask for architectural clarifications.
