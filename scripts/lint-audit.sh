#!/bin/bash

# Script para chequear solo /audit con ESLint estricto

echo "🔍 Chequeando src/app/audit/page.js con ESLint estricto..."
echo ""

# Usar next lint que internamente usa ESLint con la config de Next.js
pnpm lint 2>&1 | grep -A20 "audit\|Error" || echo "✅ No se encontraron errores específicos en /audit"

# Alternativa: usar ESLint directamente si está disponible
if command -v eslint &> /dev/null; then
    echo ""
    echo "📋 Ejecutando ESLint directamente..."
    npx eslint src/app/audit/page.js --ext .js --format=stylish 2>&1 || true
fi

