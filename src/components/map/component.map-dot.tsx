import { useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet'
import 'react-leaflet-markercluster/styles'

import {
  CustomZoomControl,
  DEFAULT_MAP_THEME,
  DEFAULT_MAP_ZOOM,
  MapDotProps,
  MapWrapper,
  UpdateMapCenter,
  customDefaultIcon
} from '.'

import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet/dist/leaflet.css'

export const MapDot = (props: MapDotProps) => {
  const [position, setPosition] = useState<[number, number] | null>(props.coords ?? null)
  const [theme, setTheme] = useState(props.theme ?? DEFAULT_MAP_THEME)
  const [center, setCenter] = useState(props.center)

  useEffect(() => {
    setTheme(props.theme)
  }, [props.theme])

  useEffect(() => {
    if (props.center) {
      setCenter(props.center)
    }
  }, [props.center])

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        if ((e.originalEvent.target as HTMLElement).classList.contains('leaflet-container')) {
          const coords: [number, number] = [e.latlng.lat, e.latlng.lng]
          setPosition(coords)
          props.onSelect(coords)
        }
      }
    })
    return null
  }

  useEffect(() => {
    if (props.coords) {
      setPosition(props.coords)
    }
  }, [props.coords])
  return (
    center && (
      <MapWrapper>
        <MapContainer
          center={center}
          zoom={props.zoom ?? DEFAULT_MAP_ZOOM}
          style={{ height: '100%', width: '100%' }}
          maxZoom={18}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer
            url={theme?.url ?? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
            attribution={theme?.attribution}
          />
          <CustomZoomControl />
          <UpdateMapCenter center={center} />
          <MapClickHandler />
          {position && <Marker position={position} icon={customDefaultIcon()} />}
        </MapContainer>
      </MapWrapper>
    )
  )
}
