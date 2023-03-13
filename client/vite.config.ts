import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import axios from 'axios';

const SERVER_URI = 'http://platform.beamworks.co.kr';

axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      '/api': {
        target: SERVER_URI,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
      },
    },
  },
});
