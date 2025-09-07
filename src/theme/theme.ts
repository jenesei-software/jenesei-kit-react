import { getContrastYIQ } from '@local/functions';

import {
  ThemeMapBustmarket,
  ThemeMapCheckbox,
  ThemeMapId,
  ThemeMapLoading,
  ThemeMapLogo,
  ThemeMapRealebail,
} from './theme.interface';
import { LIBRARY_VERSION } from '..';
import {
  ITheme,
  IThemeGenre,
  IThemeGenreDate,
  IThemeGenreImageSelect,
  IThemeGenreInput,
  IThemeGenreRange,
  IThemeGenreSelect,
  IThemeGenreSonner,
  IThemeGenreToggle,
  IThemePaletteKeys,
  IThemeSize,
  IThemeSizePropertyDefault,
  IThemeSizePropertyToggle,
} from '.';
export const JeneseiPalette: Record<IThemePaletteKeys, string> = {
  currentColor: 'currentColor',
  inherit: 'inherit',
  transparent: 'transparent',
  black100: '#000000',
  black80: '#000000CC', // rgba(0 0 0 / 0.8)
  black60: '#00000099', // rgba(0 0 0 / 0.6)
  black50: '#00000080', // rgba(0 0 0 / 0.5)
  black40: '#00000066', // rgba(0 0 0 / 0.4)
  black10: '#0000001A', // rgba(0 0 0 / 0.1)
  black05: '#0000000D', // rgba(0 0 0 / 0.05)
  black04: '#0000000A', // rgba(0 0 0 / 0.04)
  blackHelena: '#181818',
  blackJanice: '#373740',
  grayJanice: '#f2f2f7',
  grayKaren: '#e5e5ea',
  grayMonica: '#c7c7cc',
  graySandra: '#d1d1d6',
  grayPatricia: '#484848',
  graySarah: '#737373',
  grayStassie: '#8D8D8F',
  grayAdriana: '#90909033',
  grayBarbara: '#EBEEEA',
  grayStephanie: '#6c7a91',
  grayTina: '#182433',
  grayFrances: '#dce1e7',
  whiteStandard: '#ffffff',
  whiteJanice: '#F7FAFF',
  greenGoogle: '#34a853',
  green100: '#34a853',
  green25: '#34A85340', // rgba(52 168 83 / 0.25)
  green50: '#34A85380', // rgba(52 168 83 / 0.50)
  green10: '#34A8531A', // rgba(52 168 83 / 0.1)
  green10Background: '#EFFFF3',
  yellowGoogle: '#fbbc04',
  yellow100: '#e4bc1b',
  yellow50: '#E4BC1B80', // rgba(228, 188, 27, 0.50)
  yellow25: '#E4BC1B40', // rgba(228, 188, 27, 0.25)
  yellow10: '#E4BC1B1A', // rgba(228, 188, 27, 0.1)
  yellow10Background: '#FFFBEA',
  redGoogle: '#ea4335',
  red100: '#ff4141',
  red50: '#FF414180', // rgba(255 65 65 / 0.50)
  red25: '#FF414140', // rgba(255 65 65 / 0.25)
  red10: '#FF41411A', // rgba(255 65 65 / 0.1)
  red10Background: '#FFEDED',
  blueGoogle: '#4285f4',
  blueRest: '#4195d2',
  blueActive: '#4195D21A', // rgba(65 149 210 / 0.1)
  blueHover: '#1769A5CC', // rgba(23 105 165 / 0.8)
  blueFocus: '#1769a5',
  blueBr: '#0975a6',
  blueKaren: '#2A77EE',
  blueMonica: '#174899',
  violetStephanie: '#a75afa',
  violetJanice: '#be83fd',
  amnezia: '#222224',
};

const ThemeGenre: IThemeGenre = {
  'bustmarket-gray-violet': {
    background: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.black04,
    },
    color: {
      rest: JeneseiPalette.violetStephanie,
      hover: JeneseiPalette.violetJanice,
      placeholder: JeneseiPalette.violetJanice,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
    },
  },
  'bustmarket-gray': {
    background: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.black04,
    },
    color: {
      rest: JeneseiPalette.grayStephanie,
      hover: JeneseiPalette.grayTina,
      placeholder: JeneseiPalette.grayTina,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
    },
  },
  'bustmarket-violet': {
    background: {
      rest: JeneseiPalette.violetStephanie,
      hover: JeneseiPalette.violetJanice,
    },
    color: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
      placeholder: JeneseiPalette.whiteStandard,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
    },
  },
  'bustmarket-white-violet': {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.violetJanice,
    },
    color: {
      rest: JeneseiPalette.blackJanice,
      hover: JeneseiPalette.whiteStandard,
      placeholder: JeneseiPalette.whiteStandard,
    },
    border: {
      rest: JeneseiPalette.grayFrances,
      hover: JeneseiPalette.grayFrances,
    },
  },
  'realebail-white': {
    background: {
      rest: JeneseiPalette.whiteJanice,
      hover: JeneseiPalette.whiteJanice,
    },
    color: {
      rest: JeneseiPalette.blueKaren,
      hover: JeneseiPalette.blueMonica,
      placeholder: JeneseiPalette.blueKaren,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
    },
  },
  'realebail-product': {
    background: {
      rest: JeneseiPalette.blueKaren,
      hover: JeneseiPalette.blueMonica,
    },
    color: {
      rest: JeneseiPalette.whiteJanice,
      hover: JeneseiPalette.whiteJanice,
      placeholder: JeneseiPalette.whiteJanice,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
    },
  },
  'realebail-gray': {
    background: {
      rest: JeneseiPalette.grayAdriana,
      hover: JeneseiPalette.graySarah,
    },
    color: {
      rest: JeneseiPalette.blackHelena,
      hover: JeneseiPalette.blackHelena,
      placeholder: JeneseiPalette.blackHelena,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
    },
  },
  white: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
    },
    color: {
      rest: JeneseiPalette.black80,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black80,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
    },
  },
  product: {
    background: {
      rest: JeneseiPalette.blueRest,
      hover: JeneseiPalette.blueHover,
    },
    color: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
      placeholder: JeneseiPalette.whiteStandard,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
    },
  },
  productBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
    },
    color: {
      rest: JeneseiPalette.blueRest,
      hover: JeneseiPalette.blueHover,
      placeholder: JeneseiPalette.blueRest,
    },
    border: {
      rest: JeneseiPalette.blueRest,
      hover: JeneseiPalette.blueHover,
    },
  },
  gray: {
    background: {
      rest: JeneseiPalette.black10,
      hover: JeneseiPalette.graySandra,
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black80,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
    },
  },
  grayBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black80,
    },
    border: {
      rest: JeneseiPalette.black10,
      hover: JeneseiPalette.graySandra,
    },
  },
  black: {
    background: {
      rest: JeneseiPalette.black100,
      hover: JeneseiPalette.black60,
    },
    color: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
      placeholder: JeneseiPalette.whiteStandard,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
    },
  },
  blackBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
    },
    color: {
      rest: JeneseiPalette.black100,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black100,
    },
    border: {
      rest: JeneseiPalette.black100,
      hover: JeneseiPalette.black60,
    },
  },
  greenTransparent: {
    background: {
      rest: JeneseiPalette.green10,
      hover: JeneseiPalette.green25,
    },
    color: {
      rest: JeneseiPalette.green100,
      hover: JeneseiPalette.green100,
      placeholder: JeneseiPalette.green100,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
    },
  },
  yellowTransparent: {
    background: {
      rest: JeneseiPalette.yellow10,
      hover: JeneseiPalette.yellow25,
    },
    color: {
      rest: JeneseiPalette.yellow100,
      hover: JeneseiPalette.yellow100,
      placeholder: JeneseiPalette.yellow100,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
    },
  },
  redTransparent: {
    background: {
      rest: JeneseiPalette.red10,
      hover: JeneseiPalette.red25,
    },
    color: {
      rest: JeneseiPalette.red100,
      hover: JeneseiPalette.red100,
      placeholder: JeneseiPalette.red100,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
    },
  },
};
const ThemeImageSelect: IThemeGenreImageSelect = {
  'realebail-white': {
    background: {
      rest: JeneseiPalette.whiteJanice,
      hover: JeneseiPalette.whiteJanice,
    },
    color: {
      rest: JeneseiPalette.blueKaren,
      hover: JeneseiPalette.blueMonica,
      placeholder: JeneseiPalette.blueKaren,
    },
    border: {
      rest: JeneseiPalette.blueKaren,
      hover: JeneseiPalette.blackHelena,
    },
  },
  gray: {
    background: {
      rest: JeneseiPalette.black10,
      hover: JeneseiPalette.graySandra,
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black80,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
    },
  },
  grayBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black80,
    },
    border: {
      rest: JeneseiPalette.black10,
      hover: JeneseiPalette.graySandra,
    },
  },
  blackBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
    },
    color: {
      rest: JeneseiPalette.black100,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black100,
    },
    border: {
      rest: JeneseiPalette.black100,
      hover: JeneseiPalette.black60,
    },
  },
};
const ThemeGenreInput: IThemeGenreInput = {
  'bustmarket-gray': {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
    },
    color: {
      rest: JeneseiPalette.grayTina,
      hover: JeneseiPalette.black80,
      placeholder: JeneseiPalette.black40,
    },
    border: {
      rest: JeneseiPalette.grayFrances,
      hover: JeneseiPalette.grayBarbara,
    },
  },
  'realebail-white': {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
    },
    color: {
      rest: JeneseiPalette.black80,
      hover: JeneseiPalette.black80,
      placeholder: JeneseiPalette.black40,
    },
    border: {
      rest: JeneseiPalette.grayBarbara,
      hover: JeneseiPalette.grayBarbara,
    },
  },
  gray: {
    background: {
      rest: JeneseiPalette.grayJanice,
      hover: JeneseiPalette.graySandra,
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black80,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
    },
  },
  blackBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
    },
    color: {
      rest: JeneseiPalette.black80,
      hover: JeneseiPalette.black80,
      placeholder: JeneseiPalette.black40,
    },
    border: {
      rest: JeneseiPalette.black100,
      hover: JeneseiPalette.black80,
    },
  },
  grayBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black40,
    },
    border: {
      rest: JeneseiPalette.black10,
      hover: JeneseiPalette.graySandra,
    },
  },
};
const ThemeGenreRange: IThemeGenreRange = {
  'bustmarket-gray': {
    track: {
      background: {
        rest: JeneseiPalette.grayBarbara,
      },
      gradient: {
        rest: JeneseiPalette.blueKaren,
      },
    },
    thumb: {
      background: {
        rest: JeneseiPalette.whiteStandard,
        hover: JeneseiPalette.whiteStandard,
      },
      border: {
        rest: JeneseiPalette.blueRest,
        hover: JeneseiPalette.blueRest,
      },
    },
  },
  'realebail-white': {
    track: {
      background: {
        rest: JeneseiPalette.grayBarbara,
      },
      gradient: {
        rest: JeneseiPalette.blueKaren,
      },
    },
    thumb: {
      background: {
        rest: JeneseiPalette.whiteStandard,
        hover: JeneseiPalette.whiteStandard,
      },
      border: {
        rest: JeneseiPalette.blueRest,
        hover: JeneseiPalette.blueRest,
      },
    },
  },
  gray: {
    track: {
      background: {
        rest: JeneseiPalette.grayJanice,
      },
      gradient: {
        rest: JeneseiPalette.black60,
      },
    },
    thumb: {
      background: {
        rest: JeneseiPalette.grayBarbara,
        hover: JeneseiPalette.grayBarbara,
      },
      border: {
        rest: JeneseiPalette.black60,
        hover: JeneseiPalette.black60,
      },
    },
  },
  blackBorder: {
    track: {
      background: {
        rest: JeneseiPalette.graySandra,
      },
      gradient: {
        rest: JeneseiPalette.black80,
      },
    },
    thumb: {
      background: {
        rest: JeneseiPalette.graySandra,
        hover: JeneseiPalette.graySandra,
      },
      border: {
        rest: JeneseiPalette.black80,
        hover: JeneseiPalette.black80,
      },
    },
  },
  grayBorder: {
    track: {
      background: {
        rest: JeneseiPalette.graySandra,
      },
      gradient: {
        rest: JeneseiPalette.black60,
      },
    },
    thumb: {
      background: {
        rest: JeneseiPalette.whiteStandard,
        hover: JeneseiPalette.whiteStandard,
      },
      border: {
        rest: JeneseiPalette.black40,
        hover: JeneseiPalette.black40,
      },
    },
  },
};
const ThemeSelect: IThemeGenreSelect = {
  'realebail-white': {
    background: {
      rest: JeneseiPalette.whiteJanice,
      hover: JeneseiPalette.whiteJanice,
      select: '',
    },
    color: {
      rest: JeneseiPalette.blueKaren,
      hover: JeneseiPalette.blueMonica,
      placeholder: JeneseiPalette.blueKaren,
      select: '',
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
      select: '',
    },
  },
  gray: {
    background: {
      rest: JeneseiPalette.grayJanice,
      hover: JeneseiPalette.graySandra,
      select: '',
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black80,
      select: '',
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
      select: '',
    },
  },
  blackBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
      select: JeneseiPalette.blueActive,
    },
    color: {
      rest: JeneseiPalette.black80,
      hover: JeneseiPalette.black80,
      placeholder: JeneseiPalette.black40,
      select: JeneseiPalette.black100,
    },
    border: {
      rest: JeneseiPalette.black100,
      hover: JeneseiPalette.black80,
      select: JeneseiPalette.blueRest,
    },
  },
  grayBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
      select: '',
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black40,
      select: '',
    },
    border: {
      rest: JeneseiPalette.black10,
      hover: JeneseiPalette.graySandra,
      select: '',
    },
  },
};
const ThemeGenreDate: IThemeGenreDate = {
  'realebail-white': {
    background: {
      rest: JeneseiPalette.whiteJanice,
      hover: JeneseiPalette.whiteJanice,
      today: JeneseiPalette.blueKaren,
      weekend: JeneseiPalette.whiteJanice,
      choice: JeneseiPalette.blueKaren,
      line: JeneseiPalette.whiteJanice,
    },
    color: {
      rest: JeneseiPalette.blueKaren,
      hover: JeneseiPalette.blueMonica,
      placeholder: JeneseiPalette.blueKaren,
      today: JeneseiPalette.whiteStandard,
      weekend: JeneseiPalette.blueMonica,
      choice: JeneseiPalette.whiteStandard,
      line: JeneseiPalette.transparent,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
      today: JeneseiPalette.transparent,
      weekend: JeneseiPalette.transparent,
      choice: JeneseiPalette.transparent,
      line: JeneseiPalette.transparent,
    },
  },
  blackBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
      today: JeneseiPalette.black80,
      weekend: JeneseiPalette.black10,
      choice: JeneseiPalette.graySarah,
      line: JeneseiPalette.whiteStandard,
    },
    color: {
      rest: JeneseiPalette.black80,
      hover: JeneseiPalette.black80,
      placeholder: JeneseiPalette.black40,
      today: JeneseiPalette.whiteStandard,
      weekend: JeneseiPalette.black100,
      choice: JeneseiPalette.whiteStandard,
      line: JeneseiPalette.transparent,
    },
    border: {
      rest: JeneseiPalette.black10,
      hover: JeneseiPalette.graySandra,
      today: JeneseiPalette.transparent,
      weekend: JeneseiPalette.transparent,
      choice: JeneseiPalette.transparent,
      line: JeneseiPalette.transparent,
    },
  },
  gray: {
    background: {
      rest: JeneseiPalette.grayJanice,
      hover: JeneseiPalette.graySandra,
      today: JeneseiPalette.graySarah,
      weekend: JeneseiPalette.black10,
      choice: JeneseiPalette.graySarah,
      line: JeneseiPalette.transparent,
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black80,
      today: JeneseiPalette.whiteStandard,
      weekend: JeneseiPalette.grayJanice,
      choice: JeneseiPalette.whiteStandard,
      line: JeneseiPalette.transparent,
    },
    border: {
      rest: JeneseiPalette.transparent,
      hover: JeneseiPalette.transparent,
      today: JeneseiPalette.transparent,
      weekend: JeneseiPalette.transparent,
      choice: JeneseiPalette.transparent,
      line: JeneseiPalette.transparent,
    },
  },
  grayBorder: {
    background: {
      rest: JeneseiPalette.whiteStandard,
      hover: JeneseiPalette.whiteStandard,
      today: JeneseiPalette.black60,
      weekend: JeneseiPalette.black10,
      line: JeneseiPalette.transparent,
      choice: JeneseiPalette.black60,
    },
    color: {
      rest: JeneseiPalette.black60,
      hover: JeneseiPalette.black60,
      placeholder: JeneseiPalette.black80,
      today: JeneseiPalette.whiteStandard,
      choice: JeneseiPalette.whiteStandard,
      weekend: JeneseiPalette.black80,
      line: JeneseiPalette.transparent,
    },
    border: {
      rest: JeneseiPalette.black10,
      hover: JeneseiPalette.graySandra,
      today: JeneseiPalette.transparent,
      weekend: JeneseiPalette.black10,
      line: JeneseiPalette.transparent,
      choice: JeneseiPalette.transparent,
    },
  },
};
const ThemeGenreToggle: IThemeGenreToggle = {
  product: {
    active: {
      rest: {
        border: JeneseiPalette.transparent,
        track: JeneseiPalette.blueRest,
        thumb: JeneseiPalette.whiteStandard,
        thumbBoxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.1)',
      },
      hover: {
        border: JeneseiPalette.transparent,
        track: JeneseiPalette.blueHover,
        thumb: JeneseiPalette.whiteStandard,
        thumbBoxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.6)',
      },
    },
    unActive: {
      rest: {
        border: JeneseiPalette.transparent,
        track: JeneseiPalette.black10,
        thumb: JeneseiPalette.whiteStandard,
        thumbBoxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.1)',
      },
      hover: {
        border: JeneseiPalette.transparent,
        track: JeneseiPalette.graySandra,
        thumb: JeneseiPalette.whiteStandard,
        thumbBoxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.6)',
      },
    },
  },
};
const ThemeGenreSonner: IThemeGenreSonner = {
  black: {
    button: {
      genre: 'black',
    },
    wrapper: {
      background: JeneseiPalette.whiteStandard,
      borderColor: JeneseiPalette.grayKaren,
      boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.2)',
      boxShadowHover: '0px 10px 30px 0px rgba(0, 0, 0, 0.5)',
    },
    icon: {
      color: JeneseiPalette.black100,
    },
    title: {
      color: JeneseiPalette.black100,
    },
    description: {
      color: JeneseiPalette.grayPatricia,
    },
  },
  greenTransparent: {
    button: {
      genre: 'greenTransparent',
    },
    wrapper: {
      background: JeneseiPalette.green10Background,
      borderColor: JeneseiPalette.green25,
      boxShadow: `0px 10px 30px 0px ${JeneseiPalette.green25}`,
      boxShadowHover: `0px 10px 30px 0px  ${JeneseiPalette.green50}`,
    },
    icon: {
      color: JeneseiPalette.green100,
    },
    title: {
      color: JeneseiPalette.green100,
    },
    description: {
      color: JeneseiPalette.greenGoogle,
    },
  },
  redTransparent: {
    button: {
      genre: 'redTransparent',
    },
    wrapper: {
      background: JeneseiPalette.red10Background,
      borderColor: JeneseiPalette.red25,
      boxShadow: `0px 10px 30px 0px ${JeneseiPalette.red25}`,
      boxShadowHover: `0px 10px 30px 0px  ${JeneseiPalette.red50}`,
    },
    icon: {
      color: JeneseiPalette.red100,
    },
    title: {
      color: JeneseiPalette.red100,
    },
    description: {
      color: JeneseiPalette.redGoogle,
    },
  },
  yellowTransparent: {
    button: {
      genre: 'yellowTransparent',
    },
    wrapper: {
      background: JeneseiPalette.yellow10Background,
      borderColor: JeneseiPalette.yellow25,
      boxShadow: `0px 10px 30px 0px ${JeneseiPalette.yellow25}`,
      boxShadowHover: `0px 10px 30px 0px  ${JeneseiPalette.yellow50}`,
    },
    icon: {
      color: 'yellow100',
    },
    title: {
      color: JeneseiPalette.yellow100,
    },
    description: {
      color: JeneseiPalette.yellowGoogle,
    },
  },
};

export const ThemeLight: ITheme = {
  icon: {
    map: {
      id: ThemeMapId,
      checkbox: ThemeMapCheckbox,
      loading: ThemeMapLoading,
      realebail: ThemeMapRealebail,
      logo: ThemeMapLogo,
      bustmarket: ThemeMapBustmarket,
    },
    getIconId(props) {
      return `#${props.type}-${props.name}`;
    },
    getSpriteUrl(props) {
      return `https://assets.jenesei.ru/icons/${props.type}.svg?v=${LIBRARY_VERSION}`;
    },
  },
  transition: {
    duration: '0.3s',
    timingFunction: 'ease',
    default: '0.3s ease',
    icon: '0.05s ease',
  },
  scrollbar: {
    width: 4,
    background: JeneseiPalette.black05,
    thumb: JeneseiPalette.black10,
    thumbBorder: JeneseiPalette.black05,
  },
  font: {
    family: 'Inter',
    weight: 400,
    lineHeight: 1.2,
    sizeDefault: {
      default: 16,
      mobile: 12,
      tablet: 14,
    },
    sizeHeading: {
      h1: 2.5,
      h2: 2.25,
      h3: 2,
      h4: 1.75,
      h5: 1.5,
      h6: 1.25,
      h7: 1,
      h8: 0.75,
      h9: 0.5,
    },
  },
  screens: {
    default: { width: 1920 },
    tablet: { width: 1290 },
    mobile: { width: 850 },
  },
  effects: {
    input: 'inset 0px 0px 4px rgba(0, 0, 0, 0.20)',
    button: '0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  palette: JeneseiPalette,
  background: JeneseiPalette,
  states: {
    focus: JeneseiPalette.black60,
    danger: JeneseiPalette.redGoogle,
  },
  colors: {
    range: ThemeGenreRange,
    sonner: ThemeGenreSonner,
    button: ThemeGenre,
    date: ThemeGenreDate,
    toggle: ThemeGenreToggle,
    checkbox: ThemeGenre,
    input: ThemeGenreInput,
    imageSelect: ThemeImageSelect,
    select: ThemeSelect,
  },
  getContrastYIQ: getContrastYIQ,
};
export const ThemeBlack: ITheme = ThemeLight;

export const KEY_SIZE_DATA: Record<IThemeSize, IThemeSizePropertyDefault> = {
  large: {
    height: 46,
    heightIcon: 24,
    radius: 6,
    padding: 16,
    font: 20,
  },
  largeMedium: {
    height: 42,
    heightIcon: 22,
    radius: 6,
    padding: 14,
    font: 18,
  },
  medium: {
    height: 38,
    heightIcon: 20,
    radius: 6,
    padding: 12,
    font: 16,
  },
  mediumSmall: {
    height: 34,
    heightIcon: 18,
    radius: 6,
    padding: 10,
    font: 14,
  },
  small: {
    height: 30,
    heightIcon: 16,
    radius: 8,
    padding: 8,
    font: 12,
  },
};
export const KEY_SIZE_DATA_TOGGLE: Record<IThemeSize, IThemeSizePropertyToggle> = {
  large: {
    height: 46,
    width: 92,
    padding: 3,
    thumb: 40,
  },
  largeMedium: {
    height: 42,
    width: 84,
    padding: 2,
    thumb: 38,
  },
  medium: {
    height: 38,
    width: 76,
    padding: 2,
    thumb: 34,
  },
  mediumSmall: {
    height: 34,
    width: 68,
    padding: 2,
    thumb: 30,
  },
  small: {
    height: 30,
    width: 60,
    padding: 2,
    thumb: 26,
  },
};
