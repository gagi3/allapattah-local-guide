import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const {GOOGLE_MAPS_API_KEY = ''} = loadEnv(mode, process.cwd(), '');
  const {ALLAPATTAH_LOCAL_GUIDE_SERVER_URL = ''} = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env.GOOGLE_MAPS_API_KEY': JSON.stringify(GOOGLE_MAPS_API_KEY),
      'process.env.ALLAPATTAH_LOCAL_GUIDE_SERVER_URL': JSON.stringify(ALLAPATTAH_LOCAL_GUIDE_SERVER_URL)
    },
    base: '/allapattah-local-guide/',
    // base: './',
    resolve: {
      alias: {
        '@vis.gl/react-google-maps/examples.js':
          'https://visgl.github.io/react-google-maps/scripts/examples.js'
      }
    }
  };
});
