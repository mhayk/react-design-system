# React Design System

## Installation

### NPM packages
```bash
$ npm i -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
$ npx sb init --builder @storybook/builder-vite --use-npm
```

### VS Code Plugins

* [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
* [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
* [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)

## Storybook documentation with Github Pages

* https://mhayk.github.io/react-design-system/

### Jest
```bash
$ npm run test-storybook -- --watch
```

### MSW
https://mswjs.io - Mock Service Worker
* [mswj - storybook addon](https://github.com/mswjs/msw-storybook-addon)
```bash
$ npm i msw msw-storybook-addon -D
$ npx msw init public/
```

It is required to append the following codes into the files above:
.storybook/main.cjs:
```json
...,
"staticDirs": [
    "../public"
  ],
...
```
.storybook/preview.cjs
```js
...
import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize();

export const decorators = [mswDecorator];

```

