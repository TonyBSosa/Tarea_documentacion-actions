const globals = require("globals");
const pluginJs = require("@eslint/js");

module.exports = [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.node,
    },
    rules: {
      semi: "error",
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },
];
