export interface IThemeGenreTypeDefault {
  background: {
    rest: string;
    hover: string;
  };

  border: {
    rest: string;
    hover: string;
  };

  color: {
    rest: string;
    hover: string;
    placeholder: string;
  };
}
export interface IThemeGenreTypeRange {
  thumb: {
    background: {
      rest: string;
      hover: string;
    };
    border: {
      rest: string;
      hover: string;
    };
  };

  track: {
    background: {
      rest: string;
    };
    gradient: {
      rest: string;
    };
  };
}
export interface IThemeGenreTypeSelect {
  background: {
    rest: string;
    hover: string;
    select: string;
  };

  border: {
    rest: string;
    hover: string;
    select: string;
  };

  color: {
    rest: string;
    hover: string;
    select: string;
    placeholder: string;
  };
}
export interface IThemeGenreTypeImageSelect {
  background: {
    rest: string;
    hover: string;
  };

  border: {
    rest: string;
    hover: string;
  };

  color: {
    rest: string;
    hover: string;
    placeholder: string;
  };
}
export interface IThemeGenreTypeToggle {
  active: {
    rest: {
      track: string;
      thumb: string;
      border: string;
      thumbBoxShadow: string;
    };
    hover: {
      track: string;
      thumb: string;
      border: string;
      thumbBoxShadow: string;
    };
  };

  unActive: {
    rest: {
      track: string;
      thumb: string;
      border: string;
      thumbBoxShadow: string;
    };
    hover: {
      track: string;
      thumb: string;
      border: string;
      thumbBoxShadow: string;
    };
  };
}
export interface IThemeGenreTypeDate {
  background: {
    rest: string;
    hover: string;
    today: string;
    weekend: string;
    choice: string;
    line: string;
  };

  border: {
    rest: string;
    hover: string;
    today: string;
    weekend: string;
    choice: string;
    line: string;
  };

  color: {
    rest: string;
    hover: string;
    placeholder: string;
    today: string;
    weekend: string;
    choice: string;
    line: string;
  };
}
export interface IThemeGenreTypeSonner {
  button: {
    genre: keyof IThemeGenre;
  };

  description: {
    color: string;
  };

  icon: {
    color: string;
  };

  title: {
    color: string;
  };

  wrapper: {
    background: string;
    borderColor: string;
    boxShadow: string;
    boxShadowHover: string;
  };
}

export type IThemeGenreName =
  | 'gray'
  | 'grayBorder'
  | 'black'
  | 'blackBorder'
  | 'product'
  | 'productBorder'
  | 'white'
  | 'greenTransparent'
  | 'redTransparent'
  | 'yellowTransparent'
  | 'realebail-product'
  | 'realebail-gray'
  | 'realebail-white'
  | 'bustmarket-gray-violet'
  | 'bustmarket-gray'
  | 'bustmarket-violet'
  | 'bustmarket-white-violet';

export type IThemeGenre = Record<
  Extract<
    IThemeGenreName,
    | 'gray'
    | 'grayBorder'
    | 'black'
    | 'blackBorder'
    | 'product'
    | 'productBorder'
    | 'white'
    | 'greenTransparent'
    | 'redTransparent'
    | 'yellowTransparent'
    | 'realebail-product'
    | 'realebail-gray'
    | 'realebail-white'
    | 'bustmarket-gray'
    | 'bustmarket-gray-violet'
    | 'bustmarket-violet'
    | 'bustmarket-white-violet'
  >,
  IThemeGenreTypeDefault
>;

export type IThemeGenreToggle = Record<Extract<IThemeGenreName, 'product'>, IThemeGenreTypeToggle>;
export type IThemeGenreSonner = Record<
  Extract<IThemeGenreName, 'black' | 'greenTransparent' | 'redTransparent' | 'yellowTransparent'>,
  IThemeGenreTypeSonner
>;
export type IThemeGenreInput = Record<
  Extract<IThemeGenreName, 'gray' | 'grayBorder' | 'blackBorder' | 'realebail-white'>,
  IThemeGenreTypeDefault
>;
export type IThemeGenreRange = Record<
  Extract<IThemeGenreName, 'gray' | 'grayBorder' | 'blackBorder' | 'realebail-white'>,
  IThemeGenreTypeRange
>;
export type IThemeGenreImageSelect = Record<
  Extract<IThemeGenreName, 'gray' | 'grayBorder' | 'blackBorder' | 'realebail-white'>,
  IThemeGenreTypeImageSelect
>;
export type IThemeGenreSelect = Record<
  Extract<IThemeGenreName, 'gray' | 'grayBorder' | 'blackBorder' | 'realebail-white'>,
  IThemeGenreTypeSelect
>;
export type IThemeGenreTextArea = Record<
  Extract<IThemeGenreName, 'gray' | 'grayBorder' | 'blackBorder' | 'realebail-white'>,
  IThemeGenreTypeDefault
>;
export type IThemeGenreDate = Record<
  Extract<IThemeGenreName, 'gray' | 'grayBorder' | 'blackBorder' | 'realebail-white'>,
  IThemeGenreTypeDate
>;

export interface IThemeSizePropertyDefault {
  font: number;

  height: number;

  heightIcon: number;

  padding: number;

  radius: number;
}

export interface IThemeSizePropertyToggle {
  height: number;

  padding: number;

  thumb: number;

  width: number;
}

export type IThemeScreen = Record<IThemeDevice, { width: number }>;
export type IThemeSize = 'large' | 'largeMedium' | 'medium' | 'mediumSmall' | 'small';
export type IThemeFontFamily = 'Inter' | 'Roboto' | 'Work Sans' | 'Roboto Mono' | 'Manrope';
export type IThemeTypographyHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'h9';
export type IThemeTypographyWeight = 100 | 300 | 400 | 500 | 700 | 900;
export type IThemeDevice = 'default' | 'tablet' | 'mobile';
export type IThemePaletteKeys =
  | 'transparent'
  | 'black100'
  | 'black80'
  | 'black60'
  | 'black50'
  | 'black40'
  | 'black10'
  | 'black05'
  | 'black04'
  | 'blackHelena'
  | 'blackJanice'
  | 'grayJanice'
  | 'grayKaren'
  | 'grayMonica'
  | 'graySandra'
  | 'grayPatricia'
  | 'graySarah'
  | 'grayStassie'
  | 'grayAdriana'
  | 'greenGoogle'
  | 'grayBarbara'
  | 'grayStephanie'
  | 'grayFrances'
  | 'grayTina'
  | 'green100'
  | 'green50'
  | 'green25'
  | 'green10'
  | 'green10Background'
  | 'whiteStandard'
  | 'whiteJanice'
  | 'yellowGoogle'
  | 'yellow100'
  | 'yellow50'
  | 'yellow25'
  | 'yellow10'
  | 'yellow10Background'
  | 'redGoogle'
  | 'red100'
  | 'red50'
  | 'red25'
  | 'red10'
  | 'red10Background'
  | 'blueGoogle'
  | 'blueRest'
  | 'blueActive'
  | 'blueHover'
  | 'blueFocus'
  | 'blueBr'
  | 'blueKaren'
  | 'blueMonica'
  | 'violetStephanie'
  | 'violetJanice'
  | 'amnezia'
  | 'inherit'
  | 'currentColor';
export interface ITheme {
  states: {
    focus: string;
    danger: string;
  };
  colors: {
    range: IThemeGenreRange;
    date: IThemeGenreDate;
    button: IThemeGenre;
    toggle: IThemeGenreToggle;
    checkbox: IThemeGenre;
    input: IThemeGenreInput;
    imageSelect: IThemeGenreImageSelect;
    select: IThemeGenreSelect;
    sonner: IThemeGenreSonner;
  };
  effects: {
    input: string;
    button: string;
  };
  font: {
    family: IThemeFontFamily;
    weight: IThemeTypographyWeight;
    sizeDefault: Record<IThemeDevice, number>;
    sizeHeading: Record<IThemeTypographyHeading, number>;
    lineHeight: number;
  };
  palette: Record<IThemePaletteKeys, string>;
  background: Record<IThemePaletteKeys, string>;
  screens: IThemeScreen;
  scrollbar: {
    width: number;
    background: string;
    thumb: string;
    thumbBorder: string;
  };
  transition: {
    duration: string;
    timingFunction: string;
    default: string;
    icon: string;
  };
  getContrastYIQ: (hexcolor: string) => string;
}
