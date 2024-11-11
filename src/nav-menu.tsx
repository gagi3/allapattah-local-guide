import * as React from 'react';
import InfoCard from './info-card';

function NavMenu() {
    const headerStyle = {
        position: 'absolute',
        left: 0,
        top: '130px',
        display: 'flex'
    };
    const buttonStyle = (color) => {
        return {
            color: "white",
            backgroundColor: color,
            padding: '10px',
            margin: '5px 0',
            display: "inline-block",
            width: "fit-content",
            textAlign: 'center',
            opacity: '0.8',
            textDecoration: 'none',
            minWidth: '130px'
        };
    };
    function displayInfoCard() {

    }
    return (
        <div className="nav-menu" style={headerStyle}>
            <div className="links" style={{ marginTop: 'unset', display: 'grid' }}>
                <a
                    href="#"
                    style={buttonStyle('tomato')}
                    onClick={displayInfoCard}>
                    <h3 style={{ margin: '5px' }}>EAT IT</h3>
                    in Allapattah
                </a>
                <a
                    href="#"
                    style={buttonStyle('slategray')}
                    onClick={displayInfoCard}>
                    <h3 style={{ margin: '5px' }}>BLESS UP</h3>
                    in Allapattah
                </a>
                <a
                    href="#"
                    style={buttonStyle('darkslateblue')}
                    onClick={displayInfoCard}>
                    <h3 style={{ margin: '5px' }}>WEAR IT</h3>
                    in Allapattah
                </a>
                <a
                    href="#"
                    style={buttonStyle('olivedrab')}
                    onClick={displayInfoCard}>
                    <h3 style={{ margin: '5px' }}>MADE IN</h3>
                    Allapattah
                </a>
                <a
                    href="#"
                    style={buttonStyle('gold')}
                    onClick={displayInfoCard}>
                    <h3 style={{ margin: '5px' }}>OUT IN</h3>
                    Allapattah
                </a>
                <a
                    href="#"
                    style={buttonStyle('slategray')}
                    onClick={displayInfoCard}>
                    <h3 style={{ margin: '5px' }}>SCHOOLED</h3>
                    in Allapattah
                </a>
                <a
                    href="#"
                    style={buttonStyle('tomato')}
                    onClick={displayInfoCard}>
                    <h3 style={{ margin: '5px' }}>INDUSTRIOUS</h3>
                    Allapattah
                </a>
            </div>
            <InfoCard />
        </div>
    );
}

export default React.memo(NavMenu);
