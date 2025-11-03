#!/bin/bash

# Lighthouse Local Testing Script
# Run: bash scripts/lighthouse-test.sh

echo "🔍 Starting Lighthouse local testing..."
echo ""

# Check if dev server is running
if ! curl -s http://localhost:3000 > /dev/null; then
    echo "❌ Dev server not running on port 3000"
    echo "   Starting dev server..."
    pnpm dev &
    DEV_PID=$!
    echo "   Waiting 15 seconds for server to start..."
    sleep 15
else
    echo "✅ Dev server already running"
    DEV_PID=""
fi

# Run Lighthouse for mobile
echo ""
echo "📱 Testing MOBILE performance..."
npx lighthouse http://localhost:3000 --preset=perf --only-categories=performance --output=html --output-path=./lighthouse-mobile.html --chrome-flags="--headless"

# Run Lighthouse for desktop
echo ""
echo "🖥️  Testing DESKTOP performance..."
npx lighthouse http://localhost:3000 --preset=desktop --only-categories=performance --output=html --output-path=./lighthouse-desktop.html --chrome-flags="--headless"

echo ""
echo "✅ Reports generated:"
echo "   📱 Mobile: lighthouse-mobile.html"
echo "   🖥️  Desktop: lighthouse-desktop.html"
echo ""

# Kill dev server if we started it
if [ ! -z "$DEV_PID" ]; then
    echo "Stopping dev server..."
    kill $DEV_PID
fi

