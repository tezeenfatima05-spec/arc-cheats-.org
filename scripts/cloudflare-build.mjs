import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const appRoot = path.join(repoRoot, '_template_clone', 'NOT-OPTIMISED-main');

/** Default Workers hostname — override in Cloudflare with PUBLIC_SITE_URL for custom domain. */
const DEFAULT_WORKERS_ORIGIN =
  'https://arc-cheats--org.tazeenrooziroti.workers.dev';

const siteUrl = (
  process.env.PUBLIC_SITE_URL?.trim() || DEFAULT_WORKERS_ORIGIN
).replace(/\/+$/, '');

const env = {
  ...process.env,
  PUBLIC_SITE_URL: siteUrl,
};

function run(cmd, args, cwd) {
  const result = spawnSync(cmd, args, {
    cwd,
    env,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log(`Cloudflare build — PUBLIC_SITE_URL=${siteUrl}`);

run('npm', ['ci'], appRoot);
run('npm', ['run', 'build'], appRoot);
