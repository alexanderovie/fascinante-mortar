import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = [
  ...nextVitals,
  {
    rules: {
      'react/no-unescaped-entities': 'warn',
      '@next/next/no-img-element': 'warn',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
    },
  },
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'node_modules/**',
      'public/**',
      'scripts/**',
      '*.config.js',
      '*.config.mjs',
    ],
  },
]

export default eslintConfig
