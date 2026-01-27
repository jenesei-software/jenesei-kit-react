import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css';

import { JeneseiPalette, ThemeGenre, ThemeGenreRange } from './theme';

const ThemeComponent = createThemeContract({
  colors: {
    range: {
      'bustmarket-gray': {
        track: {
          background: {
            rest: null,
          },
          gradient: {
            rest: null,
          },
        },
        thumb: {
          background: {
            rest: null,
            hover: null,
          },
          border: {
            rest: null,
            hover: null,
          },
        },
      },
      'realebail-white': {
        track: {
          background: {
            rest: null,
          },
          gradient: {
            rest: null,
          },
        },
        thumb: {
          background: {
            rest: null,
            hover: null,
          },
          border: {
            rest: null,
            hover: null,
          },
        },
      },
      gray: {
        track: {
          background: {
            rest: null,
          },
          gradient: {
            rest: null,
          },
        },
        thumb: {
          background: {
            rest: null,
            hover: null,
          },
          border: {
            rest: null,
            hover: null,
          },
        },
      },
      blackBorder: {
        track: {
          background: {
            rest: null,
          },
          gradient: {
            rest: null,
          },
        },
        thumb: {
          background: {
            rest: null,
            hover: null,
          },
          border: {
            rest: null,
            hover: null,
          },
        },
      },
      grayBorder: {
        track: {
          background: {
            rest: null,
          },
          gradient: {
            rest: null,
          },
        },
        thumb: {
          background: {
            rest: null,
            hover: null,
          },
          border: {
            rest: null,
            hover: null,
          },
        },
      },
    },
    button: {
      'bustmarket-gray-violet': {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
      'bustmarket-gray': {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
      'bustmarket-violet': {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
      'bustmarket-white-violet': {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
      'realebail-white': {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
      'realebail-product': {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
      'realebail-gray': {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
      white: {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
      product: {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
      productBorder: {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
      gray: {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
      grayBorder: {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
      black: {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
      blackBorder: {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
      greenTransparent: {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
      yellowTransparent: {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
      redTransparent: {
        background: {
          rest: null,
          hover: null,
        },
        color: {
          rest: null,
          hover: null,
          placeholder: null,
        },
        border: {
          rest: null,
          hover: null,
        },
      },
    },
  },
});

export const ThemeGlobal = createGlobalTheme(':root', {
  transition: {
    duration: '0.3s',
    timingFunction: 'ease',
    default: '0.3s ease',
    icon: '0.05s ease',
  },
  scrollbar: {
    width: '4px',
    background: JeneseiPalette.black05,
    thumb: JeneseiPalette.black10,
    thumbBorder: JeneseiPalette.black05,
  },
  screen: {
    breakpoint: {
      default: { width: 'null', media: 'null' },
      tablet: { width: '1290px', media: `screen and (max-width: 1290px)` },
      mobile: { width: '850px', media: `screen and (max-width: 850px)` },
    },
    orientation: {
      vertical: { width: 'null', media: '@media (orientation: portrait)' },
      horizontal: { width: 'null', media: '@media (orientation: landscape)' },
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
  palette: JeneseiPalette,
  background: JeneseiPalette,
  state: {
    focus: JeneseiPalette.black60,
    danger: JeneseiPalette.redGoogle,
  },
});

export const ThemeLight = createTheme(ThemeComponent, {
  colors: {
    range: ThemeGenreRange,
    button: ThemeGenre,
  },
});

export type IThemeGenreTypeRange = typeof ThemeComponent.colors.range;
export type IThemeGenreTypeButton = typeof ThemeComponent.colors.button;
export type IThemeScreen = typeof ThemeGlobal.screen;