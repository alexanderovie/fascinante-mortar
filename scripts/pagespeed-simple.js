#!/usr/bin/env node

/**
 * Simple PageSpeed Insights - Quick metrics check
 */

const API_KEY = 'AIzaSyBFGnRyY91g8mfFi6kz6A1j04k07fnourw';
const API_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

async function getMetrics(url, strategy) {
  const apiUrl = new URL(API_ENDPOINT);
  apiUrl.searchParams.set('url', url);
  apiUrl.searchParams.set('key', API_KEY);
  apiUrl.searchParams.set('strategy', strategy);

  const response = await fetch(apiUrl);
  const data = await response.json();
  const lighthouse = data.lighthouseResult;

  return {
    performance: Math.round(lighthouse.categories.performance.score * 100),
    lcp: lighthouse.audits['largest-contentful-paint']?.displayValue,
    fcp: lighthouse.audits['first-contentful-paint']?.displayValue,
    cls: lighthouse.audits['cumulative-layout-shift']?.displayValue
  };
}

(async () => {
  const url = 'https://fascinante-mortar.vercel.app/';
  const mobile = await getMetrics(url, 'mobile');
  const desktop = await getMetrics(url, 'desktop');
  
  console.log('\n📊 PERFORMANCE METRICS:');
  console.log(`\n🖥️  Desktop: ${desktop.performance}/100`);
  console.log(`📱 Mobile: ${mobile.performance}/100`);
  console.log(`\n🎯 LCP:`);
  console.log(`   Desktop: ${desktop.lcp}`);
  console.log(`   Mobile: ${mobile.lcp}`);
  console.log('\n');
})();

