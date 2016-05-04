# eslint config

## Usage

Run the following from the project's root:

`npm install eslint-config-kswedberg --save-dev`

In the project's `.eslintrc.js` file*:

```
module.exports = {
  'extends': 'kswedberg'
};
```

If you don't want es6 or react features:

```
module.exports = {
  'extends': 'kswedberg/es5'
};
```

\* Note: eslint supports a few different formats for the `...rc` file, including JavaScript, JSON, and YAML. You may use any format that eslint supports.
