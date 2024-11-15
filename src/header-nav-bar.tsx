import * as React from 'react';
import lsdLogo from './assets/images/lsd.png';
import { BsCompass, BsGeoAltFill } from 'react-icons/bs';

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
            width: isLeftBtn ? '330px' : '220px',
            justifyContent: 'center',
            clipPath: isLeftBtn ? 'polygon(0% 0%, 100% 0%, 96% 100%, 2% 100%)' : 'polygon(5% 0%, 100% 0%, 96% 100%, 0% 100%)',
            height: '100%'
        };
    };
    return (
        <div className="header">
            <div className="links" style={{ height: '62px', marginTop: 'unset' }}>
                <div style={{ filter: 'drop-shadow(rgba(0,0,0,0.7) 0px 0px 10px)', margin: 0, opacity: '0.8' }}>
                    {
                        lsdOpen
                            ? <a
                                href="#"
                                style={buttonStyle('tomato', true)}
                                onClick={() => { setLsdOpen(false); setOpenCategory('default'); }}>
                                <BsGeoAltFill style={{ fontSize: '30px', strokeWidth: 0.5 }} /><h1>Local Guide</h1>
                            </a>
                            : <a
                                href="#"
                                style={buttonStyle('red', true)}
                                onClick={() => { setLsdOpen(true); setOpenCategory('default_lsd'); }}>
                                <img src={lsdLogo} /><h1>Little Santo Domingo</h1>
                            </a>
                    }
                </div>
                <div style={{ filter: 'drop-shadow(rgba(0,0,0,0.7) 0px 0px 10px)', margin: 0 }}>
                    <a
                        href="#"
                        target="_new"
                        style={buttonStyle('chocolate', false)}>
                        <BsCompass style={{ fontSize: '30px', strokeWidth: 0.5 }} /><h1>Historical Guide</h1>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default React.memo(HeaderNavBar);
