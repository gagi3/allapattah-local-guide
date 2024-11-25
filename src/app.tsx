import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import { APIProvider, Map } from '@vis.gl/react-google-maps';
import ControlPanel from './control-panel';
import NavMenu from './nav-menu';
import MarkerWithInfowindow from './marker-with-infowindow';
import NotificationBar from './notification-bar';
import MapBoundaryLine from './components/MapBoundaryLine';
import ALGService from './services/alg.service';
import axios from 'axios';
import { allapattahPlacesFallback } from './AllapattahPlaces';

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const App = () => {
  const [lsdOpen, setLsdOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(`default${lsdOpen ? '_lsg' : ''}`);
  const [allapattahPlaces, setAllapattahPlaces] = useState([]);
  if (!allapattahPlaces.length) {
    axios.get('https://container-service-1.5rp0ncja7r49c.eu-west-1.cs.amazonlightsail.com/categories/places-new')
      .then((res) => {
        setAllapattahPlaces(res.data);
      })
      .catch(() => {
        setAllapattahPlaces(allapattahPlacesFallback);
      });
  }
  const notificationBars = {
    alertNotificationBar: {
      category: 'alert',
      title: 'SOME TITLE',
      content: 'Some Content • Other Content',
    },
    infoNotificationBar: {
      category: 'info',
      title: 'ALLAPATTAH: EL NUESTRAS PALABRAS',
      content: 'A documentary About Allapattah • Watch Now'
    },
    warningNotificationBar: {
      category: 'warning',
      title: 'INTELIGENCIA ARTIFICIAL PARA PEQUENAS EMPRESAS',
      content: '04/12/24 2:30 PM • CONVERGE MIAMI • REGISTRATE AHORA'
    }
  }
  const [activeMarkerKey, setActiveMarkerKey] = useState('');
  const [notificationBarOpen, setNotificationBarOpen] = useState(true);
  var latLngBounds = { latLngBounds: { north: 25.9, south: 25.67, east: -80.016, west: -80.41 }, strictBounds: false }

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
        <MapBoundaryLine isLittleSantoDomingo={lsdOpen} />


        {allapattahPlaces.filter((marker) => {
          if (lsdOpen && !marker.isLittleSantoDomingo) {
            return false;
          }
          if (openCategory.indexOf('default') < 0 && openCategory !== marker.category.key) {
            return false;
          }
          return true;
        }).map((marker) => {
          return (<MarkerWithInfowindow markerObject={marker} activeMarkerKey={activeMarkerKey} setActiveMarkerKey={setActiveMarkerKey} />)
        })}
      </Map>
      <ControlPanel lsdOpen={lsdOpen} setLsdOpen={setLsdOpen} setOpenCategory={setOpenCategory} />
      <NavMenu lsdOpen={lsdOpen} openCategory={openCategory} setOpenCategory={setOpenCategory} />
      {/* <NotificationBar notificationBarOpen={notificationBarOpen} setNotificationBarOpen={setNotificationBarOpen} notificationBar={notificationBars.warningNotificationBar} /> */}
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
