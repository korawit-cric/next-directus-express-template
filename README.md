# Turborepo: NextJs + Vite + Express + Storybook Template + Directus

This is an official starter Turborepo with multiple meta-frameworks all working in harmony and sharing packages.

This example also shows how to use [Workspace Configurations](https://turbo.build/repo/docs/core-concepts/monorepos/configuring-workspaces).

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `web`: a [Next.js](https://nextjs.org/) app
- `workshop`: Component documentation/workshop site with 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite
- `directus`: 

- `@repo/eslint-config`: ESLint configurations used throughout the monorepo
- `@repo/jest-presets`: Jest configurations
- `@repo/logger`: isomorphic logger (a small wrapper around console.log)
- `@repo/cric-ui`: prebuilt component with tailwind and cn utilities
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

## Running the Project

To set up and run the project, follow these steps:

### Step 1: Start Docker Containers

Run the following command to start the Docker containers (Postgres, Directus, etc.):

```bash
npm run docker:up
```

### Step 2: Start the Development Environment

Once the Docker containers are up and running, you can start the development environment by running:
```bash
npm i
```
```bash
npm run dev
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
