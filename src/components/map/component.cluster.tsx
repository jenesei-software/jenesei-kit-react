import leaflet from 'leaflet';
import 'leaflet.markercluster';

import { Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import { createClusterIcon, customTextIcon, MarkerClusterProps } from '.';

export const MarkerCluster = <T extends object>(props: MarkerClusterProps<T>) => {
  return (
    <MarkerClusterGroup
      iconCreateFunction={(cluster: leaflet.MarkerCluster) => createClusterIcon(cluster, props.getCustomClusterLabel)}
      chunkedLoading
      showCoverageOnHover={false}
      spiderfyOnMaxZoom={false}
    >
      {props.markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          icon={customTextIcon(props?.getCustomClusterLabel?.(marker.options ? [marker.options] : []) ?? '')}
          {...({
            options: marker.options,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any)}
        >
          <Popup {...marker.popupProps}>{marker.popupContent}</Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
};
