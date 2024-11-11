import * as React from 'react';

function InfoCard() {
    return (
        <div className="card" style={{ backgroundColor: 'white', width: '20%', height: 'fit-content', margin: '20px 10px' }}>
            <h2 style={{ backgroundColor: 'tomato', color: 'white', marginBottom: 0 }}><b>EAT IT IN ALLAPATTAH</b></h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="Avatar" style={{ width: '100%' }} />
            <div className="container" style={{ margin: '10px', opacity: '0.8' }}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
            </div>
            <img src="https://thumbs.dreamstime.com/b/colored-map-markers-icon-set-marker-icons-idfferent-images-isolated-white-56283607.jpg" alt="Avatar" style={{ width: '50%' }} />
        </div>
    );
}

export default React.memo(InfoCard);
