import React, { useState } from 'react';
import InfoCard from './info-card';
import { NAVIGATION_CATEGORIES } from './navigation-categories';

function NavMenu({ lsdOpen, openCategory, setOpenCategory }) {
    const headerStyle = {
        position: 'absolute',
        left: 0,
        top: '200px',
        display: 'flex'
    };
    const polygonShapes = [
        'polygon(0% 0%, 97% 0%, 100% 40%, 95% 95%, 80% 97%, 0% 100%)',
        'polygon(0% 3%, 80% 3%, 90% 0%, 100% 30%, 100% 80%, 95% 95%, 0% 100%)',
        'polygon(0% 3%, 95% 0%, 100% 25%, 100% 90%, 95% 97%, 0% 100%)',
        'polygon(0% 3%, 95% 0%, 100% 25%, 100% 90%, 95% 97%, 0% 100%)',
        'polygon(0% 3%, 95% 0%, 100% 25%, 100% 90%, 95% 97%, 0% 100%)',
        'polygon(0% 0%, 93% 0%, 100% 50%, 95% 95%, 80% 97%, 0% 100%)',
        'polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)'
    ];
    const buttonStyle = (color, index) => {
        return {
            color: "white",
            backgroundColor: color,
            padding: '10px 0',
            margin: '0',
            display: "inline-block",
            width: "fit-content",
            textAlign: 'center',
            textDecoration: 'none',
            minWidth: '130px',
            fontStyle: 'italic',
            fontWeight: '600',
            clipPath: polygonShapes[index]
        };
    };
    return (
        <div className="nav-menu" style={headerStyle}>
            {
                lsdOpen
                    ? <></>
                    : <div className="links" style={{ marginTop: 'unset', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {NAVIGATION_CATEGORIES.filter((category) => {
                            return category.displayInNav;
                        }).map((category, index) => {
                            return (
                                <div style={{ filter: 'drop-shadow(rgba(0,0,0,0.7) 0px 0px 10px)', margin: 0, opacity: openCategory === category.key ? '1' : '0.8' }}>
                                    <a
                                        href="#"
                                        style={buttonStyle(category.color, index)}
                                        onClick={() => setOpenCategory(category.key)}>
                                        <h3 style={{ margin: '5px' }}>{category.title}</h3>
                                        {category.subtitle}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
            }

            <InfoCard openCategory={openCategory} lsdOpen={lsdOpen} />
        </div>
    );
}

export default React.memo(NavMenu);
