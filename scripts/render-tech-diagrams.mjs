import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const browser = process.env.BROWSER_BIN || (
  process.platform === 'darwin'
    ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    : '/usr/bin/chromium'
);
if (!existsSync(browser)) throw new Error('Set BROWSER_BIN to a Chrome or Chromium executable.');

const output = resolve(root, 'public/diagrams');
mkdirSync(output, { recursive: true });
const profile = mkdtempSync(resolve(tmpdir(), 'unframe-diagram-browser-'));
try {
  for (const name of ['overview', 'mr', 'web', 'backend', 'framework']) {
    const page = pathToFileURL(resolve(root, 'diagrams/index.html'));
    page.searchParams.set('diagram', name);
    const png = resolve(output, `tech-${name}.png`);
    const result = spawnSync(browser, [
      '--headless', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
      '--no-default-browser-check', '--disable-background-networking',
      `--user-data-dir=${profile}`, '--window-size=1768,650',
      '--force-device-scale-factor=2', '--virtual-time-budget=1500',
      '--run-all-compositor-stages-before-draw', `--screenshot=${png}`, page.href,
    ], { encoding: 'utf8', timeout: 30_000 });
    if (result.error || result.status !== 0 || !existsSync(png)) {
      throw result.error || new Error(result.stderr || `Failed to render ${name}`);
    }
    console.log(`Rendered ${png}`);
  }
} finally {
  rmSync(profile, { recursive: true, force: true });
}
