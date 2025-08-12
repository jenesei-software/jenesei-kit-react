import { MapThemeList } from '@local/consts';

import { MapTheme } from '.';

export const DEFAULT_MAP_MAX_ZOOM = 18;
export const DEFAULT_MAP_MIN_ZOOM = 2;
export const DEFAULT_MAP_ZOOM = 13;
export const DEFAULT_MAP_CENTER: [number, number] = [-8.409518, 115.188919];
export const DEFAULT_MAP_THEME: MapTheme = MapThemeList.find((e) => e.name === 'OpenStreetMap') || MapThemeList[0];
