import React, { useContext, useEffect, useState } from 'react'
import Map, { Marker, Popup, ScaleControl, NavigationControl, FullscreenControl, GeolocateControl } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css';
import env from '../../config/env';
import { MarkerContext } from '../../contexts/CheckoutProviders/MarkerProvider';

const MapCheckout = () => {
  const { marker } = useContext(MarkerContext)

  const [viewState, setViewState] = useState({
    latitude: 21.0342224,
    longitude: 105.7426091,
    zoom: 12
  })

  useEffect(() => {
    if (marker?.lng && marker?.lat) {
      setViewState(prev => ({
        ...prev,
        latitude: marker.lat,
        longitude: marker.lng,
      }
      ))
    }
  }, [marker])

  return (
    <div className="card">
      <div className="card-header">
        <strong className="card-title">Xác nhận địa chỉ nhận hàng</strong>
      </div>
      <div className='card-body' style={{ height: '500px' }}>
        <Map
          {...viewState}
          mapboxAccessToken={env.VITE_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onMove={event => setViewState(event.viewState)}
          // onClick={(e) => handleMarker(e.lngLat)}
          maxBounds={[
            [102.14441, 8.1790665],
            [109.469, 23.392],
          ]}
        >
          <Marker longitude={marker?.lng} latitude={marker?.lat} color='red' />
          {/* <Popup longitude={marker?.lng} latitude={marker?.lat + 0.01} closeOnClick={false}>
            <p>Hà Nội</p>
          </Popup> */}
          <NavigationControl position="top-left" />
          <FullscreenControl position="top-left" />
          <GeolocateControl position="top-left" />
          <ScaleControl />
        </Map>
      </div>
    </div>
  )
}

export default MapCheckout
