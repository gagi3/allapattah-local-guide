import * as React from 'react';
import HeaderNavBar from './header-nav-bar';
import btyb from './assets/images/btyb.png';

function ControlPanel({ lsdOpen, setLsdOpen, setOpenCategory }) {
  const navStyling = {
    right: "unset",
    backgroundColor: "transparent",
    color: "white",
    display: "flex",
    width: "unset",
    boxShadow: "unset",
    margin: 'unset',
    padding: 'unset'
  };
  const cpStyling = {
    right: "unset",
    backgroundColor: "tomato",
    lineHeight: "36px",
    width: "400px",
    height: "175px",
    fontSize: "18px",
    marginRight: '5px',
    fontStyle: 'italic',
    clipPath: 'polygon(0px 0px, 395px 0px, 400px 75px, 385px 165px, 150px 175px, 0px 170px)'
  }

  return (
    <div className="control-panel" style={navStyling}>
      <div style={{ filter: 'drop-shadow(rgba(0,0,0,0.7) 0px 0px 10px)', margin: 0, opacity: 0.9 }}>
        <div className="logo" style={cpStyling}>
          <div style={{ margin: '0' }}>
            <h1 style={{ margin: '0', padding: '15px 15px' }}>The Allapattah</h1>
            <h1 style={{ margin: '0', padding: '0 15px' }}>Local Guide</h1>
          </div>
          <div style={{ paddingTop: '10px', paddingLeft: '15px', display: 'flex', fontSize: '12px', alignItems: 'center' }}>
            <span style={{ display: 'flex', width: '15%', lineHeight: '12px', textAlign: 'end' }}>
              Brought to you by:
            </span>
            <img src={btyb} />
          </div>
        </div>
      </div>

      <HeaderNavBar lsdOpen={lsdOpen} setLsdOpen={setLsdOpen} setOpenCategory={setOpenCategory} />
    </div>
  );
}

export default React.memo(ControlPanel);
