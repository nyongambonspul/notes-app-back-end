module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": "airbnb-base",
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "lates"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-console": "off"
    }
}
