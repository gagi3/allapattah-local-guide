import React, { useState } from 'react';
import HeaderNavBar from './header-nav-bar';
import alpLogo from './assets/images/alp-logo-a-cdc.png';
import { IMAGES } from './images';
import ALGService from './services/alg.service';
import axios from 'axios';
const ALLAPATTAH_LOCAL_GUIDE_SERVER_URL = process.env.ALLAPATTAH_LOCAL_GUIDE_SERVER_URL;

function ControlPanel({ lsdOpen, setLsdOpen, setOpenCategory }) {
  const [weather, setWeather] = useState({ isEmpty: true });
  if (weather.isEmpty) {
    axios.get(`${ALLAPATTAH_LOCAL_GUIDE_SERVER_URL}/weather/current`)
      .then((res) => {
        setWeather(res.data.data);
      })
      .catch(() => {
        setWeather(
          {
            temp: 85,
            main: "Clouds",
            icon: "04d"
          }
        )
      })
  }
  const navStyling = {
    right: "unset",
    backgroundColor: "transparent",
    color: "white",
    display: "flex",
    width: "unset",
    boxShadow: "unset",
    margin: 'unset',
    padding: 'unset',
    marginLeft: '-4px'
  };

  return (
    <>
      <div className="control-panel" style={navStyling}>
        <div style={{ paddingRight: '50px', paddingTop: '0', margin: 0, opacity: 0.9 }}>
          <img onClick={() => window.location.reload()} src={alpLogo} height='187px' width='482px' />
          <a href="https://allapattahcdc.org/" target="_new" style={{ position: 'absolute', zIndex: 3, left: 0, top: 0, height: '60px', width: '135px' }} />
          <div style={{ position: 'absolute', zIndex: 2, display: 'flex', left: '285px', top: '118px', flexDirection: 'row' }}>
            <img src={IMAGES.weather[`img${weather.icon}`]} alt={weather.main} height="40px" width='40px' />
            <p style={{ fontSize: '27px', margin: 0, alignSelf: 'end', color: '#F1FF94', fontFamily: 'Roboto', fontWeight: 900 }}>{Math.round(weather.temp)}°</p>
          </div>
        </div>
      </div>
      <HeaderNavBar lsdOpen={lsdOpen} setLsdOpen={setLsdOpen} setOpenCategory={setOpenCategory} />
    </>
  );
}

export default React.memo(ControlPanel);
