import React from 'react';
import {createRoot} from 'react-dom/client';

import {APIProvider, Map} from '@vis.gl/react-google-maps';
import ControlPanel from './control-panel';
import NavMenu from './nav-menu';
import BottomBanner from './bottom-banner';

const API_KEY = "";
  // globalThis.GOOGLE_MAPS_API_KEY ?? (process.env.GOOGLE_MAPS_API_KEY as string);

const App = () => (
  <APIProvider apiKey={API_KEY}>
    <Map
      defaultZoom={15}
      defaultCenter={{lat: 25.7983, lng: -80.2330}}
      gestureHandling={'none'}
      disableDefaultUI={true}
      zoomControl={false}
    />
    <ControlPanel />
    <NavMenu />
    <BottomBanner />
  </APIProvider>
);
export default App;

export function renderToDom(container: HTMLElement) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
