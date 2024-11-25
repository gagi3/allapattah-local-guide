import * as React from 'react';
// import lsdLogo from './assets/images/lsd.png';
import lsdLogo from './assets/images/lsd-badge.svg';
import { BsCompass, BsGeoAltFill } from 'react-icons/bs';
import LsdBadgeIcon from './components/LsdBadgeIcon';

function HeaderNavBar({ lsdOpen, setLsdOpen, setOpenCategory }) {
    const buttonStyle = (color, isLeftBtn) => {
        return {
            color: "white",
            backgroundColor: color,
            padding: '0 20px',
            textDecoration: 'none',
            boxShadow: '10px 10px 20px -10px black',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontStyle: 'italic',
            fontSize: '11px',
            width: isLeftBtn ? '330px' : '220px',
            justifyContent: 'center',
            clipPath: isLeftBtn ? 'polygon(4% 0%, 100% 0%, 97% 100%, 2% 100%)' : 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)',
            height: '100%',
            pointerEvents: isLeftBtn ? 'all' : 'none'
        };
    };
    return (
        <div className="header" style={{ position: 'absolute', left: '460px', top: 0 }}>
            <div className="links" style={{ height: '62px', marginTop: 'unset', display: 'flex' }}>
                <div style={{ filter: 'drop-shadow(rgba(0,0,0,0.7) 0px 0px 10px)', margin: 0, opacity: '0.8' }}>
                    {
                        lsdOpen
                            ? <a
                                href="#"
                                style={buttonStyle('#FF0000', true)}
                                onClick={() => { setLsdOpen(false); setOpenCategory('default'); }}>
                                <BsGeoAltFill style={{ fontSize: '30px', strokeWidth: 0.5 }} /><h1>Local Guide</h1>
                            </a>
                            : <a
                                href="#"
                                style={buttonStyle('#FF0000', true)}
                                onClick={() => { setLsdOpen(true); setOpenCategory('default_lsd'); }}>
                                    <LsdBadgeIcon height='60' width='40' /><h1>Little Santo Domingo</h1>
                            </a>
                    }
                </div>
                <div style={{ filter: 'drop-shadow(rgba(0,0,0,0.7) 0px 0px 10px)', margin: 0, opacity: '0.8' }}>
                    <a
                        href="#"
                        target="_new"
                        style={buttonStyle('#CE7421', false)}>
                        <BsCompass style={{ fontSize: '30px', strokeWidth: 0.5 }} /><h1>Historical Guide</h1>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default React.memo(HeaderNavBar);
