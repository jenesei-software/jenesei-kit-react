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
  productPrimaryLight: 'var(--product-primary-light)',
  productSecondaryLight: 'var(--product-secondary-light)',
  productTertiaryLight: 'var(--product-tertiary-light)',
  productQuaternaryLight: 'var(--product-quaternary-light)',
  productQuinaryLight: 'var(--product-quinary-light)',

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

  /* PRODUCT */
  productPrimaryDark: 'var(--product-primary-dark)',
  productSecondaryDark: 'var(--product-secondary-dark)',
  productTertiaryDark: 'var(--product-tertiary-dark)',
  productQuaternaryDark: 'var(--product-quaternary-dark)',
  productQuinaryDark: 'var(--product-quinary-dark)',

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
    size: 'var(--font-size)',
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

  sizeToggle: {
    large: {
      height: 'var(--size-toggle-large-height)',
      width: 'var(--size-toggle-large-width)',
      padding: 'var(--size-toggle-large-padding)',
      thumb: 'var(--size-toggle-large-thumb)',
    },
    largeMedium: {
      height: 'var(--size-toggle-large-medium-height)',
      width: 'var(--size-toggle-large-medium-width)',
      padding: 'var(--size-toggle-large-medium-padding)',
      thumb: 'var(--size-toggle-large-medium-thumb)',
    },
    medium: {
      height: 'var(--size-toggle-medium-height)',
      width: 'var(--size-toggle-medium-width)',
      padding: 'var(--size-toggle-medium-padding)',
      thumb: 'var(--size-toggle-medium-thumb)',
    },
    mediumSmall: {
      height: 'var(--size-toggle-medium-small-height)',
      width: 'var(--size-toggle-medium-small-width)',
      padding: 'var(--size-toggle-medium-small-padding)',
      thumb: 'var(--size-toggle-medium-small-thumb)',
    },
    small: {
      height: 'var(--size-toggle-small-height)',
      width: 'var(--size-toggle-small-width)',
      padding: 'var(--size-toggle-small-padding)',
      thumb: 'var(--size-toggle-small-thumb)',
    },
  },

  component: {
    error: {
      padding: 'var(--component-error-padding)',
      color: 'var(--component-error-color)',
    },
    checkbox: {
      height: 'var(--component-checkbox-height)',
      padding: 'var(--component-checkbox-padding)',
      radius: 'var(--component-checkbox-radius)',
      gap: 'var(--component-checkbox-gap)',

      background: 'var(--component-checkbox-background)',
      border: 'var(--component-checkbox-border)',
      color: 'var(--component-checkbox-color)',
    },
    toggle: {
      height: 'var(--component-toggle-height)',
      width: 'var(--component-toggle-width)',
      padding: 'var(--component-toggle-padding)',
      backgroundActive: 'var(--component-toggle-active-background)',
      borderActive: 'var(--component-toggle-active-border)',
      backgroundUnActive: 'var(--component-toggle-un-active-background)',
      borderUnActive: 'var(--component-toggle-un-active-border)',
      centerHeight: 'var(--component-toggle-center-height)',
      centerWidth: 'var(--component-toggle-center-width)',
      centerBackgroundActive: 'var(--component-toggle-center-active-background)',
      centerBorderActive: 'var(--component-toggle-center-active-border)',
      centerBackgroundUnActive: 'var(--component-toggle-center-un-active-background)',
      centerBorderUnActive: 'var(--component-toggle-center-un-active-border)',
      centerBoxShadowActive: 'var(--component-toggle-center-active-box-shadow)',
      centerBoxShadowUnActive: 'var(--component-toggle-center-un-active-box-shadow)',
      centerX: 'var(--component-toggle-center-x)',
    },
    button: {
      height: 'var(--component-button-height)',
      padding: 'var(--component-button-padding)',
      radius: 'var(--component-button-radius)',
      gap: 'var(--component-button-gap)',
      background: 'var(--component-button-background)',
      border: 'var(--component-button-border)',
      color: 'var(--component-button-color)',
      iconGroupOrder: 'var(--component-button-icon-group-order)',
    },
    icon: {
      order: 'var(--component-icon-order)',
      color: 'var(--component-icon-color)',
      heightIcon: 'var(--component-icon-height-icon)',
      turn: 'var(--component-icon-turn)',
      skeletonHeightIcon: 'var(--component-icon-skeleton-height-icon)',
      skeletonOrder: 'var(--component-icon-skeleton-order)',
    },
    typography: {
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
    separator: {
      width: 'var(--component-separator-width)',
      height: 'var(--component-separator-height)',
      maxWidth: 'var(--component-separator-max-width)',
      maxHeight: 'var(--component-separator-max-height)',
      background: 'var(--component-separator-background)',
      radius: 'var(--component-separator-radius)',
    },
    input: {
      boxShadow: 'var(--component-input-box-shadow)',
      background: 'var(--component-input-background)',
      borderColor: 'var(--component-input-border-color)',
      color: 'var(--component-input-color)',
      placeholderColor: 'var(--component-input-placeholder-color)',

      height: 'var(--component-input-height)',
      padding: 'var(--component-input-padding)',
      radius: 'var(--component-input-radius)',

      prefixWidth: 'var(--component-input-prefix-width)',
      prefixRight: 'var(--component-input-prefix-right)',
      prefixLeft: 'var(--component-input-prefix-left)',

      postfixWidth: 'var(--component-input-postfix-width)',
      postfixRight: 'var(--component-input-postfix-right)',
      postfixLeft: 'var(--component-input-postfix-left)',
    },

    textarea: {
      boxShadow: 'var(--component-textarea-box-shadow)',
      background: 'var(--component-textarea-background)',
      borderColor: 'var(--component-textarea-border-color)',
      color: 'var(--component-textarea-color)',
      placeholderColor: 'var(--component-textarea-placeholder-color)',
      padding: 'var(--component-textarea-padding)',
      radius: 'var(--component-textarea-radius)',
    },
  },

  area: {
    skeleton: {
      color: 'var(--area-skeleton-color)',
      line: 'var(--area-skeleton-line)',
    },
  },

  genre: {
    checkbox: {
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
          index: CSS_VARS_PALETTE.productPrimaryLight,
        },
        color: {
          index: CSS_VARS_PALETTE.textPrimaryDark,
        },
        border: {
          index: CSS_VARS_PALETTE.transparent,
        },
      },
    },
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
          index: CSS_VARS_PALETTE.productPrimaryLight,
        },
        color: {
          index: CSS_VARS_PALETTE.textPrimaryDark,
        },
        border: {
          index: CSS_VARS_PALETTE.transparent,
        },
      },
    },
    toggle: {
      primary: {
        active: {
          border: CSS_VARS_PALETTE.transparent,
          track: CSS_VARS_PALETTE.productPrimaryLight,
          thumb: CSS_VARS_PALETTE.fillPrimaryDark,
          thumbBoxShadow: CSS_VARS_PALETTE.shadowPrimaryLight,
        },
        unActive: {
          border: CSS_VARS_PALETTE.transparent,
          track: CSS_VARS_PALETTE.fillPrimaryLight,
          thumb: CSS_VARS_PALETTE.fillPrimaryDark,
          thumbBoxShadow: CSS_VARS_PALETTE.shadowPrimaryLight,
        },
      },
    },
    input: {
      primary: {
        color: CSS_VARS_PALETTE.textPrimaryLight,
        background: CSS_VARS_PALETTE.fillPrimaryDark,
        border: CSS_VARS_PALETTE.textPrimaryLight,
        placeholder: CSS_VARS_PALETTE.textSecondaryLight,
      },
      secondary: {
        color: CSS_VARS_PALETTE.textPrimaryDark,
        background: CSS_VARS_PALETTE.fillPrimaryLight,
        border: CSS_VARS_PALETTE.textPrimaryDark,
        placeholder: CSS_VARS_PALETTE.textSecondaryDark,
      },
    },
    textarea: {
      primary: {
        color: CSS_VARS_PALETTE.textPrimaryLight,
        background: CSS_VARS_PALETTE.fillPrimaryDark,
        border: CSS_VARS_PALETTE.textPrimaryLight,
        placeholder: CSS_VARS_PALETTE.textSecondaryLight,
      },
      secondary: {
        color: CSS_VARS_PALETTE.textPrimaryDark,
        background: CSS_VARS_PALETTE.fillPrimaryLight,
        border: CSS_VARS_PALETTE.textPrimaryDark,
        placeholder: CSS_VARS_PALETTE.textSecondaryDark,
      },
    },
  },
} as const;

export const CSS_CLASS = {
  /**
   * Убирает скроллбар (Firefox + Webkit + IE)
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
    default: 'u-transition--default',
    fontSize: 'u-transition--font-size',
    icon: 'u-transition--icon',
    color: 'u-transition--color',
    grid: 'u-transition--grid',
    withoutSize: 'u-transition--without-size',
    all: 'u-transition--all',
  },

  control: {
    default: 'u-control--default',
    boxShadow: 'u-control--boxShadow',
    onlyActive: 'u-control--only-active',
    none: 'u-control--none',
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

  isError: 'u-is-error',

  shadow: {
    primary: 'u-shadow--primary',
    secondary: 'u-shadow--secondary',
    quaternary: 'u-shadow--quaternary',
  },

  keyframe: {
    shadowPulse: 'keyframe--shadow-pulse',
    backgroundMove: 'keyframe--background-move',
  },

  area: {
    preview: {
      root: 'area-preview__loader',
      containerIcon: 'area-preview__loader__container-icon',
      containerChildren: 'area-preview__loader__container-children',
      children: 'area-preview__children',
    },
    scroll: {
      root: 'area-scroll',
      horizontal: 'area-scroll--horizontal',
      vertical: 'area-scroll--vertical',
      isAlwaysHorizontal: 'area-scroll--is-always-horizontal',
      isAlwaysVertical: 'area-scroll--is-always-vertical',
    },
    skeleton: {
      root: 'area-skeleton',
      visibleFalse: 'area-skeleton--visible-false',
    },
  },

  component: {
    textarea: {
      root: 'component-textarea',
      wrapper: 'component-textarea__wrapper',
      wrapperIsZeroRadius: 'component-textarea__wrapper--is-zero-radius',
      wrapperIsHidden: 'component-textarea__wrapper--is-hidden',
      wrapperIsHiddenBorder: 'component-textarea__wrapper--is-hidden-border',
      wrapperIsFullRadius: 'component-textarea__wrapper--is-full-radius',
      wrapperIsCenter: 'component-textarea__wrapper--is-center',
      wrapperIsNotResize: 'component-textarea__wrapper--is-not-resize',
    },
    input: {
      wrapper: 'component-input__wrapper',
      wrapperIsWidthAsHeight: 'component-input__wrapper--is-width-as-height',
      wrapperIsZeroRadius: 'component-input__wrapper--is-zero-radius',
      wrapperIsHidden: 'component-input__wrapper--is-hidden',
      wrapperIsHiddenBorder: 'component-input__wrapper--is-hidden-border',
      wrapperIsFullRadius: 'component-input__wrapper--is-full-radius',
      wrapperIsMinWidthAsContent: 'component-input__wrapper--is-min-width-as-content',
      wrapperIsCenter: 'component-input__wrapper--is-center',

      root: 'component-input',
      hasPrefix: 'component-input--has-prefix',
      hasPostfix: 'component-input--has-postfix',
      prefix: 'component-input__prefix',
      postfix: 'component-input__postfix',
    },
    separator: {
      root: 'component-separator',
    },
    error: {
      root: 'component-error',
      sizeDefault: 'component-error--size-default',
      sizeAbsolute: 'component-error--size-absolute',
    },
    typography: {
      root: 'component-typography',
      lineSingle: 'component-typography--line-single',
      lineMulti: 'component-typography--line-multi',
      isBold: 'component-typography--is-bold',
      variantCallout: 'component-typography--variant-callout',
      shadowShadowPulse: 'component-typography--shadow-shadowPulse',
      isHoverUnderlining: 'component-typography--is-hover-underlining',
      isNoUserSelect: 'component-typography--is-no-user-select',
      size: 'component-typography--size',
      variant: 'component-typography--variant',
    },
    button: {
      root: 'component-button',
      isHidden: 'component-button--is-hidden',
      isHiddenBorder: 'component-button--is-hidden-border',
      isFullRadius: 'component-button--is-full-radius',
      isFullSize: 'component-button--is-full-size',
      isWidthAsHeight: 'component-button--is-width-as-height',
      isMinWidthAsContent: 'component-button--is-min-width-as-content',
      iconGroup: 'component-button__icons',
      iconGroupIsIconGroup: 'component-button__icons--is-icon-group',
      isZeroRadius: 'component-button--is-zero-radius',
    },
    icon: {
      root: 'component-icon',
      skeleton: 'component-icon__skeleton',
    },
    stack: {
      root: 'component-stack',
    },
    checkbox: {
      root: 'component-checkbox',
      isHidden: 'component-checkbox--is-hidden',
      isHiddenBorder: 'component-checkbox--is-hidden-border',
      isFullRadius: 'component-checkbox--is-full-radius',
      isFullSize: 'component-checkbox--is-full-size',
      isWidthAsHeight: 'component-checkbox--is-width-as-height',
      isMinWidthAsContent: 'component-checkbox--is-min-width-as-content',
      isZeroRadius: 'component-checkbox--is-zero-radius',
      isOnlyIcon: 'component-checkbox--is-only-icon',
    },
    toggle: {
      root: 'component-toggle',
      active: 'component-toggle--active',
      unActive: 'component-toggle--un-active',
      isHidden: 'component-toggle--is-hidden',
      isHiddenBorder: 'component-toggle--is-hidden-border',
      isZeroRadius: 'component-toggle--is-zero-radius',
      center: 'component-toggle__center',
      centerActive: 'component-toggle__center--active',
      centerUnActive: 'component-toggle__center--un-active',
    },
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

export const EXTRA_VALUE = {
  font: {
    height: 16,
    size: 1.2,
  },
};
