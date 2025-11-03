module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'warn',
    '@next/next/no-img-element': 'warn',
  },
};
