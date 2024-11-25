import React from 'react';
import Boundaries from '../encoded-polygon-data';
import { Polyline } from './polyline';

const MapBoundaryLine = (props) => {
    const isLittleSantoDomingo = props?.isLittleSantoDomingo;
    const encodedPath = isLittleSantoDomingo ? Boundaries.LITTLE_SANTO_DOMINGO : Boundaries.MODERN_ALLAPATTAH;
    const lineSymbol = {
        path: "M 0,-1 0,1",
        strokeOpacity: 0.3,
        scale: 4,
        strokeColor: isLittleSantoDomingo ? '#CE1126' : '#002D62'
    };
    const options = {
        zIndex: 1,
        strokeOpacity: 0,
        strokeWeight: 3,
        icons: [
            {
                icon: lineSymbol,
                offset: 0,
                repeat: "20px"
            }
        ]
    };

    return (<Polyline options={options} encodedPath={encodedPath} />);
}

export default React.memo(MapBoundaryLine);