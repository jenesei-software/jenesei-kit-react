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

    transition: {
      default: 'var(--transition-default)',
      icon: 'var(--transition-icon)',
      color: 'var(--transition-color)',
      grid: 'var(--transition-grid)',
      withoutSize: 'var(--transition-without-size)',
      all: 'var(--transition-all)',
    },
  },

  palette: {
    /* ACCENTS */
    accentRed: 'var(--accent-red)',
    accentRedVibrant: 'var(--accent-red-vibrant)',

    accentOrange: 'var(--accent-orange)',
    accentOrangeVibrant: 'var(--accent-orange-vibrant)',

    accentYellow: 'var(--accent-yellow)',
    accentYellowVibrant: 'var(--accent-yellow-vibrant)',

    accentGreen: 'var(--accent-green)',
    accentGreenVibrant: 'var(--accent-green-vibrant)',

    accentMint: 'var(--accent-mint)',
    accentMintVibrant: 'var(--accent-mint-vibrant)',

    accentTeal: 'var(--accent-teal)',
    accentTealVibrant: 'var(--accent-teal-vibrant)',

    accentCyan: 'var(--accent-cyan)',
    accentCyanVibrant: 'var(--accent-cyan-vibrant)',

    accentBlue: 'var(--accent-blue)',
    accentBlueVibrant: 'var(--accent-blue-vibrant)',

    accentIndigo: 'var(--accent-indigo)',
    accentIndigoVibrant: 'var(--accent-indigo-vibrant)',

    accentPurple: 'var(--accent-purple)',
    accentPurpleVibrant: 'var(--accent-purple-vibrant)',

    accentPink: 'var(--accent-pink)',
    accentPinkVibrant: 'var(--accent-pink-vibrant)',

    accentBrown: 'var(--accent-brown)',
    accentBrownVibrant: 'var(--accent-brown-vibrant)',

    accentGray: 'var(--accent-gray)',
    accentGrayVibrant: 'var(--accent-gray-vibrant)',

    /* FILLS */
    fillPrimary: 'var(--fill-primary)',
    fillSecondary: 'var(--fill-secondary)',
    fillTertiary: 'var(--fill-tertiary)',
    fillQuaternary: 'var(--fill-quaternary)',
    fillQuinary: 'var(--fill-quinary)',

    fillPrimaryVibrant: 'var(--fill-primary-vibrant)',
    fillSecondaryVibrant: 'var(--fill-secondary-vibrant)',
    fillTertiaryVibrant: 'var(--fill-tertiary-vibrant)',
    fillQuaternaryVibrant: 'var(--fill-quaternary-vibrant)',
    fillQuinaryVibrant: 'var(--fill-quinary-vibrant)',

    /* TEXT */
    textPrimary: 'var(--text-primary)',
    textSecondary: 'var(--text-secondary)',
    textTertiary: 'var(--text-tertiary)',

    textPrimaryVibrant: 'var(--text-primary-vibrant)',
    textSecondaryVibrant: 'var(--text-secondary-vibrant)',
    textTertiaryVibrant: 'var(--text-tertiary-vibrant)',

    /* CONTROLS */
    controlMenu: 'var(--control-menu)',
    controlTooltip: 'var(--control-tooltip)',
    controlTransparent: 'var(--control-transparent)',

    /* PRODUCT */
    productPrimary: 'var(--product-primary)',
    productSecondary: 'var(--product-secondary)',
    productTertiary: 'var(--product-tertiary)',
    productQuaternary: 'var(--product-quaternary)',
    productQuinary: 'var(--product-quinary)',
    productPrimaryVibrant: 'var(--product-primary-vibrant)',

    /* SHADOWS */
    shadowGlass: 'var(--shadow-glass)',
    shadowPrimary: 'var(--shadow-primary)',
    shadowSecondary: 'var(--shadow-secondary)',
    shadowQuaternary: 'var(--shadow-quaternary)',

    /* SPECIAL */
    current: 'var(--current-color)',
    inherit: 'var(--inherit)',
    transparent: 'var(--transparent)',
  },

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

  /**
   * Добавляет transition для font-size.
   */
  transitionFontSize: 'u-transition-font-size',

  /**
   * Базовый outline (прозрачный.
   * Используется для focus-состояний.
   */
  outlineDefault: 'u-outline-default',

  /**
   * Outline под box-shadow компоненты.
   */
  outlineBoxShadow: 'u-outline-boxShadow',

  /**
   * Постоянный outline (видимый.
   */
  outlineAlways: 'u-outline-always',

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
