# App

- [App](#app)
  - [How to use the app](#how-to-use-the-app)
    - [First time setup](#first-time-setup)
    - [Scripts](#scripts)
  - [Commit messages](#commit-messages)
    - [Prefix Table](#prefix-table)
    - [Usage example](#usage-example)
      - [With body message](#with-body-message)
      - [Incorrect usage example](#incorrect-usage-example)
  - [Storybook](#storybook)
    - [How to use Storybook](#how-to-use-storybook)
  - [Cypress](#cypress)
    - [How to use Cypress](#how-to-use-cypress)
    - [Writing tests](#writing-tests)
  - [File System](#file-system)
    - [Naming conventions:](#naming-conventions)
    - [Test files:](#test-files)
    - [Code style conventions:](#code-style-conventions)
  - [Internationalization (i18n)](#internationalization-i18n)
  - [Integration Notes](#integration-notes)
    - [Views](#views)
    - [Layouts](#layouts)
    - [VSCode Extensions](#vscode-extensions)
    - [Bento ©](#bento-)

## How to use the app

### First time setup

```shell
yarn
```

This will install dependencies appropriate for **your local Node version**.

### Scripts

| Description                              | Script                |
| ---------------------------------------- | --------------------- |
| Compiles and hot-reloads for development | `yarn dev`            |
| Compiles and minifies for production     | `yarn build`          |
| Serves a production build for preview    | `yarn prod:preview`   |
| Starts Vitest unit test suite            | `yarn test:unit`      |
| Starts Cypress component test suite      | `yarn test:component` |
| Starts Cypress end-to-end test suite     | `yarn test:e2e`       |
| Lints and fixes files                    | `yarn lint`           |
| Compiles and hot-reloads Storybook       | `yarn sb`             |
| Creates a report of missing translations | `yarn i18n:report`    |

<br>

## Commit messages

Commit messages need to have a prefix and a title, the [prefix table](#prefix-table) can be found below.
The first word of the title should be lowercased, and no punctuation at the end of the sentence.

A commit body can be used when history is needed and/or complex logic that needs explanation.

All commit messages should have a prefix type that include (app) for easier history search and
separation between the App and different projects(future proof).

### Prefix Table

| Type     | Description                                                       |
| -------- | ----------------------------------------------------------------- |
| feat     | A new feature                                                     |
| fix      | A bug fix                                                         |
| docs     | Documentation only changes                                        |
| refactor | A code change that neither fixes a bug nor adds a feature         |
| test     | Adding missing tests or correcting existing tests                 |
| perf     | A code change that improves performance                           |
| build    | Changes that affect the build system or external dependencies     |
| chore    | A task that has to happen, e.g. updating dependencies by renovate |

### Usage example

```
feat(app): add BentoBox stories
```

#### With body message

```
feat(app): add BentoBox stories

  Previously...

  We superseded because...

  With this update we introduce...
```

#### Incorrect usage example

```
feat(app): Add BentoBox stories
```

Please notice the capitalization of the first word

```
feat(app): add BentoBox stories.
```

Please notice the dot at the end of the sentence

## Storybook

Please find the introduction in the compiled version of Storybook.

This can be achieved by running `yarn sb` and navigating
[to the introduction](http://localhost:6006/?path=/docs/docs-introduction--page).

### How to use Storybook

| Description                          | Script                                           |
| ------------------------------------ | ------------------------------------------------ |
| Compiles and hot-reloads Storybook   | `yarn sb`                                        |
| Compiles and minifies for production | `yarn build-storybook`                           |
| Creates an a11y\* report             | `npx storybook-a11y-report --outDir a11y-report` |

\*a11y - Make sure storybook is already running to get the report.

## Cypress

We use [Cypress](https://cypress.io/) for end-to-end and component testing.
Their documentation does a great job at explaining these two types of testing in
[this article](https://docs.cypress.io/guides/core-concepts/testing-types).

### How to use Cypress

| Description                             | Script                |
| --------------------------------------- | --------------------- |
| Starts dev environment for end-to-end\* | `yarn cy`             |
| Starts dev-server for component testing | `yarn test:component` |
| Opens Cypress for end-to-end testing    | `yarn test:e2e`       |

\*The Cypress team is working on supporting Vite and HMR to improve the DX.

### Writing tests

To help simplify writing tests a custom command is introduced.

- `cy.dataCy("")` helps to select elements by their `data-cy=""` attribute.
  Using attribute values to select elements prevents selectors from becoming
  outdated by a change in the template or styles. You can read more in their
  [Best Practices](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements).

## File System

### Naming conventions:

Components are named with PascalCase. <br>
`MyComponent.vue`

Sass files are named with kebab-case prefixed with an \_underscore. <br>
`_sass.scss` <br>
The main purpose of using partials is to break down CSS code into several pieces
which are easier to maintain.

Hooks should be prefixed with "use" and named like a JavaScript function. <br>
`useHook.ts`

TS and JS files should follow the naming of their content, usually
camelCase. <br>
`getUsers.ts`

All other files and folders should be named with kebab-case. <br>
`company-department.json` <br>

### Test files:

**Unit test** files should be placed next to the respective module:<br>
`./__tests__/getUsers.test.ts`

**Component test** files are similar:<br>
`./__tests__/MyComponent.cy.ts`

**End-to-end test (e2e)** files should be in:<br>
`app/cypress/integration/**/login.cy.ts`

### Code style conventions:

These conventions are enforced by ESLint.

We recommend to
[set up your editor](https://eslint.org/docs/user-guide/integrations#editors)
of choice to support ESLint.

## Internationalization (i18n)

The app supports multiple languages through internationalization with `vue-i18n`
which is the standard for Vue apps.

## Integration Notes

### Views

Every route has its own "View" component. These contain the main content that
should be rendered for that page.

Read more about views in [the views README](./src/views/README.md).

### Layouts

The route "Views" in the app are wrapped by a "layout" component. You can
customize which layout is rendered for a route in the route definition.

You can find more info in [the layouts README](./src/layouts/README.md).

### VSCode Extensions

The following extensions are recommended:

| Extension id                            | Purpose               |
| --------------------------------------- | --------------------- |
| `Vue.volar`                             | Vue 3, TS integration |
| `lokalise.i18n-ally`                    | i18n                  |
| `esbenp.prettier-vscode`                | format code           |
| `richie5um2.vscode-sort-json`           | sort JSON             |
| `streetsidesoftware.code-spell-checker` | Code spell checker    |

### Bento ©
