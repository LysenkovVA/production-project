// eslint-disable-next-line no-undef
module.exports = {
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended",
        "prettier",
    ],
    overrides: [
        {
            files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
            },
        },
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "i18next",
        "react-hooks",
        "raudbrand-plugin",
        "unused-imports",
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
                ignoreAttribute: [
                    "data-testid",
                    "to",
                    "name",
                    "target",
                    "justify",
                    "align",
                    "direction",
                    "gap",
                    "role",
                    "as",
                    "defaultValue",
                    "border",
                ],
            },
        ],
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "react-hooks/rules-of-hooks": "error",
        // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error",
        // Checks effect dependencies
        "react/display-name": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "no-undef": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        // Мой плагин
        "raudbrand-plugin/path-checker": [
            "error",
            {
                alias: "@",
            },
        ],
        "raudbrand-plugin/layer-imports": [
            "error",
            {
                alias: "@",
                ignoreImportPatterns: ["**/StoreProvider", "**/testing"],
            },
        ],
        "raudbrand-plugin/public-api-imports": [
            "error",
            {
                alias: "@",
                testFilesPatterns: [
                    "**/*.test.*",
                    "**/*.story.*",
                    "**/StoreDecorator.tsx",
                ],
            },
        ],
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-var-requires": "off",
        "unused-imports/no-unused-imports": "error",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-namespace": "off",
        "react/jsx-max-props-per-line": ["error", { maximum: 4 }],
    },
};
