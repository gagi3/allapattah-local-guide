import * as React from 'react';
import { NAVIGATION_CATEGORIES } from './navigation-categories';
import { IMAGES } from './images';
// import default from './assets/images/default.jpg';
// import default_lsg from '/assets/images/default_lsg.jpg';

function InfoCard({ openCategory, lsdOpen }) {
    let category = NAVIGATION_CATEGORIES.find((currentCategory) => currentCategory.key === openCategory);
    let img = IMAGES[category?.key];
    const polygon = openCategory.indexOf('default') < 0
        ? 'polygon(0% 2%, 100% 0%, 100% 98%, 0% 100%)'
        : lsdOpen
            ? 'polygon(0% 1%, 40% 1.5%, 100% 0%, 100% 97%, 0% 100%)'
            : 'polygon(0% 3%, 95% 0%, 100% 3%, 100% 97%, 0% 100%)'
    const setOpacityOnChild = true;
    return (
        <div className="card-container" style={{ filter: 'drop-shadow(rgba(0,0,0,0.7) 0px 0px 10px)', margin: 0, opacity: setOpacityOnChild ? 1 : 0.8 }}>
            <div className="card" style={{ backgroundColor: !setOpacityOnChild ? 'rgba(255, 255, 255, 0.9)' : 'white', clipPath: polygon, display: 'flex', flexDirection: 'column', width: lsdOpen ? '380px' : '300px', height: 'fit-content', margin: lsdOpen ? 0 : '0 20px' }}>
                <h2 className="card-header" style={{ textTransform: 'uppercase', fontStyle: 'italic', backgroundColor: category?.color, color: 'white', marginBottom: 0, padding: '10px 20px', marginTop: '30px' }}><b>{category?.title}<br />{category?.subtitle}</b></h2>
                {
                    img
                        ? <img src={img} alt="Avatar" style={{ width: '100%', boxShadow: '0 20px 20px -25px black' }} />
                        : <></>
                }
                <div className="container" style={{ fontFamily: 'JosefinSans', fontWeight: '700', margin: '0 10px', opacity: '0.8', padding: '10px 20px 0 20px' }}>
                    <p>{category?.text}</p>
                </div>
                <img className="sponsor-image" src={IMAGES.sponsor} alt="Sponsor" style={{ width: '50%', alignSelf: 'center', paddingBottom: '15px' }} />
            </div>
        </div>
    );
}

export default React.memo(InfoCard);
