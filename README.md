<div align="center">
<h1>react-router-testing-utils</h1>

<a href="https://www.emojione.com/emoji/1f989">
  <img
    height="125"
    width="250"
    alt="logo"
    src="https://raw.githubusercontent.com/LauraBeatris/react-router-testing-utils/master/.github/docs/images/logo.png"
  />
</a>

<p>A collection of utilities to test React Router with React Testing Library</p>

</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![version][version-badge]][package] 
[![MIT License][license-badge]][license]
[![All Contributors](https://img.shields.io/badge/all_contributors-28-orange.svg?style=flat-square)](#contributors-)

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
[build-badge]: https://img.shields.io/github/workflow/status/LauraBeatris/react-router-testing-utils/CI?style=flat-square&logo=github
[build]: https://github.com/LauraBeatris/react-router-testing-utils/actions?query=workflow%3ACI
[version-badge]:
 https://img.shields.io/npm/v/react-router-testing-utils.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-router-testing-utils
[license-badge]: 
  https://img.shields.io/npm/l/react-router-testing-utils.svg?style=flat-square
[license]: https://github.com/LauraBeatris/react-router-testing-utils/blob/main/LICENSE
[github-watch-badge]:
  https://img.shields.io/github/watchers/LauraBeatris/react-router-testing-utils.svg?style=social
[github-watch]: https://github.com/LauraBeatris/react-router-testing-utils/watchers
[github-star-badge]:
  https://img.shields.io/github/stars/LauraBeatris/react-router-testing-utils.svg?style=social
[github-star]: https://github.com/LauraBeatris/react-router-testing-utils/stargazers
[twitter]:
  https://twitter.com/intent/tweet?text=Check%20out%20react-router-testing-utils%20by%20%40lauradotjs%20https%3A%2F%2Fgithub.com%2FLauraBeatris%2Freact-router-testing-utils%20%F0%9F%91%8D
[twitter-badge]:
  https://img.shields.io/twitter/url/https/github.com/LauraBeatris/react-router-testing-utils.svg?style=social
<!-- prettier-ignore-end -->

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [With TypeScript](#with-typescript)
- [Render in Router](#render-in-router)
- [Custom matchers](#custom-matchers)
  - [`toHaveQueryParam`](#tohavequeryparam)
- [LICENSE](#license)

## Installation

This module should be installed as one of your project's `devDependencies`:

With NPM 
```
npm install --save-dev react-router-testing-utils
```

or

With [yarn](https://yarnpkg.com/) package manager
```
yarn add --dev react-router-testing-utils
```

## Setup

Import `react-router-testing-utils/extend-expect` in your [tests setup
file][], in order to [extend Jest expectations][]:

[tests setup file]:
  https://jestjs.io/docs/en/configuration.html#setupfilesafterenv-array
[extend Jest expectations]: https://jestjs.io/docs/expect#expectextendmatchers

```js
// In your own jest-setup.js (or any other name)
import 'react-router-testing-utils/extend-expect'

// In jest.config.js add (if you haven't already)
setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
```

### With TypeScript

If you're using TypeScript, make sure your setup file is a `.ts` and not a `.js`
to include the necessary types.

You will also need to include your setup file in your `tsconfig.json` if you
haven't already:

```json
  // In tsconfig.json
  "include": [
    ...
    "./jest-setup.ts"
  ],
```
## Render in Router

This allows you to render a given component in a Router for un-browser environments

```js
renderInRouter(ExampleAppRoutes, {
   initialEntries: ['/about']
})

expect(screen.getByTestId('example-about-page')).toBeVisible()
```

## Custom matchers

### `toHaveQueryParam`

This allows you to check if a location search has a certain query param value.

A query param is contained in a location search if **all** the following conditions are met:
* It's name is contained in the location search
* It's value is contained in the location search
* It's given type corresponds to it's decoded value

In order to encode/decode query params, it's necessary to provide the param type from `ParamTypes` exported module

#### Examples

```javascript
import { ParamTypes } from 'react-router-testing-utils'

const { history } = renderInRouter(ExampleAppRoutes, {
   shouldCheckHistory: true,
})

expect(history?.location.search).toHaveQueryParam({
   name: 'filter-object',
   type: ParamTypes.ObjectParam,
   value: { foo: 'foo' }
})
```

## LICENSE

MIT