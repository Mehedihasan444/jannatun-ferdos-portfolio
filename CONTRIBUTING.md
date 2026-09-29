# Contributing

Thanks for your interest in improving this portfolio. Contributions are welcome,
whether that is fixing a typo, correcting a detail, or proposing a larger change.

## Getting started

```bash
git clone https://github.com/Mehedihasan444/jannatun-ferdos-portfolio.git
cd jannatun-ferdos-portfolio
pnpm install
pnpm dev
```

Requires **Node.js 20+** and **pnpm 11**.

## Before you open a pull request

Run the same checks CI runs:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

All three must pass. If you change the lockfile, commit `pnpm-lock.yaml`
alongside it — CI installs with `--frozen-lockfile` and will fail otherwise.

## Changing content

All page content lives in [`src/data/portfolio.ts`](./src/data/portfolio.ts).
You should not need to touch a component to change text, links, or ordering.

**Please do not invent facts.** The content represents a real person's academic
record. If something is unknown or uncertain, leave the field `null` or omit it
rather than filling in a plausible value. Corrections to existing facts are very
welcome; additions should come from a verifiable source.

## Guidelines

- Keep the dependency set small. This is a static site; a new package is a
  real cost with no upside unless it removes more code than it adds.
- Match the existing code style. There is no separate style guide, so follow
  the surrounding files.
- Use [Conventional Commits](https://www.conventionalcommits.org/) for commit
  messages, for example `feat: add publications filter` or
  `fix: correct mobile drawer focus restore`.
- Write descriptive commit messages. Explain *why*, not just *what*.
- Keep accessibility intact. New interactive elements need accessible names,
  visible focus, and keyboard support.
- Respect the design system. Colours, spacing, and motion come from the CSS
  variables in `globals.css`; do not hardcode one-off values.

## Reporting bugs

Open an issue describing what you expected, what happened, and how to reproduce
it. For anything involving personal data or security, see
[SECURITY.md](./SECURITY.md) instead.

## Code of Conduct

Be respectful and constructive. Assume good faith, and keep discussion focused
on the work rather than the person.
