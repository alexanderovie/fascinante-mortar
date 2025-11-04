#!/usr/bin/env node

/**
 * Run Lighthouse locally using @lhci/cli
 */

const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function runLighthouse() {
  console.log('\n🔍 Running Lighthouse locally...\n');

  try {
    // Start local dev server
    console.log('Starting dev server on port 3000...');
    const devServer = exec('pnpm dev', { detached: true });

    // Wait for server to be ready
    await new Promise(resolve => setTimeout(resolve, 10000));

    // Run Lighthouse
    console.log('Running Lighthouse audit...\n');
    const { stdout, stderr } = await execPromise(
      'npx lhci collect --url=http://localhost:3000 --collect.numberOfRuns=1'
    );

    console.log(stdout);

    // Kill dev server
    process.kill(-devServer.pid);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

runLighthouse();
