import { useDeepCompareMemoize } from '@local/hooks/use-deep-compare-memoize';

import { useCallback, useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';

import { Button } from '../button';
import { UpdateMapSettingsProps } from '.';

export function UpdateMapSettings(props: UpdateMapSettingsProps) {
  const map = useMap();
  const propsMemo = useDeepCompareMemoize(props);

  useEffect(() => {
    if (propsMemo.center && propsMemo.maxBounds && propsMemo.zoom) {
      map.setMaxBounds(propsMemo.maxBounds);
      map.setView(propsMemo.center, propsMemo.zoom);
    } else {
      if (propsMemo.center) {
        map.setView(propsMemo.center, propsMemo.zoom);
      }
    }
  }, [map, propsMemo]);

  return null;
}

export function CustomZoomControl() {
  const map = useMap();

  const handleZoomOut = useCallback(() => map.zoomOut(), [map]);
  const handleZoomIn = useCallback(() => map.zoomIn(), [map]);
  const [canZoomIn, setCanZoomIn] = useState(true);
  const [canZoomOut, setCanZoomOut] = useState(true);

  useEffect(() => {
    const updateZoomStatus = () => {
      setCanZoomIn(map.getZoom() < map.getMaxZoom());
      setCanZoomOut(map.getZoom() > map.getMinZoom());
    };

    map.on('zoomend', updateZoomStatus);
    updateZoomStatus();

    return () => {
      map.off('zoomend', updateZoomStatus);
    };
  }, [map]);
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: '20px',
        transform: 'translateY(-50%)',
        zIndex: 400,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        pointerEvents: 'none',
      }}
    >
      <Button
        isHiddenBorder
        genre='realebail-product'
        isWidthAsHeight
        isHidden={!canZoomIn}
        isDisabled={!canZoomIn}
        size='small'
        icons={[
          {
            name: 'Plus',
            type: 'id',
            size: 'medium',
          },
        ]}
        sx={{
          default: {
            pointerEvents: 'all',
          },
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleZoomIn();
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      />
      <Button
        isHiddenBorder
        genre='realebail-product'
        isHidden={!canZoomOut}
        isDisabled={!canZoomOut}
        isWidthAsHeight
        size='small'
        icons={[
          {
            name: 'Minus',
            type: 'id',
            size: 'medium',
          },
        ]}
        sx={{
          default: {
            pointerEvents: 'all',
          },
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleZoomOut();
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      />
    </div>
  );
}
