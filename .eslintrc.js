module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
    ecmaFeatures:  {
      jsx:  true,  // Allows for the parsing of JSX
    },
  },
  rules:  {
    "jsx-a11y/alt-text": 1,
    "jsx-a11y/aria-role": 1,
    "jsx-a11y/aria-unsupported-elements": 1,
    curly: 2,
    "eol-last": 2,
    "jsx-a11y/heading-has-content": 1,
    "jsx-a11y/html-has-lang": 1,
    "jsx-a11y/iframe-has-title": 1,
    "jsx-a11y/img-redundant-alt": 1,
    "jsx-a11y/interactive-supports-focus": 1,
    "jsx-a11y/label-has-associated-control": 1,
    "jsx-a11y/lang": 1,
    "jsx-a11y/mouse-events-have-key-events": 1,
    "no-duplicate-imports": 2,
    "no-lonely-if": 2,
    "no-multiple-empty-lines": 2,
    "no-nested-ternary": 2,
    "jsx-a11y/no-redundant-roles": 1,
    "no-trailing-spaces": 2,
    "no-var": 2,
    "object-curly-newline": 2,
    "object-property-newline": 2,
    "jsx-a11y/role-has-required-aria-props": 1,
    "jsx-a11y/role-supports-aria-props": 1,
    semi: 2,
    "sort-keys": 2,
    "jsx-a11y/tabindex-no-positive": 1,
    "react/prop-types": 0,
    "@typescript-eslint/no-explicit-any": "off"
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings:  {
    react:  {
      version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  plugins: [
    "jsx-a11y"
  ]
};
