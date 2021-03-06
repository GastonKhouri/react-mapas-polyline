/* eslint import/no-webpack-loader-syntax: off */

import { useContext, useLayoutEffect, useRef } from 'react';

// @ts-ignore
import { Map } from '!mapbox-gl';

import { PlacesContext, MapContext } from '../context';
import { Loading } from './';

export const MapView = () => {

    const { isLoading, userLocation } = useContext( PlacesContext );
    const { setMap } = useContext( MapContext );

    const mapDiv = useRef<HTMLDivElement>( null );

    useLayoutEffect( () => {
        if ( !isLoading ) {
            const map = new Map( {
                container: mapDiv.current!,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: userLocation,
                zoom: 14
            } );

            setMap( map );
        }
    }, [ isLoading, userLocation ] );

    if ( isLoading ) {
        return ( <Loading /> );
    }

    return (
        <div
            ref={ mapDiv }
            style={ {
                height: '100vh',
                width: '100vw',
                top: 0,
                left: 0
            } }
        >
        </div>
    );
};

export default MapView;