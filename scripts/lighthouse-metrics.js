#!/usr/bin/env node

/**
 * Run Lighthouse and display performance metrics
 */

const fs = require('fs');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function runLighthouse(url, preset) {
  const outputFile = `./lighthouse-${preset}-${Date.now()}.json`;

  const command = `npx lighthouse ${url} --preset=${preset} --output=json --output-path=${outputFile} --chrome-flags="--headless" --quiet`;

  try {
    await execPromise(command);
    const data = JSON.parse(fs.readFileSync(outputFile, 'utf8'));
    fs.unlinkSync(outputFile); // Clean up

    return {
      performance: Math.round(data.categories.performance.score * 100),
      lcp: data.audits['largest-contentful-paint']?.displayValue,
      fcp: data.audits['first-contentful-paint']?.displayValue,
      cls: data.audits['cumulative-layout-shift']?.displayValue,
      tbt: data.audits['total-blocking-time']?.displayValue,
      si: data.audits['speed-index']?.displayValue
    };
  } catch (error) {
    if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);
    throw error;
  }
}

async function main() {
  const url = process.argv[2] || 'http://localhost:3000';

  console.log('\n🔍 Running Lighthouse Analysis...\n');

  try {
    // Desktop
    console.log('🖥️  Testing DESKTOP...');
    const desktop = await runLighthouse(url, 'desktop');

    console.log('\n📊 DESKTOP METRICS:');
    console.log(`   Performance: ${desktop.performance}/100`);
    console.log(`   LCP: ${desktop.lcp}`);
    console.log(`   FCP: ${desktop.fcp}`);
    console.log(`   CLS: ${desktop.cls}`);
    console.log(`   TBT: ${desktop.tbt}`);
    console.log(`   SI: ${desktop.si}`);

    // Mobile
    console.log('\n📱 Testing MOBILE...');
    const mobile = await runLighthouse(url, 'perf');

    console.log('\n📊 MOBILE METRICS:');
    console.log(`   Performance: ${mobile.performance}/100`);
    console.log(`   LCP: ${mobile.lcp}`);
    console.log(`   FCP: ${mobile.fcp}`);
    console.log(`   CLS: ${mobile.cls}`);
    console.log(`   TBT: ${mobile.tbt}`);
    console.log(`   SI: ${mobile.si}`);

    console.log('\n✅ Analysis complete!\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

main();
