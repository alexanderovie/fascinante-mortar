#!/usr/bin/env node

/**
 * Chequea solo /audit con ESLint estricto
 */

const { ESLint } = require('eslint');

async function lintAudit() {
  const eslint = new ESLint({
    overrideConfig: {
      extends: ['next/core-web-vitals'],
      rules: {
        'no-unused-vars': 'error',
        'no-console': 'warn',
        'react/prop-types': 'off',
      },
    },
    useEslintrc: false,
  });

  const results = await eslint.lintFiles(['src/app/audit/page.js']);
  const formatter = await eslint.loadFormatter('stylish');
  const output = formatter.format(results);

  if (output) {
    console.log(output);
    process.exit(1);
  } else {
    console.log('✅ No hay errores de ESLint en /audit');
  }
}

lintAudit().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
