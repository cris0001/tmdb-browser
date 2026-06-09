module.exports = {
    root: true,
    env: { browser: true, es2022: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:react-hooks/recommended',
        'plugin:@tanstack/eslint-plugin-query/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
    },
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
}