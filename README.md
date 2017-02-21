# eslint config

## Usage

Run the following from the project's root:

`npm install eslint-config-kswedberg --save-dev`

In the project's `.eslintrc.js` file* for linting _with_ es6 features enabled:

```
module.exports = {
  'extends': 'kswedberg'
};
```

If you want react (as well as es6) features enabled:

```
module.exports = {
  'extends': 'kswedberg/react'
};
```
Note that you'll need to have `eslint-plugin-react` installed.

If you _don't_ want es6 or react features:

```
module.exports = {
  'extends': 'kswedberg/es5'
};
```

\* Note: eslint supports a few different formats for the `...rc` file, including JavaScript, JSON, and YAML. You may use any format that eslint supports.

## Disabling rules per file or line

I always forget how to do this, so I'm writing it down as a reminder to me. See more at [Configuring ESLint](http://eslint.org/docs/user-guide/configuring)

* Start disabling all rules for a file: `/* eslint-disable */`
* Enable rules later in same file: `/* eslint-enable */`
* Disable specific rules: `/* eslint-disable no-alert, no-console */`
* Disable all rules for current line (comment to the right): `// eslint-disable-line`
* Disable specific rules for current line: `// eslint-disable-line no-alert, quotes, semi`
* Disable all rules for next line: `// eslint-disable-next-line`
* Disable specific rules for next line: `// eslint-disable-next-line no-alert, quotes, semi`
