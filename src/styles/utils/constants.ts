const CSS_VARS_PALETTE = {
  /* ACCENTS */
  accentRedLight: 'var(--accent-red-light)',
  accentOrangeLight: 'var(--accent-orange-light)',
  accentYellowLight: 'var(--accent-yellow-light)',
  accentGreenLight: 'var(--accent-green-light)',
  accentMintLight: 'var(--accent-mint-light)',
  accentTealLight: 'var(--accent-teal-light)',
  accentCyanLight: 'var(--accent-cyan-light)',
  accentBlueLight: 'var(--accent-blue-light)',
  accentIndigoLight: 'var(--accent-indigo-light)',
  accentPurpleLight: 'var(--accent-purple-light)',
  accentPinkLight: 'var(--accent-pink-light)',
  accentBrownLight: 'var(--accent-brown-light)',
  accentGrayLight: 'var(--accent-gray-light)',

  /* FILLS */
  fillPrimaryLight: 'var(--fill-primary-light)',
  fillSecondaryLight: 'var(--fill-secondary-light)',
  fillTertiaryLight: 'var(--fill-tertiary-light)',
  fillQuaternaryLight: 'var(--fill-quaternary-light)',
  fillQuinaryLight: 'var(--fill-quinary-light)',

  /* TEXT */
  textPrimaryLight: 'var(--text-primary-light)',
  textSecondaryLight: 'var(--text-secondary-light)',
  textTertiaryLight: 'var(--text-tertiary-light)',

  /* CONTROLS */
  controlMenuLight: 'var(--control-menu-light)',
  controlTooltipLight: 'var(--control-tooltip-light)',
  controlTransparent: 'var(--control-transparent)',

  /* SHADOWS */
  shadowGlassLight: 'var(--shadow-glass-light)',
  shadowPrimaryLight: 'var(--shadow-primary-light)',
  shadowSecondaryLight: 'var(--shadow-secondary-light)',
  shadowQuaternaryLight: 'var(--shadow-quaternary-light)',

  /* PRODUCT */
  productPrimary: 'var(--product-primary)',
  productSecondary: 'var(--product-secondary)',
  productTertiary: 'var(--product-tertiary)',
  productQuaternary: 'var(--product-quaternary)',
  productQuinary: 'var(--product-quinary)',

  /* SPECIAL */
  current: 'var(--current-color)',
  inherit: 'var(--inherit)',
  transparent: 'var(--transparent)',

  /* ACCENTS */
  accentRedDark: 'var(--accent-red-dark)',
  accentOrangeDark: 'var(--accent-orange-dark)',
  accentYellowDark: 'var(--accent-yellow-dark)',
  accentGreenDark: 'var(--accent-green-dark)',
  accentMintDark: 'var(--accent-mint-dark)',
  accentTealDark: 'var(--accent-teal-dark)',
  accentCyanDark: 'var(--accent-cyan-dark)',
  accentBlueDark: 'var(--accent-blue-dark)',
  accentIndigoDark: 'var(--accent-indigo-dark)',
  accentPurpleDark: 'var(--accent-purple-dark)',
  accentPinkDark: 'var(--accent-pink-dark)',
  accentBrownDark: 'var(--accent-brown-dark)',
  accentGrayDark: 'var(--accent-gray-dark)',

  /* FILLS */
  fillPrimaryDark: 'var(--fill-primary-dark)',
  fillSecondaryDark: 'var(--fill-secondary-dark)',
  fillTertiaryDark: 'var(--fill-tertiary-dark)',
  fillQuaternaryDark: 'var(--fill-quaternary-dark)',
  fillQuinaryDark: 'var(--fill-quinary-dark)',

  /* TEXT */
  textPrimaryDark: 'var(--text-primary-dark)',
  textSecondaryDark: 'var(--text-secondary-dark)',
  textTertiaryDark: 'var(--text-tertiary-dark)',

  /* CONTROLS */
  controlMenuDark: 'var(--control-menu-dark)',
  controlTooltipDark: 'var(--control-tooltip-dark)',

  /* SHADOWS */
  shadowGlassDark: 'var(--shadow-glass-dark)',
  shadowPrimaryDark: 'var(--shadow-primary-dark)',
  shadowSecondaryDark: 'var(--shadow-secondary-dark)',
  shadowQuaternaryDark: 'var(--shadow-quaternary-dark)',
} as const;

export const CSS_VARS = {
  font: {
    family: 'var(--font-family)',
    weight: 'var(--font-weight)',
    height: 'var(--font-height)',
    sizeHeading: {
      headline: 'var(--font-size-heading-headline)',
      'sub-headline': 'var(--font-size-heading-sub-headline)',
      'title-1': 'var(--font-size-heading-title-1)',
      'title-2': 'var(--font-size-heading-title-2)',
      'title-3': 'var(--font-size-heading-title-3)',
      'title-4': 'var(--font-size-heading-title-4)',
      'title-5': 'var(--font-size-heading-title-5)',
      body: 'var(--font-size-heading-body)',
      callout: 'var(--font-size-heading-callout)',
      footnote: 'var(--font-size-heading-footnote)',
      'caption-1': 'var(--font-size-heading-caption-1)',
      'caption-2': 'var(--font-size-heading-caption-2)',
    },
  },

  screen: {
    breakpoint: {
      tablet: '1290px',
      mobile: '850px',
    },
    orientation: {
      landscape: 'landscape',
      portrait: 'portrait',
    },
  },

  animation: {
    duration: 'var(--duration)',
    easing: 'var(--easing)',
  },

  palette: CSS_VARS_PALETTE,

  size: {
    large: {
      height: 'var(--size-large-height)',
      heightIcon: 'var(--size-large-height-icon)',
      radius: 'var(--size-large-radius)',
      padding: 'var(--size-large-padding)',
      font: 'var(--size-large-font)',
    },
    largeMedium: {
      height: 'var(--size-large-medium-height)',
      heightIcon: 'var(--size-large-medium-height-icon)',
      radius: 'var(--size-large-medium-radius)',
      padding: 'var(--size-large-medium-padding)',
      font: 'var(--size-large-medium-font)',
    },
    medium: {
      height: 'var(--size-medium-height)',
      heightIcon: 'var(--size-medium-height-icon)',
      radius: 'var(--size-medium-radius)',
      padding: 'var(--size-medium-padding)',
      font: 'var(--size-medium-font)',
    },
    mediumSmall: {
      height: 'var(--size-medium-small-height)',
      heightIcon: 'var(--size-medium-small-height-icon)',
      radius: 'var(--size-medium-small-radius)',
      padding: 'var(--size-medium-small-padding)',
      font: 'var(--size-medium-small-font)',
    },
    small: {
      height: 'var(--size-small-height)',
      heightIcon: 'var(--size-small-height-icon)',
      radius: 'var(--size-small-radius)',
      padding: 'var(--size-small-padding)',
      font: 'var(--size-small-font)',
    },
  },

  component: {
    button: {
      index: {
        height: 'var(--component-button-height)',
        padding: 'var(--component-button-padding)',
        radius: 'var(--component-button-radius)',
        gap: 'var(--component-button-gap)',

        background: 'var(--component-button-background)',
        border: 'var(--component-button-border)',
        color: 'var(--component-button-color)',
      },
      iconGroup: {
        order: 'var(--component-button-icon-group-order)',
      },
    },
    icon: {
      index: {
        order: 'var(--component-icon-order)',
        color: 'var(--component-icon-color)',
        heightIcon: 'var(--component-icon-height-icon)',
        turn: 'var(--component-icon-turn)',
      },
      skeleton: {
        heightIcon: 'var(--component-icon-skeleton-height-icon)',
        order: 'var(--component-icon-skeleton-order)',
      },
    },
    typography: {
      index: {
        letterSpacing: 'var(--component-typography-letter-spacing)',
        flex: 'var(--component-typography-flex)',
        cursor: 'var(--component-typography-cursor)',
        overflow: 'var(--component-typography-overflow)',
        line: {
          single: 'var(--component-typography-line-single)',
          multiline: 'var(--component-typography-line-multiline)',
        },
        family: 'var(--component-typography-family)',
        weight: 'var(--component-typography-weight)',
        height: 'var(--component-typography-height)',
        color: 'var(--component-typography-color)',
        align: 'var(--component-typography-align)',
        wrap: 'var(--component-typography-wrap)',
        decoration: 'var(--component-typography-decoration)',
        transform: 'var(--component-typography-transform)',
        size: 'var(--component-typography-size)',
        variant: 'var(--component-typography-variant)',
        variantHeight: 'var(--component-typography-variant-height)',
      },
    },
  },

  area: {
    skeleton: {
      color: 'var(--area-skeleton-color)',
      line: 'var(--area-skeleton-line)',
    },
  },

  genre: {
    button: {
      green: {
        background: {
          index: CSS_VARS_PALETTE.accentGreenLight,
        },
        color: {
          index: CSS_VARS_PALETTE.textPrimaryDark,
        },
        border: {
          index: CSS_VARS_PALETTE.transparent,
        },
      },
      red: {
        background: {
          index: CSS_VARS_PALETTE.accentRedLight,
        },
        color: {
          index: CSS_VARS_PALETTE.textPrimaryDark,
        },
        border: {
          index: CSS_VARS_PALETTE.transparent,
        },
      },
      yellow: {
        background: {
          index: CSS_VARS_PALETTE.accentYellowLight,
        },
        color: {
          index: CSS_VARS_PALETTE.textPrimaryDark,
        },
        border: {
          index: CSS_VARS_PALETTE.transparent,
        },
      },
      blue: {
        background: {
          index: CSS_VARS_PALETTE.accentBlueLight,
        },
        color: {
          index: CSS_VARS_PALETTE.textPrimaryDark,
        },
        border: {
          index: CSS_VARS_PALETTE.transparent,
        },
      },
      primary: {
        background: {
          index: CSS_VARS_PALETTE.fillPrimaryDark,
        },
        color: {
          index: CSS_VARS_PALETTE.textPrimaryLight,
        },
        border: {
          index: CSS_VARS_PALETTE.textPrimaryLight,
        },
      },
      secondary: {
        background: {
          index: CSS_VARS_PALETTE.fillPrimaryLight,
        },
        color: {
          index: CSS_VARS_PALETTE.textPrimaryDark,
        },
        border: {
          index: CSS_VARS_PALETTE.textPrimaryDark,
        },
      },
      product: {
        background: {
          index: CSS_VARS_PALETTE.productPrimary,
        },
        color: {
          index: CSS_VARS_PALETTE.textPrimaryDark,
        },
        border: {
          index: CSS_VARS_PALETTE.transparent,
        },
      },
    },
  },
} as const;

export const CSS_CLASS = {
  /**
   * Убирает скроллбар (Firefox + Webkit + IE
   * Контент остаётся скроллируемым.
   */
  removeScrollbar: 'u-remove-scrollbar',

  /**
   * Полностью убирает outline.
   * Использовать аккуратно — может повлиять на accessibility.
   */
  removeOutline: 'u-remove-outline',

  /**
   * Включает табличные цифры (одинаковая ширина.
   * Полезно для счётчиков, цен, таймеров.
   */
  tabularNumbers: 'u-tabular-numbers',

  /**
   * Добавляет контейнер для ripple-эффекта.
   * Требует position: relative + overflow: hidden.
   */
  isRipple: 'u-is-ripple',

  transition: {
    default: 'u-transition-default',
    fontSize: 'u-transition-font-size',
    icon: 'u-transition-icon',
    color: 'u-transition-color',
    grid: 'u-transition-grid',
    withoutSize: 'u-transition-without-size',
    all: 'u-transition-all',
  },

  outline: {
    default: 'u-outline-default',
    boxShadow: 'u-outline-boxShadow',
    always: 'u-outline-always',
    none: 'u-outline-none',
  },

  control: {
    default: 'u-control-default',
    onlyActive: 'u-control-only-active',
    none: 'u-control-none',
  },

  /**
   * Состояние disabled.
   * Делает элемент полупрозрачным.
   */
  isDisabled: 'u-is-disabled',

  /**
   * Состояние hover.
   * Добавляет transition background + outline.
   */
  isHover: 'u-is-hover',

  shadow: {
    glass: 'u-shadow-glass',
    primary: 'u-shadow-primary',
    secondary: 'u-shadow-secondary',
    quaternary: 'u-shadow-quaternary',
  },

  keyframe: {
    shadowPulse: 'keyframe-shadow-pulse',
    backgroundMove: 'keyframe-background-move',
  },
} as const;

type DeepRemoveVar<T> = {
  [K in keyof T]: T[K] extends string ? string : T[K] extends object ? DeepRemoveVar<T[K]> : T[K];
};

function removeVarWrapper<T extends Record<string, any>>(obj: T): DeepRemoveVar<T> {
  const result: any = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === 'string') {
      result[key] = value.replace(/^var\((.*)\)$/, '$1');
    } else if (value && typeof value === 'object') {
      result[key] = removeVarWrapper(value);
    } else {
      result[key] = value;
    }
  }

  return result;
}

export const CSS_VARS_RAW = removeVarWrapper(CSS_VARS);
