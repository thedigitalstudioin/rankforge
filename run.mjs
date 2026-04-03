import { execSync, spawn } from 'child_process';
import http from 'http';

// Kill existing servers
try { execSync('kill -9 $(lsof -ti :3000) 2>/dev/null', { shell: true }); } catch {}
try { execSync('kill -9 $(lsof -ti :3002) 2>/dev/null', { shell: true }); } catch {}

console.log('Starting Next.js dev server...');

const child = spawn('npx', ['next', 'dev'], {
  cwd: new URL('.', import.meta.url).pathname,
  stdio: ['ignore', 'pipe', 'pipe'],
  detached: true,
});

let output = '';
child.stdout.on('data', d => { output += d.toString(); process.stdout.write(d); });
child.stderr.on('data', d => { output += d.toString(); process.stderr.write(d); });

// Wait for ready then test
setTimeout(() => {
  const portMatch = output.match(/localhost:(\d+)/);
  const port = portMatch ? portMatch[1] : '3000';
  console.log(`\n\n========================================`);
  console.log(`Server running at: http://localhost:${port}`);
  console.log(`Test these URLs:`);
  console.log(`  http://localhost:${port}/services/on-page-seo`);
  console.log(`  http://localhost:${port}/services/on-page-seo/usa`);
  console.log(`  http://localhost:${port}/services/on-page-seo/usa/new-york`);
  console.log(`========================================\n`);

  // Quick test
  http.get(`http://localhost:${port}/services/on-page-seo`, (res) => {
    console.log(`/services/on-page-seo -> HTTP ${res.statusCode}`);
    child.unref();
  }).on('error', (e) => {
    console.log('Test failed:', e.message);
    child.unref();
  });
}, 10000);
