#!/usr/bin/env node

/**
 * PageSpeed Insights API Analyzer
 * Uses the PageSpeed Insights API to analyze and track performance metrics
 *
 * Usage:
 *   node scripts/pagespeed-analyze.js https://your-site.com
 */

const API_KEY = 'AIzaSyBFGnRyY91g8mfFi6kz6A1j04k07fnourw';
const API_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

async function analyzePageSpeed(url, strategy = 'mobile') {
  const apiUrl = new URL(API_ENDPOINT);
  apiUrl.searchParams.set('url', url);
  apiUrl.searchParams.set('key', API_KEY);
  apiUrl.searchParams.set('strategy', strategy);
  apiUrl.searchParams.append('category', 'performance');
  apiUrl.searchParams.append('category', 'accessibility');
  apiUrl.searchParams.append('category', 'best-practices');
  apiUrl.searchParams.append('category', 'seo');

  console.log(`\n🔍 Analyzing: ${url} (${strategy})...\n`);

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return parseResults(data);
  } catch (error) {
    console.error('❌ Analysis failed:', error.message);
    throw error;
  }
}

function parseResults(data) {
  const lighthouse = data.lighthouseResult;
  const audits = lighthouse.audits;

  // Extract scores
  const scores = {};
  Object.keys(lighthouse.categories).forEach(cat => {
    scores[cat] = Math.round(lighthouse.categories[cat].score * 100);
  });

  // Core Web Vitals
  const fcp = audits['first-contentful-paint'];
  const lcp = audits['largest-contentful-paint'];
  const cls = audits['cumulative-layout-shift'];
  const tbt = audits['total-blocking-time'];
  const si = audits['speed-index'];

  const coreWebVitals = {
    fcp: fcp ? {
      value: fcp.numericValue,
      display: fcp.displayValue,
      rating: fcp.score
    } : null,
    lcp: lcp ? {
      value: lcp.numericValue,
      display: lcp.displayValue,
      rating: lcp.score
    } : null,
    cls: cls ? {
      value: cls.numericValue,
      display: cls.displayValue,
      rating: cls.score
    } : null,
    tbt: tbt ? {
      value: tbt.numericValue,
      display: tbt.displayValue,
      rating: tbt.score
    } : null,
    si: si ? {
      value: si.numericValue,
      display: si.displayValue,
      rating: si.score
    } : null
  };

  // Render blocking resources
  const renderBlocking = audits['render-blocking-resources'];
  const renderBlockingResources = (renderBlocking && renderBlocking.details?.items) ? renderBlocking.details.items : [];

  // Opportunities
  const opportunities = [];
  Object.keys(audits).forEach(key => {
    const audit = audits[key];
    if (audit && audit.score !== null && audit.score < 1 && audit.details?.overallSavingsMs) {
      opportunities.push({
        id: key,
        title: audit.title,
        description: audit.description,
        impact: audit.scoreDisplayMode === 'numeric' ? audit.numericValue : audit.displayValue,
        savings: audit.details.overallSavingsMs,
        wastedBytes: audit.details.overallSavingsBytes
      });
    }
  });

  // Sort by savings
  opportunities.sort((a, b) => (b.savings || 0) - (a.savings || 0));

  // Diagnostics
  const diagnostics = [];
  const diagnosticKeys = [
    'uses-long-cache-ttl',
    'total-byte-weight',
    'offscreen-images',
    'uses-text-compression',
    'modern-image-formats',
    'uses-optimized-images',
    'unminified-javascript',
    'unminified-css',
    'unused-css-rules',
    'unused-javascript',
    'legacy-javascript',
    'efficient-animated-content'
  ];

  diagnosticKeys.forEach(key => {
    const audit = audits[key];
    if (audit && audit.score !== null && audit.score < 1) {
      diagnostics.push({
        id: key,
        title: audit.title,
        description: audit.description,
        impact: audit.scoreDisplayMode === 'numeric' ? audit.numericValue : audit.displayValue
      });
    }
  });

  return {
    url: data.id,
    timestamp: data.analysisUTCTimestamp,
    scores,
    coreWebVitals,
    renderBlockingResources,
    opportunities,
    diagnostics
  };
}

function displayResults(results) {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('📊 PAGE SPEED INSIGHTS ANALYSIS');
  console.log('═══════════════════════════════════════════════════════════════\n');

  // Scores
  console.log('📈 SCORES:');
  Object.keys(results.scores).forEach(cat => {
    const score = results.scores[cat];
    const emoji = score >= 90 ? '🟢' : score >= 50 ? '🟡' : '🔴';
    console.log(`   ${emoji} ${cat.toUpperCase()}: ${score}/100`);
  });

  // Core Web Vitals
  console.log('\n🎯 CORE WEB VITALS:');
  const v = results.coreWebVitals;
  const ratingEmoji = (r) => r === null ? '⚪' : r >= 0.9 ? '🟢' : r >= 0.5 ? '🟡' : '🔴';

  if (v.fcp) console.log(`   ${ratingEmoji(v.fcp.rating)} First Contentful Paint: ${v.fcp.display}`);
  if (v.lcp) console.log(`   ${ratingEmoji(v.lcp.rating)} Largest Contentful Paint: ${v.lcp.display}`);
  if (v.cls) console.log(`   ${ratingEmoji(v.cls.rating)} Cumulative Layout Shift: ${v.cls.display}`);
  if (v.tbt) console.log(`   ${ratingEmoji(v.tbt.rating)} Total Blocking Time: ${v.tbt.display}`);
  if (v.si) console.log(`   ${ratingEmoji(v.si.rating)} Speed Index: ${v.si.display}`);

  // Render blocking
  if (results.renderBlockingResources.length > 0) {
    console.log('\n🚫 RENDER BLOCKING RESOURCES:');
    results.renderBlockingResources.slice(0, 10).forEach(item => {
      console.log(`   ⚠️  ${item.url}`);
      console.log(`      Size: ${(item.totalBytes / 1024).toFixed(1)} KB, Savings: ${item.wastedMs} ms`);
    });
  }

  // Top opportunities
  if (results.opportunities.length > 0) {
    console.log('\n💡 TOP OPTIMIZATION OPPORTUNITIES:');
    results.opportunities.slice(0, 10).forEach((opp, idx) => {
      console.log(`\n   ${idx + 1}. ${opp.title}`);
      console.log(`      Savings: ${opp.savings} ms${opp.wastedBytes ? ` (${(opp.wastedBytes / 1024).toFixed(1)} KB)` : ''}`);
      console.log(`      Description: ${opp.description.split('Learn more')[0].trim()}`);
    });
  }

  // Diagnostics
  if (results.diagnostics.length > 0) {
    console.log('\n🔍 DIAGNOSTIC ISSUES:');
    results.diagnostics.forEach(diag => {
      console.log(`   ⚠️  ${diag.title}`);
    });
  }

  console.log('\n═══════════════════════════════════════════════════════════════\n');
}

// Main
(async () => {
  const url = process.argv[2];

  if (!url) {
    console.error('❌ Error: Please provide a URL');
    console.log('Usage: node scripts/pagespeed-analyze.js <url>');
    process.exit(1);
  }

  try {
    // Analyze mobile
    const mobileResults = await analyzePageSpeed(url, 'mobile');
    displayResults(mobileResults);

    // Analyze desktop
    const desktopResults = await analyzePageSpeed(url, 'desktop');
    displayResults(desktopResults);

    console.log('✅ Analysis complete!\n');
  } catch (error) {
    console.error('❌ Failed to complete analysis:', error.message);
    process.exit(1);
  }
})();
