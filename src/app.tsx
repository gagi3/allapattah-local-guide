import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import { APIProvider, Map } from '@vis.gl/react-google-maps';
import ControlPanel from './control-panel';
import NavMenu from './nav-menu';
import { MarkerWithInfowindow } from './marker-with-infowindow';
import BottomBanner from './bottom-banner';
import { POLYGONS } from './encoded-polygon-data';
import { Circle, Polygon, Polyline } from './components';
import { NAVIGATION_CATEGORIES } from './navigation-categories';
import { MARKERS } from './markers';
import { allapattahPlaces } from './AllapattahPlaces';

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const App = () => {
  const [lsdOpen, setLsdOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(`default${lsdOpen ? '_lsg' : ''}`);
  const [ activeMarkerKey, setActiveMarkerKey ] = useState('');
  var latLngBounds = {latLngBounds: {north: 25.9, south: 25.67, east: -80.016, west: -80.41}, strictBounds: false}
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        mapId={'bf51a910020fa25a'}
        // mapId={'1_896KkEiYyLFlyEcD8W9dF1L2Wsugkw'}
        defaultZoom={15}
        defaultCenter={{ lat: 25.7983, lng: -80.2330 }}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        zoomControl={true}
        restriction={latLngBounds}
        minZoom={10}
      >
        {
          lsdOpen
            ? <Polygon strokeOpacity={0.4} strokeWeight={1.5} strokeColor={'red'} encodedPaths={POLYGONS.LITTLE_SANTO_DOMINGO} />
            : <Polygon strokeOpacity={0.4} strokeWeight={4} strokeColor={'blue'} fillOpacity={0} encodedPaths={POLYGONS.MODERN_ALLAPATTAH} />
        }


        {allapattahPlaces.filter((marker) => {
          if (lsdOpen && !marker.isLittleSantoDomingo) {
            return false;
          }
          if (openCategory.indexOf('default') < 0 && openCategory !== marker.category.key) {
            return false;
          }
          return true;
        }).map((marker) => {
          return (<MarkerWithInfowindow markerObject={marker} activeMarkerKey={activeMarkerKey} setActiveMarkerKey = {setActiveMarkerKey} />)
        })}
      </Map>
      <ControlPanel lsdOpen={lsdOpen} setLsdOpen={setLsdOpen} setOpenCategory={setOpenCategory} />
      <NavMenu lsdOpen={lsdOpen} openCategory={openCategory} setOpenCategory={setOpenCategory} />
      {/* <BottomBanner /> */}
    </APIProvider>);
};
export default App;

export function renderToDom(container: HTMLElement) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
