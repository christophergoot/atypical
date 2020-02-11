module.exports = {
  env: {
    browser: true,
    es6: true,
    mongo: true,
    jest: true
  },
  extends: [
    "react-app",
    "airbnb",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
      classes: true
    },
    ecmaVersion: 2018, // es9
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "prettier", "jsx-a11y", "import"],
  rules: {
    // 0 = disables, 1 = warn, 2 = error
    "prettier/prettier": ["error"],
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true }
    ],
    "no-plusplus": 0,
    "one-var": ["error", { initialized: "never", uninitialized: "always" }],
    "prefer-destructuring": ["error", { object: true, array: false }],
    "no-continue": 0,
    "no-shadow": 0,
    "no-use-before-define": 0,
    "no-prototype-builtins": 0,
    "no-restricted-syntax": [0, "ForInStatement", "ForOfStatement"],
    "no-else-return": 2,
    "import/no-named-as-default": 0, // withStyles messes with this...
    "import/no-extraneous-dependencies": 0,
    "import/no-cycle": 0, // will change to 2 once this work item is completed...
    "import/no-unresolved": 2, // turn on errors for missing imports
    "react/display-name": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-wrap-multilines": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/destructuring-assignment": [0, "always"],
    "react/no-array-index-key": 1, // will change to 2, eventually...
    "react/prop-types": 1,
    "react/require-default-props": 1,
    "@typescript-eslint/no-angle-bracket-type-assertion": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-this-alias": 0
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-this-alias": "off"
      }
    }
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
        directory: "./"
      }
    }
  }
};
