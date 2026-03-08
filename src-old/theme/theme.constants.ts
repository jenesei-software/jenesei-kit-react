export const THEME_PALETTE = {
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
} as const;

const THEME_GENRE = {
  'bustmarket-gray-violet': {
    background: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.black04,
    },
    color: {
      rest: THEME_PALETTE.violetStephanie,
      hover: THEME_PALETTE.violetJanice,
      placeholder: THEME_PALETTE.violetJanice,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
    },
  },
  'bustmarket-gray': {
    background: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.black04,
    },
    color: {
      rest: THEME_PALETTE.grayStephanie,
      hover: THEME_PALETTE.grayTina,
      placeholder: THEME_PALETTE.grayTina,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
    },
  },
  'bustmarket-violet': {
    background: {
      rest: THEME_PALETTE.violetStephanie,
      hover: THEME_PALETTE.violetJanice,
    },
    color: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
      placeholder: THEME_PALETTE.whiteStandard,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
    },
  },
  'bustmarket-white-violet': {
    background: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.violetJanice,
    },
    color: {
      rest: THEME_PALETTE.blackJanice,
      hover: THEME_PALETTE.whiteStandard,
      placeholder: THEME_PALETTE.whiteStandard,
    },
    border: {
      rest: THEME_PALETTE.grayFrances,
      hover: THEME_PALETTE.grayFrances,
    },
  },
  'realebail-white': {
    background: {
      rest: THEME_PALETTE.whiteJanice,
      hover: THEME_PALETTE.whiteJanice,
    },
    color: {
      rest: THEME_PALETTE.blueKaren,
      hover: THEME_PALETTE.blueMonica,
      placeholder: THEME_PALETTE.blueKaren,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
    },
  },
  'realebail-product': {
    background: {
      rest: THEME_PALETTE.blueKaren,
      hover: THEME_PALETTE.blueMonica,
    },
    color: {
      rest: THEME_PALETTE.whiteJanice,
      hover: THEME_PALETTE.whiteJanice,
      placeholder: THEME_PALETTE.whiteJanice,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
    },
  },
  'realebail-gray': {
    background: {
      rest: THEME_PALETTE.grayAdriana,
      hover: THEME_PALETTE.graySarah,
    },
    color: {
      rest: THEME_PALETTE.blackHelena,
      hover: THEME_PALETTE.blackHelena,
      placeholder: THEME_PALETTE.blackHelena,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
    },
  },
  white: {
    background: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
    },
    color: {
      rest: THEME_PALETTE.black80,
      hover: THEME_PALETTE.black60,
      placeholder: THEME_PALETTE.black80,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
    },
  },
  product: {
    background: {
      rest: THEME_PALETTE.blueRest,
      hover: THEME_PALETTE.blueHover,
    },
    color: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
      placeholder: THEME_PALETTE.whiteStandard,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
    },
  },
  productBorder: {
    background: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
    },
    color: {
      rest: THEME_PALETTE.blueRest,
      hover: THEME_PALETTE.blueHover,
      placeholder: THEME_PALETTE.blueRest,
    },
    border: {
      rest: THEME_PALETTE.blueRest,
      hover: THEME_PALETTE.blueHover,
    },
  },
  gray: {
    background: {
      rest: THEME_PALETTE.black10,
      hover: THEME_PALETTE.graySandra,
    },
    color: {
      rest: THEME_PALETTE.black60,
      hover: THEME_PALETTE.black60,
      placeholder: THEME_PALETTE.black80,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
    },
  },
  grayBorder: {
    background: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
    },
    color: {
      rest: THEME_PALETTE.black60,
      hover: THEME_PALETTE.black60,
      placeholder: THEME_PALETTE.black80,
    },
    border: {
      rest: THEME_PALETTE.black10,
      hover: THEME_PALETTE.graySandra,
    },
  },
  black: {
    background: {
      rest: THEME_PALETTE.black100,
      hover: THEME_PALETTE.black60,
    },
    color: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
      placeholder: THEME_PALETTE.whiteStandard,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
    },
  },
  blackBorder: {
    background: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
    },
    color: {
      rest: THEME_PALETTE.black100,
      hover: THEME_PALETTE.black60,
      placeholder: THEME_PALETTE.black100,
    },
    border: {
      rest: THEME_PALETTE.black100,
      hover: THEME_PALETTE.black60,
    },
  },
  greenTransparent: {
    background: {
      rest: THEME_PALETTE.green10,
      hover: THEME_PALETTE.green25,
    },
    color: {
      rest: THEME_PALETTE.green100,
      hover: THEME_PALETTE.green100,
      placeholder: THEME_PALETTE.green100,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
    },
  },
  yellowTransparent: {
    background: {
      rest: THEME_PALETTE.yellow10,
      hover: THEME_PALETTE.yellow25,
    },
    color: {
      rest: THEME_PALETTE.yellow100,
      hover: THEME_PALETTE.yellow100,
      placeholder: THEME_PALETTE.yellow100,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
    },
  },
  redTransparent: {
    background: {
      rest: THEME_PALETTE.red10,
      hover: THEME_PALETTE.red25,
    },
    color: {
      rest: THEME_PALETTE.red100,
      hover: THEME_PALETTE.red100,
      placeholder: THEME_PALETTE.red100,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
    },
  },
} as const;

const THEME_GENRE_IMAGE_SELECT = {
  'realebail-white': {
    background: {
      rest: THEME_PALETTE.whiteJanice,
      hover: THEME_PALETTE.whiteJanice,
    },
    color: {
      rest: THEME_PALETTE.blueKaren,
      hover: THEME_PALETTE.blueMonica,
      placeholder: THEME_PALETTE.blueKaren,
    },
    border: {
      rest: THEME_PALETTE.blueKaren,
      hover: THEME_PALETTE.blackHelena,
    },
  },
  gray: {
    background: {
      rest: THEME_PALETTE.black10,
      hover: THEME_PALETTE.graySandra,
    },
    color: {
      rest: THEME_PALETTE.black60,
      hover: THEME_PALETTE.black60,
      placeholder: THEME_PALETTE.black80,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
    },
  },
  grayBorder: {
    background: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
    },
    color: {
      rest: THEME_PALETTE.black60,
      hover: THEME_PALETTE.black60,
      placeholder: THEME_PALETTE.black80,
    },
    border: {
      rest: THEME_PALETTE.black10,
      hover: THEME_PALETTE.graySandra,
    },
  },
  blackBorder: {
    background: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
    },
    color: {
      rest: THEME_PALETTE.black100,
      hover: THEME_PALETTE.black60,
      placeholder: THEME_PALETTE.black100,
    },
    border: {
      rest: THEME_PALETTE.black100,
      hover: THEME_PALETTE.black60,
    },
  },
} as const;

const THEME_GENRE_INPUT = {
  'bustmarket-gray': {
    background: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
    },
    color: {
      rest: THEME_PALETTE.grayTina,
      hover: THEME_PALETTE.black80,
      placeholder: THEME_PALETTE.black40,
    },
    border: {
      rest: THEME_PALETTE.grayFrances,
      hover: THEME_PALETTE.grayBarbara,
    },
  },
  'realebail-white': {
    background: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
    },
    color: {
      rest: THEME_PALETTE.black80,
      hover: THEME_PALETTE.black80,
      placeholder: THEME_PALETTE.black40,
    },
    border: {
      rest: THEME_PALETTE.grayBarbara,
      hover: THEME_PALETTE.grayBarbara,
    },
  },
  gray: {
    background: {
      rest: THEME_PALETTE.grayJanice,
      hover: THEME_PALETTE.graySandra,
    },
    color: {
      rest: THEME_PALETTE.black60,
      hover: THEME_PALETTE.black60,
      placeholder: THEME_PALETTE.black80,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
    },
  },
  blackBorder: {
    background: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
    },
    color: {
      rest: THEME_PALETTE.black80,
      hover: THEME_PALETTE.black80,
      placeholder: THEME_PALETTE.black40,
    },
    border: {
      rest: THEME_PALETTE.black100,
      hover: THEME_PALETTE.black80,
    },
  },
  grayBorder: {
    background: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
    },
    color: {
      rest: THEME_PALETTE.black60,
      hover: THEME_PALETTE.black60,
      placeholder: THEME_PALETTE.black40,
    },
    border: {
      rest: THEME_PALETTE.black10,
      hover: THEME_PALETTE.graySandra,
    },
  },
} as const;

const THEME_GENRE_RANGE = {
  'bustmarket-gray': {
    track: {
      background: {
        rest: THEME_PALETTE.grayBarbara,
      },
      gradient: {
        rest: THEME_PALETTE.blueKaren,
      },
    },
    thumb: {
      background: {
        rest: THEME_PALETTE.whiteStandard,
        hover: THEME_PALETTE.whiteStandard,
      },
      border: {
        rest: THEME_PALETTE.blueRest,
        hover: THEME_PALETTE.blueRest,
      },
    },
  },
  'realebail-white': {
    track: {
      background: {
        rest: THEME_PALETTE.grayBarbara,
      },
      gradient: {
        rest: THEME_PALETTE.blueKaren,
      },
    },
    thumb: {
      background: {
        rest: THEME_PALETTE.whiteStandard,
        hover: THEME_PALETTE.whiteStandard,
      },
      border: {
        rest: THEME_PALETTE.blueRest,
        hover: THEME_PALETTE.blueRest,
      },
    },
  },
  gray: {
    track: {
      background: {
        rest: THEME_PALETTE.grayJanice,
      },
      gradient: {
        rest: THEME_PALETTE.black60,
      },
    },
    thumb: {
      background: {
        rest: THEME_PALETTE.grayBarbara,
        hover: THEME_PALETTE.grayBarbara,
      },
      border: {
        rest: THEME_PALETTE.black60,
        hover: THEME_PALETTE.black60,
      },
    },
  },
  blackBorder: {
    track: {
      background: {
        rest: THEME_PALETTE.graySandra,
      },
      gradient: {
        rest: THEME_PALETTE.black80,
      },
    },
    thumb: {
      background: {
        rest: THEME_PALETTE.graySandra,
        hover: THEME_PALETTE.graySandra,
      },
      border: {
        rest: THEME_PALETTE.black80,
        hover: THEME_PALETTE.black80,
      },
    },
  },
  grayBorder: {
    track: {
      background: {
        rest: THEME_PALETTE.graySandra,
      },
      gradient: {
        rest: THEME_PALETTE.black60,
      },
    },
    thumb: {
      background: {
        rest: THEME_PALETTE.whiteStandard,
        hover: THEME_PALETTE.whiteStandard,
      },
      border: {
        rest: THEME_PALETTE.black40,
        hover: THEME_PALETTE.black40,
      },
    },
  },
} as const;

const THEME_GENRE_SELECT = {
  'realebail-white': {
    background: {
      rest: THEME_PALETTE.whiteJanice,
      hover: THEME_PALETTE.whiteJanice,
      select: '',
    },
    color: {
      rest: THEME_PALETTE.blueKaren,
      hover: THEME_PALETTE.blueMonica,
      placeholder: THEME_PALETTE.blueKaren,
      select: '',
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
      select: '',
    },
  },
  gray: {
    background: {
      rest: THEME_PALETTE.grayJanice,
      hover: THEME_PALETTE.graySandra,
      select: '',
    },
    color: {
      rest: THEME_PALETTE.black60,
      hover: THEME_PALETTE.black60,
      placeholder: THEME_PALETTE.black80,
      select: '',
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
      select: '',
    },
  },
  blackBorder: {
    background: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
      select: THEME_PALETTE.blueActive,
    },
    color: {
      rest: THEME_PALETTE.black80,
      hover: THEME_PALETTE.black80,
      placeholder: THEME_PALETTE.black40,
      select: THEME_PALETTE.black100,
    },
    border: {
      rest: THEME_PALETTE.black100,
      hover: THEME_PALETTE.black80,
      select: THEME_PALETTE.blueRest,
    },
  },
  grayBorder: {
    background: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
      select: '',
    },
    color: {
      rest: THEME_PALETTE.black60,
      hover: THEME_PALETTE.black60,
      placeholder: THEME_PALETTE.black40,
      select: '',
    },
    border: {
      rest: THEME_PALETTE.black10,
      hover: THEME_PALETTE.graySandra,
      select: '',
    },
  },
} as const;

const THEME_GENRE_DATE = {
  'realebail-white': {
    background: {
      rest: THEME_PALETTE.whiteJanice,
      hover: THEME_PALETTE.whiteJanice,
      today: THEME_PALETTE.blueKaren,
      weekend: THEME_PALETTE.whiteJanice,
      choice: THEME_PALETTE.blueKaren,
      line: THEME_PALETTE.whiteJanice,
    },
    color: {
      rest: THEME_PALETTE.blueKaren,
      hover: THEME_PALETTE.blueMonica,
      placeholder: THEME_PALETTE.blueKaren,
      today: THEME_PALETTE.whiteStandard,
      weekend: THEME_PALETTE.blueMonica,
      choice: THEME_PALETTE.whiteStandard,
      line: THEME_PALETTE.transparent,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
      today: THEME_PALETTE.transparent,
      weekend: THEME_PALETTE.transparent,
      choice: THEME_PALETTE.transparent,
      line: THEME_PALETTE.transparent,
    },
  },
  blackBorder: {
    background: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
      today: THEME_PALETTE.black80,
      weekend: THEME_PALETTE.black10,
      choice: THEME_PALETTE.graySarah,
      line: THEME_PALETTE.whiteStandard,
    },
    color: {
      rest: THEME_PALETTE.black80,
      hover: THEME_PALETTE.black80,
      placeholder: THEME_PALETTE.black40,
      today: THEME_PALETTE.whiteStandard,
      weekend: THEME_PALETTE.black100,
      choice: THEME_PALETTE.whiteStandard,
      line: THEME_PALETTE.transparent,
    },
    border: {
      rest: THEME_PALETTE.black10,
      hover: THEME_PALETTE.graySandra,
      today: THEME_PALETTE.transparent,
      weekend: THEME_PALETTE.transparent,
      choice: THEME_PALETTE.transparent,
      line: THEME_PALETTE.transparent,
    },
  },
  gray: {
    background: {
      rest: THEME_PALETTE.grayJanice,
      hover: THEME_PALETTE.graySandra,
      today: THEME_PALETTE.graySarah,
      weekend: THEME_PALETTE.black10,
      choice: THEME_PALETTE.graySarah,
      line: THEME_PALETTE.transparent,
    },
    color: {
      rest: THEME_PALETTE.black60,
      hover: THEME_PALETTE.black60,
      placeholder: THEME_PALETTE.black80,
      today: THEME_PALETTE.whiteStandard,
      weekend: THEME_PALETTE.grayJanice,
      choice: THEME_PALETTE.whiteStandard,
      line: THEME_PALETTE.transparent,
    },
    border: {
      rest: THEME_PALETTE.transparent,
      hover: THEME_PALETTE.transparent,
      today: THEME_PALETTE.transparent,
      weekend: THEME_PALETTE.transparent,
      choice: THEME_PALETTE.transparent,
      line: THEME_PALETTE.transparent,
    },
  },
  grayBorder: {
    background: {
      rest: THEME_PALETTE.whiteStandard,
      hover: THEME_PALETTE.whiteStandard,
      today: THEME_PALETTE.black60,
      weekend: THEME_PALETTE.black10,
      line: THEME_PALETTE.transparent,
      choice: THEME_PALETTE.black60,
    },
    color: {
      rest: THEME_PALETTE.black60,
      hover: THEME_PALETTE.black60,
      placeholder: THEME_PALETTE.black80,
      today: THEME_PALETTE.whiteStandard,
      choice: THEME_PALETTE.whiteStandard,
      weekend: THEME_PALETTE.black80,
      line: THEME_PALETTE.transparent,
    },
    border: {
      rest: THEME_PALETTE.black10,
      hover: THEME_PALETTE.graySandra,
      today: THEME_PALETTE.transparent,
      weekend: THEME_PALETTE.black10,
      line: THEME_PALETTE.transparent,
      choice: THEME_PALETTE.transparent,
    },
  },
} as const;

const THEME_GENRE_TOGGLE = {
  product: {
    active: {
      rest: {
        border: THEME_PALETTE.transparent,
        track: THEME_PALETTE.blueRest,
        thumb: THEME_PALETTE.whiteStandard,
        thumbBoxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.1)',
      },
      hover: {
        border: THEME_PALETTE.transparent,
        track: THEME_PALETTE.blueHover,
        thumb: THEME_PALETTE.whiteStandard,
        thumbBoxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.6)',
      },
    },
    unActive: {
      rest: {
        border: THEME_PALETTE.transparent,
        track: THEME_PALETTE.black10,
        thumb: THEME_PALETTE.whiteStandard,
        thumbBoxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.1)',
      },
      hover: {
        border: THEME_PALETTE.transparent,
        track: THEME_PALETTE.graySandra,
        thumb: THEME_PALETTE.whiteStandard,
        thumbBoxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.6)',
      },
    },
  },
} as const;

const THEME_GENRE_SONNER = {
  black: {
    button: {
      genre: 'black',
    },
    wrapper: {
      background: THEME_PALETTE.whiteStandard,
      borderColor: THEME_PALETTE.grayKaren,
      boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.2)',
      boxShadowHover: '0px 10px 30px 0px rgba(0, 0, 0, 0.5)',
    },
    icon: {
      color: THEME_PALETTE.black100,
    },
    title: {
      color: THEME_PALETTE.black100,
    },
    description: {
      color: THEME_PALETTE.grayPatricia,
    },
  },
  greenTransparent: {
    button: {
      genre: 'greenTransparent',
    },
    wrapper: {
      background: THEME_PALETTE.green10Background,
      borderColor: THEME_PALETTE.green25,
      boxShadow: `0px 10px 30px 0px ${THEME_PALETTE.green25}`,
      boxShadowHover: `0px 10px 30px 0px  ${THEME_PALETTE.green50}`,
    },
    icon: {
      color: THEME_PALETTE.green100,
    },
    title: {
      color: THEME_PALETTE.green100,
    },
    description: {
      color: THEME_PALETTE.greenGoogle,
    },
  },
  redTransparent: {
    button: {
      genre: 'redTransparent',
    },
    wrapper: {
      background: THEME_PALETTE.red10Background,
      borderColor: THEME_PALETTE.red25,
      boxShadow: `0px 10px 30px 0px ${THEME_PALETTE.red25}`,
      boxShadowHover: `0px 10px 30px 0px  ${THEME_PALETTE.red50}`,
    },
    icon: {
      color: THEME_PALETTE.red100,
    },
    title: {
      color: THEME_PALETTE.red100,
    },
    description: {
      color: THEME_PALETTE.redGoogle,
    },
  },
  yellowTransparent: {
    button: {
      genre: 'yellowTransparent',
    },
    wrapper: {
      background: THEME_PALETTE.yellow10Background,
      borderColor: THEME_PALETTE.yellow25,
      boxShadow: `0px 10px 30px 0px ${THEME_PALETTE.yellow25}`,
      boxShadowHover: `0px 10px 30px 0px  ${THEME_PALETTE.yellow50}`,
    },
    icon: {
      color: 'yellow100',
    },
    title: {
      color: THEME_PALETTE.yellow100,
    },
    description: {
      color: THEME_PALETTE.yellowGoogle,
    },
  },
} as const;

const THEME_COLORS = {
  range: THEME_GENRE_RANGE,
  button: THEME_GENRE,
  imageSelect: THEME_GENRE_IMAGE_SELECT,
  input: THEME_GENRE_INPUT,
  select: THEME_GENRE_SELECT,
  date: THEME_GENRE_DATE,
  toggle: THEME_GENRE_TOGGLE,
  sonner: THEME_GENRE_SONNER,
} as const;

export const THEME_KEY_SIZE = {
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

export const THEME_GLOBAL_VALUE = {
  transition: {
    duration: '0.3s',
    timingFunction: 'ease',
    default: '0.3s ease',
    icon: '0.05s ease',
    color: [
      `outline 0s`,
      `opacity 0.3s ease`,
      `background-color 0.3s ease`,
      `color 0.3s ease`,
      `box-shadow 0.3s ease`,
      `border-color 0.3s ease`,
    ].join(', '),
    grid: [`grid-template-areas 0.3s ease`, `grid-template-rows 0.3s ease`, `grid-template-columns 0.3s ease`].join(
      ', ',
    ),
    withoutSize: [
      `outline 0s`,
      `opacity 0.3s ease`,
      `transform 0.3s ease`,
      `background-color 0.3s ease`,
      `color 0.3s ease`,
      `visibility 0.3s ease`,
      `box-shadow 0.3s ease`,
      `border-color 0.3s ease`,
      `left 0.3s ease`,
      `right 0.3s ease`,
      `grid-template-areas 0.3s ease`,
      `grid-template-rows 0.3s ease`,
      `grid-template-columns 0.3s ease`,
    ].join(', '),
    all: [
      `outline 0s`,
      `opacity 0.3s ease`,
      `transform 0.3s ease`,
      `background-color 0.3s ease`,
      `height 0.3s ease`,
      `max-height 0.3s ease`,
      `width 0.3s ease`,
      `color 0.3s ease`,
      `visibility 0.3s ease`,
      `box-shadow 0.3s ease`,
      `border-color 0.3s ease`,
      `left 0.3s ease`,
      `right 0.3s ease`,
      `grid-template-areas 0.3s ease`,
      `grid-template-rows 0.3s ease`,
      `grid-template-columns 0.3s ease`,
    ].join(', '),
  },
  scrollbar: {
    width: '4px',
    background: THEME_PALETTE.black05,
    thumb: THEME_PALETTE.black10,
    thumbBorder: THEME_PALETTE.black05,
  },
  screen: {
    breakpoint: {
      default: { isUse: 'false', media: 'null', width: 'null' },
      tablet: { width: '1290px', media: `screen and (max-width: 1290px)`, isUse: 'true' },
      mobile: { width: '850px', media: `screen and (max-width: 850px)`, isUse: 'true' },
    },
    orientation: {
      vertical: { width: 'null', media: 'orientation: portrait', isUse: 'false' },
      horizontal: { width: 'null', media: 'orientation: landscape', isUse: 'false' },
    },
  },
  font: {
    family: 'Inter',
    weight: '400',
    lineHeight: '1.2',
    sizeDevice: {
      default: '16px',
      mobile: '12px',
      tablet: '14px',
      vertical: '16px',
      horizontal: '16px',
    },
    sizeHeading: {
      h1: '2.5',
      h2: '2.25',
      h3: '2',
      h4: '1.75',
      h5: '1.5',
      h6: '1.25',
      h7: '1',
      h8: '0.75',
      h9: '0.5',
    },
  },
  effect: {
    input: 'inset 0px 0px 4px rgba(0, 0, 0, 0.20)',
    button: '0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  palette: THEME_PALETTE,
  background: THEME_PALETTE,
  state: {
    focus: THEME_PALETTE.black60,
    danger: THEME_PALETTE.redGoogle,
  },
  id: {
    ripple: 'ripple',
    dialog: 'dialog',
  },
  colors: THEME_COLORS,
} as const;

export const KEYFRAME_SHADOW_PULSE = 'keyframeShadowPulse';
export const KEYFRAME_SHIMMER = 'keyframeShimmer';
