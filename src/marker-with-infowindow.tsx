import React, { useState, Image } from 'react';
import { BsStarFill, BsXCircle, BsSignTurnRight } from 'react-icons/bs';
import logo from './assets/images/lsd.png';
import openSign from './assets/images/open-sign.png'
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
  Pin
} from '@vis.gl/react-google-maps';

export const MarkerWithInfowindow = ({ markerObject, activeMarkerKey, setActiveMarkerKey }) => {
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let isFullStar = i < markerObject.rating;
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
        onClick={() => {setInfowindowOpen(true); setActiveMarkerKey(markerObject.placeId)}}
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
          onClose={() => {setInfowindowOpen(false); setActiveMarkerKey('')}}
          headerDisabled={true}
          shouldFocus={true}
          style={{ padding: '0 !important', display: 'block', fontFamily: 'JosefinSansMd' }}
          className="marker-card"
        >
          <style>
            {
              `
                .gm-style-iw { padding: 0 !important; }
                .gm-style-iw-d { overflow: auto !important }
              `
            }
          </style>

          <div className="card">
            <div className="flag-icon" style={{ display: 'none' }}>
              <img src="flag-icon.png" alt="Dominican Flag" />
            </div>

            <div className="card-header">
              <img src={markerObject.image} width="100%" height="180px" style={{ objectFit: 'cover' }} alt={markerObject.title} />
              <img src={logo} style={{ top: '10px', left: '10px', position: 'absolute', display: markerObject.isLittleSantoDomingo ? 'block' : 'none' }} />
              <div style={{ top: '10px', right: '10px', position: 'absolute' }} onClick={() => setInfowindowOpen(false)}>
                <BsXCircle style={{ background: 'white', borderRadius: '50%' }} />
              </div>
            </div>


            <div className="card-content" style={{ display: 'flex', padding: '10px', paddingTop: 0, gap: '50px', fontSize: '14px' }}>
              <div className="card-content-left" style={{ paddingTop: '30px', width: '60%' }}>
                <div className="details">
                  <h2 style={{ marginTop: '5px', marginBottom: '5px' }}>{markerObject.title}</h2>
                  <p style={{ marginTop: '5px', marginBottom: '5px' }}>{markerObject.phoneNumber}</p>
                  <a target="_blank" style={{ marginTop: '5px', marginBottom: '5px', textDecoration: 'none', color: 'black', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} href={markerObject.url}>{markerObject.url}</a>
                  <h3 style={{ marginTop: '5px', marginBottom: '5px' }}>{markerObject.address} <BsSignTurnRight style={{ fontSize: '18px', strokeWidth: 0.4 }} /></h3>
                </div>
              </div>

              <div className="card-content-right" style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'nowrap',
                flexDirection: 'column'
              }}>
                <p style={{ color: 'grey', fontSize: '10px' }}>Details from Google Maps</p>
                <div className="rating" style={{
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  gap: '5px',
                  flexDirection: 'row'
                }}>
                  <span style={{ fontSize: '16px', fontWeight: '700' }}>4.2</span>
                  {stars}
                </div>

                {
                  markerObject.isOpen
                    ? <div className="open-sign">
                      <img width="80px" height="100%" src={openSign} />
                    </div>
                    : <></>
                }

              </div>
            </div>
          </div>
        </InfoWindow >
      )}
    </>
  );
};
