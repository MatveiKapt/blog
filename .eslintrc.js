module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended',
    ],
    plugins: [
        'i18next',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        'react/jsx-indent': [2, 4, { checkAttributes: true }],
        'react/jsx-indent-props': [2, 4],
        '@typescript-eslint/indent': [2, 4],
        'import/prefer-default-export': [0],
        '@typescript-eslint/no-unused-vars': [1],
        'eslint linebreak-style': [0],
        'react/require-default-props': [0],
        'react/function-component-definition': [0],
        'react/jsx-props-no-spreading': [1],
        'import/no-extraneous-dependencies': [0],
        'no-underscore-dangle': [0],
        '@typescript-eslint/naming-convention': [0],
        'i18next/no-literal-string': [2, { markupOnly: true }],
        'max-len': [2, { ignoreComments: true }],
    },
    globals: {
        __IS_DEV__: true,
    },
};
