import * as React from 'react';
import HeaderNavBar from './header-nav-bar';
import alpLogo from './assets/images/alp-logo-temp.png';

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

  return (
    <div className="control-panel" style={navStyling}>
      <div style={{ filter: 'drop-shadow(rgba(0,0,0,0.7) 0px 0px 10px)', paddingRight: '50px', margin: 0, opacity: 0.9 }}>
          <img src={alpLogo} height='100%' width='100%' />
      </div>

      <HeaderNavBar lsdOpen={lsdOpen} setLsdOpen={setLsdOpen} setOpenCategory={setOpenCategory} />
    </div>
  );
}

export default React.memo(ControlPanel);
