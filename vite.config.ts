import { defineConfig } from 'waku/config';
import { resolve } from 'path';

export default defineConfig({
  framework: {
    srcDir: resolve(__dirname, './src/app'),
  },
});
