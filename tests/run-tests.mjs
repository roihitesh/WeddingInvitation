import { build } from 'esbuild';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const testInput = join(__dirname, 'suite.test.ts');
const testOutput = join(__dirname, '.suite.test.bundle.mjs');

console.log('⚡ Compiling test suite with esbuild...');

try {
  await build({
    entryPoints: [testInput],
    outfile: testOutput,
    bundle: true,
    platform: 'node',
    target: 'node20',
    format: 'esm',
    packages: 'external',
    define: {
      'import.meta.env.VITE_SUPABASE_URL': '""',
      'import.meta.env.VITE_SUPABASE_ANON_KEY': '""',
    },
  });

  console.log('🧪 Running automated tests via native Node test runner...\n');

  const child = spawn(process.execPath, ['--test', testOutput], {
    stdio: 'inherit',
  });

  child.on('close', (code) => {
    process.exit(code ?? 0);
  });
} catch (err) {
  console.error('Failed to compile or run tests:', err);
  process.exit(1);
}
