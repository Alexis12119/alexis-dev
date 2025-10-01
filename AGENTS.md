# AGENTS.md

## Commands
- Build: `pnpm build` (Next.js build)
- Lint: `pnpm lint` (ESLint with TypeScript/React rules)
- Test: No tests configured; add Jest/Vitest for `pnpm test` and single test with `--testNamePattern`
- Dev: `pnpm dev` (Next.js dev server)
- Start: `pnpm start` (production server)

## Code Style Guidelines
- **Imports**: Use absolute paths with `@/` alias (e.g., `@/components/ui/button`)
- **Formatting**: Follow ESLint rules; no custom Prettier config
- **Types**: TypeScript strict mode; explicit types for props, state, and functions
- **Naming**: PascalCase for components/files, camelCase for variables/functions; kebab-case for CSS classes
- **Error Handling**: Use try-catch in async functions; throw typed errors
- **Components**: Use shadcn/ui patterns; functional components with hooks
- **Styling**: Tailwind CSS with CSS variables for theming; dark mode via class strategy