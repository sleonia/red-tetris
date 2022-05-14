module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        '@sbol/eslint-config/core',
        '@sbol/eslint-config/node',
        '@sbol/eslint-config/webpack',
        '@sbol/eslint-config/babel',
        '@sbol/eslint-config/jest',
        'next'
    ],
    parser: '@typescript-eslint/parser',
    settings: {
        'import/resolver': {
            webpack: {
                extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
            },
            node: {
                extensions: ['.js', '.ts', '.json']
            }
        }
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'comma-dangle': ['error', 'never']
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: './tsconfig.json'
            },
            rules: {
                '@typescript-eslint/no-confusing-void-expression': 'off',
                'react/jsx-no-bind': 'off',
                'react/forbid-component-props': 'off',
                '@sbol/common/no-package-json-imports': 'off'
            }
        },
        {
            files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx'],
            parserOptions: {
                project: './tsconfig.json'
            }
        }
    ]
}
