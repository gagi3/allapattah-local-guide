import * as React from 'react';
import HeaderNavBar from './header-nav-bar';
import NavMenu from './nav-menu';

function ControlPanel() {
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
    color: "darkkhaki",
    right: "unset",
    backgroundColor: "red",
    lineHeight: "36px",
    width: "400px",
    WebkitTextStroke: "1px black",
    fontSize: "18px",
    padding: '0 10px',
    marginRight: '5px'
  }
  return (
    <div className="control-panel" style={navStyling}>
      <div className="logo" style={cpStyling}>
        <h1>THE ALLAPATTAH LOCAL GUIDE</h1>
      </div>
      <HeaderNavBar />
    </div>
  );
}

export default React.memo(ControlPanel);
