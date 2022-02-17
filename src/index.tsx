/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import ReactDOM from 'react-dom';

// @ts-ignore
import mapboxgl from '!mapbox-gl';

import MapsApp from './MapsApp';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

if ( !navigator.geolocation ) {
  alert( 'Tu navegador no tiene opción de Geolocalización' );
  throw new Error( 'Tu navegador no tiene opción de Geolocalización' );
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById( 'root' )
);
