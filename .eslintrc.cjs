module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "airbnb-base",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
      "arrow-body-style": "off",
      "import/extensions": [
        "error", "ignorePackages"
      ],
      "quotes": ["error", "single", { "allowTemplateLiterals": true }],
      "no-multi-assign": ["error", { "ignoreNonDeclaration": true }],
      "no-param-reassign": "off",
      "no-plusplus": "off",
      "no-prototype-builtins": "off",
      "no-unused-expressions": "off",
      "no-use-before-define": ["error", { "functions": false }]
    },
}
