import fs from 'fs-extra';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const MD_DIR = '_js_docs';
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
export const template = fs.readFileSync(path.join(__dirname, 'template.hbs'), 'utf8');
export const srcDirPath = path.join(__dirname, '../../src');
export const mdDirPath = path.join(__dirname, '../../docs', MD_DIR);
