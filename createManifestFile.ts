import fs from 'fs/promises';
import crypto from 'crypto';
import path from 'path';

const passDir = './passModel'; // your pass folder
const files = await fs.readdir(passDir);

const manifest: Record<string, string> = {};

for (const file of files) {
  if (file === 'manifest.json' || file === 'signature') continue;

  const filePath = path.join(passDir, file);
  const content = await fs.readFile(filePath);
  const hash = crypto.createHash('sha1').update(content).digest('hex');
  manifest[file] = hash;
}

await fs.writeFile(path.join(passDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log('manifest.json created!');
