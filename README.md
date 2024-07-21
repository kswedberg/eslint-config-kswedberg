# eslint config

## Install

Run the following from the project's root:

`npm install eslint-config-kswedberg --save-dev`

or:

`yarn add eslint-config-kswedberg --dev`

Then, add the config to the project's `eslint.config.x` or `.eslintrc.js` file as described in one of the usage sections below.

## Notes

* As of version 6.0.0, this package installs `@stylistic/eslint` and updates all the formatting rules to use the plugin instead of ESLint core. This is to prepare for ESLint's [deprecation of formatting rules](https://eslint.org/blog/2023/10/deprecating-formatting-rules/).

## FLAT CONFIG

### JavaScript (ES6+)

```js
import jsConfig from 'eslint-config-kswedberg/flat/js.mjs';

export default [
  ...jsConfig,
];
```

### Vue 3

```js
import vueConfig from 'eslint-config-kswedberg/flat/vue.mjs';

export default [
  ...vueConfig,
];
```

### Nuxt 3

You can use the Nuxt config in one of two ways…

With `@nuxt/eslint` (recommended):

```js
import nuxtConfig from 'eslint-config-kswedberg/flat/nuxt.mjs';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  ...nuxtConfig,
  // append project-specific configs
  // {
  //
  // }
);

```

Using this config by itself:

```js
import nuxtConfig from 'eslint-config-kswedberg/flat/nuxt.mjs';

export default [
  ...nuxtConfig,
];
```

### Globals

For the sake of completion, this repo offers configs for **browser** and **node.js** globals:

```js
import {browserGlobals, nodeGlobals} from 'eslint-config-kswedberg/flat/globals.mjs';

export default {
  browserGlobals,
  nodeGlobals,
  // other configs
};
```

For Vue and Nuxt globals, you're probably better off using a separate plugin. Consider `@nuxt/eslint` or `nuxt-eslint-globals` instead.  The ones included in this repo are static lists, so they are prone to become outdated. If you really want to use them, you can do so like this:

```js
// Vue-only globals
import {vueGlobals} from 'eslint-config-kswedberg/flat/globals.mjs';

export default [
  vueGlobals,
  // other configs
];
```

```js
// Vue AND Nuxt globals
import {nuxtGlobals} 'eslint-config-kswedberg/flat/globals.mjs'

export default [
  nuxtGlobals,
  // other configs
];
```

## LEGACY CONFIG

* **Deprecation Notice**: As of version 6 of this package, the legacy config files are deprecated in favor of the flat config.
* ESLint supports a few different formats for the `...rc` file, including JavaScript, JSON, and YAML. You may use any format that eslint supports.

### Plain JavaScript

For linting _with_ modern ECMAScript (JS) features enabled:

```js
module.exports = {
  extends: ['kswedberg']
};
```

### Vue & Nuxt

For Vue features, you have a few options for the `extends` value:

* **Nuxt 3.x**: `kswedberg/nuxt3`
* **Vue 3.x** (without Nuxt): `kswedberg/vue3`
* **Vue 2.x:** `kswedberg/vue`

#### Tips

* For all Vue or Nuxt versions, you'll need to install the **`eslint-plugin-vue` plugin**.
* For Nuxt 3 config, you'll probably want to include the `@nuxt/eslint-config` as well: `['@nuxt/eslint-config', 'kswedberg/nuxt3']`
* Nuxt 3 provides helper functions, composables, and Vue APIs as "[auto-imports](https://nuxt.com/docs/guide/concepts/auto-imports)." While convenient, using them as such will trigger ESLint undefined-variable warnings. The `kswedberg/nuxt3` config adds a number of them to the list of `globals`, but it doesn't cover everything, and doesn't attempt to include those created in your project's composables, components, or server/utils directories. For a robust solution to this problem, install the `nuxt-eslint-globals` module.

### React

If you want React (as well as es6) features enabled, change the `extends` value to `kswedberg/react`.

You'll need to have `eslint-plugin-react` installed.

### Legacy JS

If your project requires ancient browser compatability, use the `es5` config:

```js
module.exports = {
  'extends': ['kswedberg/es5']
};
```

## Disabling rules per file or line

I always forget how to do this, so I'm writing it down as a reminder to me. See more at [Configuring ESLint](http://eslint.org/docs/user-guide/configuring)

* Start disabling all rules for a file: `/* eslint-disable */`
* Enable rules later in same file: `/* eslint-enable */`
* Disable specific rules: `/* eslint-disable no-alert, no-console */`
* Disable all rules for current line (comment to the right): `// eslint-disable-line`
* Disable specific rules for current line: `// eslint-disable-line no-alert, quotes, semi`
* Disable all rules for next line: `// eslint-disable-next-line`
* Disable specific rules for next line: `// eslint-disable-next-line no-alert, quotes, semi`
