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
      <div onClick={ () => window.location.reload() } style={{ paddingRight: '50px', paddingTop: '10px', margin: 0, opacity: 0.9 }}>
          <img src={alpLogo} height='100%' width='100%' />
      </div>

      <HeaderNavBar lsdOpen={lsdOpen} setLsdOpen={setLsdOpen} setOpenCategory={setOpenCategory} />
    </div>
  );
}

export default React.memo(ControlPanel);
