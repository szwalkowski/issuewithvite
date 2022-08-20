/* eslint-env node */

module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint"
    ],
    extends: [
        "airbnb-base",
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        'no-useless-constructor': 'off',
        'max-len': [
            'warn',
            160,
            2,
            {
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off', // https://github.com/benmosher/eslint-plugin-import/issues/1174
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off'
    }
}
