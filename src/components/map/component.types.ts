import { ReactNode } from 'react';
import { PopupProps } from 'react-leaflet';
import { Styles } from 'styled-components/dist/types';

export interface MapProps<T extends object> {
  markers: MarkerProps<T>[];

  theme: MapTheme;

  center?: [number, number];

  getCustomClusterLabel?: (markers: T[]) => string;

  maxBounds?: [[number, number], [number, number]];

  maxBoundsViscosity?: number;

  maxZoom?: number;

  minZoom?: number;

  style?: {
    popupWrapper?: Styles<object>;
    popupContent?: Styles<object>;
  };

  zoom?: number;
}
export interface UpdateMapSettingsProps {
  center?: [number, number];

  maxBounds?: [[number, number], [number, number]];

  zoom?: number;
}
export interface MapDotProps {
  onSelect: (coords: [number, number]) => void;

  theme: MapTheme;

  center?: [number, number];

  coords?: [number, number] | null;

  maxBounds?: [[number, number], [number, number]];

  maxBoundsViscosity?: number;

  maxZoom?: number;

  minZoom?: number;

  zoom?: number;
}
export interface MapTheme {
  attribution: string;

  name: string;

  url: string;
}

export type MarkerClusterProps<T extends object> = {
  markers: MarkerProps<T>[];
} & Pick<MapProps<T>, 'getCustomClusterLabel'>;
export interface MarkerProps<T extends object> {
  id: string;

  popupContent: ReactNode;

  position: {
    lat: number;
    lng: number;
  };

  options?: T;

  popupProps?: PopupProps;
}
