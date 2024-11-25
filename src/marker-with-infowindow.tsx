import React, { useState, Image } from 'react';
import { BsStarFill, } from 'react-icons/bs';
import placeholder from './assets/images/no-image-placeholder.png'
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
  Pin,
  Marker
} from '@vis.gl/react-google-maps';
import CloseIcon from './components/CloseIcon';
import OpenSignIcon from './components/OpenSignIcon';
import LsdBadgeIcon from './components/LsdBadgeIcon';
import DirectionsIcon from './components/DirectionsIcon';

const MarkerWithInfowindow = ({ markerObject, activeMarkerKey, setActiveMarkerKey }) => {
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let isFullStar = i <= markerObject.rating;
    let starStyle = {
      color: isFullStar ? 'yellow' : 'white',
      stroke: 'black',
      strokeWidth: '1',
      height: '1em',
      width: '1em'
    }
    stars.push(
      <BsStarFill style={starStyle} />
    );
  }

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        key={markerObject.placeId}
        onClick={() => { setInfowindowOpen(true); setActiveMarkerKey(markerObject.placeId) }}
        position={{ lat: markerObject.coordinates.lat, lng: markerObject.coordinates.lng }}
        title={markerObject.title}>
        <Pin
          background={markerObject.category.hexColor}
          borderColor={markerObject.category.hexColor}
          glyphColor={markerObject.category.hexColor}></Pin>
      </AdvancedMarker>
      {infowindowOpen && activeMarkerKey === markerObject.placeId && (
        <InfoWindow
          anchor={marker}
          maxWidth={500}
          onClose={() => { setInfowindowOpen(false); setActiveMarkerKey('') }}
          headerDisabled={true}
          shouldFocus={true}
          style={{ padding: '0 !important', display: 'block', fontFamily: 'JosefinSansMd' }}
          className="marker-card"
        >
          <style>
            {
              `
                .gm-style-iw { padding: 0 !important; }
                .gm-style-iw-d { overflow: auto !important; overflow: hidden !important; }
                .gm-style-iw-c { max-width: 325px !important; max-height: 300px !important; }
              `
            }
          </style>

          <div className="card">
            <div className="card-header">
              <img src={markerObject.image || placeholder} width="100%" height="175px" style={{ objectFit: 'cover' }} alt={markerObject.title} />
              {
                markerObject.isLittleSantoDomingo && <LsdBadgeIcon height='40' width='25' style={{ position: 'absolute', top: '10', left: '10' }} />
              }
              <div style={{ top: '10px', right: '10px', position: 'absolute' }} onClick={() => setInfowindowOpen(false)}>
                <CloseIcon hw='13' />
              </div>
            </div>


            <div className="card-content" style={{ display: 'flex', padding: '10px', paddingTop: 0, gap: '20px', fontSize: '12px' }}>
              <div className="card-content-left" style={{ paddingTop: '10px', width: '60%' }}>
                <div className="details">
                  <h3 style={{ marginTop: '5px', marginBottom: '5px' }}>{markerObject.title}</h3>
                  <p style={{ marginTop: '5px', marginBottom: '5px' }}>{markerObject.phoneNumber}</p>
                  <a target="_blank" rel="noreferrer" style={{ marginTop: '5px', marginBottom: '5px', textDecoration: 'none', color: 'black', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} href={markerObject.url}>{markerObject.url}</a>
                  <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>{markerObject.address} <DirectionsIcon hw='16' /></h4>
                </div>
              </div>

              <div className="card-content-right" style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexWrap: 'nowrap',
                flexDirection: 'column'
              }}>
                <p style={{ color: 'grey', fontSize: '8px', fontStyle: 'italic', marginTop: 0 }}>Details from Google Maps</p>
                <div className="rating" style={{
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  gap: '3px',
                  flexDirection: 'row'
                }}>
                  <span style={{ fontSize: '16px', fontWeight: '700' }}>{markerObject.rating}</span>
                  {stars}
                </div>

                {
                  markerObject.isOpen && <div className="open-sign" style={{ paddingTop: '15px' }}>
                    <OpenSignIcon width='75' height='50' />
                  </div>
                }

              </div>
            </div>
          </div>
        </InfoWindow >
      )}
    </>
  );
};

export default React.memo(MarkerWithInfowindow);