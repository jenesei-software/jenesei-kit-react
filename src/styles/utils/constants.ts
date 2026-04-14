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
  fillLight: 'var(--fill-light)',
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
  fillDark: 'var(--fill-dark)',
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
      'controller-large': 'var(--font-size-heading-controller-large)',
      'controller-large-medium': 'var(--font-size-heading-controller-large-medium)',
      'controller-medium': 'var(--font-size-heading-controller-medium)',
      'controller-medium-small': 'var(--font-size-heading-controller-medium-small)',
      'controller-small': 'var(--font-size-heading-controller-small)',
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
  sizeValue: {
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
      font: 14,
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
    select: {
      padding: 'var(--component-select-padding)',
      height: 'var(--component-select-height)',
      borderRadius: 'var(--component-select-border-radius)',

      background: 'var(--component-select-background)',
      borderColor: 'var(--component-select-border-color)',
      borderColorSelect: 'var(--component-select-border-color-select)',
      color: 'var(--component-select-color)',

      backgroundChecked: 'var(--component-select-background-checked)',
      borderColorChecked: 'var(--component-select-border-color-checked)',

      backgroundInput: 'var(--component-select-background-input)',
      borderColorInput: 'var(--component-select-border-color-input)',
      colorInput: 'var(--component-select-color-input)',

      backgroundOption: 'var(--component-select-background-option)',
    },
    tooltip: {
      padding: 'var(--component-tooltip-padding)',
      height: 'var(--component-tooltip-height)',
    },
    popover: {
      padding: 'var(--component-popover-padding)',
      borderRadius: 'var(--component-popover-border-radius)',
      maxWidth: 'var(--component-popover-max-width)',
      maxHeight: 'var(--component-popover-max-height)',

      background: 'var(--component-popover-background)',
      borderColor: 'var(--component-popover-border-color)',
      color: 'var(--component-popover-color)',
      boxShadow: 'var(--component-popover-box-shadow)',
    },
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
    datePicker: {
      rows: 'var(--component-date-picker-rows)',
      row: 'var(--component-date-picker-row)',
      column: 'var(--component-date-picker-column)',

      padding: 'var(--component-date-picker-padding)',

      dayRadius: 'var(--component-date-picker-day-radius)',

      dayBackgroundRest: 'var(--component-date-picker-day-background-rest)',
      dayBackgroundHover: 'var(--component-date-picker-day-background-hover)',
      dayBackgroundWeekend: 'var(--component-date-picker-day-background-weekend)',
      dayBackgroundToday: 'var(--component-date-picker-day-background-today)',
      dayBackgroundChoice: 'var(--component-date-picker-day-background-choice)',

      dayBorderRest: 'var(--component-date-picker-day-border-rest)',
      dayBorderWeekend: 'var(--component-date-picker-day-border-weekend)',
      dayBorderToday: 'var(--component-date-picker-day-border-today)',
      dayBorderChoice: 'var(--component-date-picker-day-border-choice)',
      dayBorderHover: 'var(--component-date-picker-day-border-hover)',

      dayColorRest: 'var(--component-date-picker-day-color-rest)',
      dayColorHover: 'var(--component-date-picker-day-color-hover)',
      dayColorWeekend: 'var(--component-date-picker-day-color-weekend)',
      dayColorToday: 'var(--component-date-picker-day-color-today)',
      dayColorChoice: 'var(--component-date-picker-day-color-choice)',

      inputBackground: 'var(--component-date-picker-input-background)',
      inputBackgroundHover: 'var(--component-date-picker-input-background-hover)',
      inputSegmentBackgroundActive: 'var(--component-date-picker-input-segment-background-active)',

      inputBorderColor: 'var(--component-date-picker-input-border-color)',
      inputBorderColorHover: 'var(--component-date-picker-input-border-color-hover)',

      inputColor: 'var(--component-date-picker-input-color)',
      inputColorHover: 'var(--component-date-picker-input-color-hover)',

      inputPadding: 'var(--component-date-picker-input-padding)',
      inputHeight: 'var(--component-date-picker-input-height)',
      inputRadius: 'var(--component-date-picker-input-radius)',

      inputValueColor: 'var(--component-date-picker-input-value-color)',
      inputPlaceholderColor: 'var(--component-date-picker-input-placeholder-color)',

      buttonToggleRight: 'var(--component-date-picker-button-toggle-right)',
      buttonClearRight: 'var(--component-date-picker-button-clear-right)',
    },
  },

  area: {
    skeleton: {
      color: 'var(--area-skeleton-color)',
      line: 'var(--area-skeleton-line)',
    },
  },

  genre: {
    popover: {
      primary: {
        background: CSS_VARS_PALETTE.fillDark,
        color: CSS_VARS_PALETTE.textPrimaryLight,
        border: CSS_VARS_PALETTE.transparent,
        boxShadow: CSS_VARS_PALETTE.shadowPrimaryDark,
      },
      secondary: {
        background: CSS_VARS_PALETTE.fillLight,
        color: CSS_VARS_PALETTE.textPrimaryDark,
        border: CSS_VARS_PALETTE.transparent,
        boxShadow: CSS_VARS_PALETTE.shadowPrimaryLight,
      },
    },
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
        backgroundOption: CSS_VARS_PALETTE.fillDark,
        border: CSS_VARS_PALETTE.textPrimaryLight,
        placeholder: CSS_VARS_PALETTE.textSecondaryLight,
      },
      secondary: {
        color: CSS_VARS_PALETTE.textPrimaryDark,
        background: CSS_VARS_PALETTE.fillPrimaryLight,
        backgroundOption: CSS_VARS_PALETTE.fillLight,
        border: CSS_VARS_PALETTE.textPrimaryDark,
        placeholder: CSS_VARS_PALETTE.textSecondaryDark,
      },
    },
    select: {
      primary: {
        color: {
          index: CSS_VARS_PALETTE.textPrimaryLight,
        },
        background: {
          index: CSS_VARS_PALETTE.fillPrimaryDark,
          select: CSS_VARS_PALETTE.productQuaternaryLight,
        },
        border: {
          index: CSS_VARS_PALETTE.textPrimaryLight,
          select: CSS_VARS_PALETTE.productPrimaryLight,
        },
        placeholder: {
          index: CSS_VARS_PALETTE.textSecondaryLight,
        },
      },
      secondary: {
        color: {
          index: CSS_VARS_PALETTE.textPrimaryDark,
        },
        background: {
          index: CSS_VARS_PALETTE.fillPrimaryLight,
          select: CSS_VARS_PALETTE.productQuaternaryLight,
        },
        border: {
          index: CSS_VARS_PALETTE.textPrimaryDark,
          select: CSS_VARS_PALETTE.productPrimaryLight,
        },
        placeholder: {
          index: CSS_VARS_PALETTE.textSecondaryDark,
        },
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
    datepicker: {
      primary: {
        color: {
          index: CSS_VARS_PALETTE.textPrimaryLight,
          hover: CSS_VARS_PALETTE.textPrimaryLight,
          weekend: CSS_VARS_PALETTE.textPrimaryLight,
          today: CSS_VARS_PALETTE.textPrimaryLight,
          choice: CSS_VARS_PALETTE.textPrimaryDark,
        },
        background: {
          index: CSS_VARS_PALETTE.transparent,
          hover: CSS_VARS_PALETTE.fillQuaternaryLight,
          weekend: CSS_VARS_PALETTE.fillQuaternaryLight,
          today: CSS_VARS_PALETTE.transparent,
          choice: CSS_VARS_PALETTE.productPrimaryLight,
        },
        border: {
          index: CSS_VARS_PALETTE.transparent,
          hover: CSS_VARS_PALETTE.transparent,
          weekend: CSS_VARS_PALETTE.transparent,
          today: CSS_VARS_PALETTE.textPrimaryLight,
          choice: CSS_VARS_PALETTE.productPrimaryLight,
        },
      },
      secondary: {
        color: {
          index: CSS_VARS_PALETTE.textPrimaryDark,
          hover: CSS_VARS_PALETTE.textPrimaryDark,
          weekend: CSS_VARS_PALETTE.textPrimaryDark,
          today: CSS_VARS_PALETTE.textPrimaryDark,
          choice: CSS_VARS_PALETTE.textPrimaryLight,
        },
        background: {
          index: CSS_VARS_PALETTE.transparent,
          hover: CSS_VARS_PALETTE.fillQuaternaryDark,
          weekend: CSS_VARS_PALETTE.fillQuaternaryDark,
          today: CSS_VARS_PALETTE.transparent,
          choice: CSS_VARS_PALETTE.productPrimaryDark,
        },
        border: {
          index: CSS_VARS_PALETTE.transparent,
          hover: CSS_VARS_PALETTE.transparent,
          weekend: CSS_VARS_PALETTE.transparent,
          today: CSS_VARS_PALETTE.textPrimaryDark,
          choice: CSS_VARS_PALETTE.productPrimaryDark,
        },
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
    boxShadowSelect: 'u-control--boxShadow-select',
    boxShadowOnlyHover: 'u-control--boxShadow-only-hover',
    onlyActive: 'u-control--only-active',
    none: 'u-control--none',
  },

  scrollbarGutter: {
    stable: 'u-scrollbar-gutter--stable',
    stableBoth: 'u-scrollbar-gutter--stable-both',
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

  context: {
    app: {
      wrapper: 'context-app__wrapper',
      outlet: 'context-app__outlet',
      outletChildren: 'context-app__outlet-children',
      outletNotification: 'context-app__outlet-notification',
      outletHeader: 'context-app__outlet-header',
      outletFooter: 'context-app__outlet-footer',
      outletNav: 'context-app__outlet-nav',
      outletLeftAside: 'context-app__outlet-left-aside',
      outletRightAside: 'context-app__outlet-right-aside',
    },
    dialog: {
      layout: 'context-dialog__layout',
      element: 'context-dialog__element',
    },
    sonner: {
      layout: 'context-sonner__layout',
      layoutBottomCenter: 'context-sonner__layout--bottom-center',
      layoutBottomLeft: 'context-sonner__layout--bottom-left',
      layoutBottomRight: 'context-sonner__layout--bottom-right',
      layoutTopRight: 'context-sonner__layout--top-right',
      layoutTopLeft: 'context-sonner__layout--top-left',
      layoutTopCenter: 'context-sonner__layout--top-center',
      elementWrapper: 'context-sonner__element-wrapper',
      content: 'context-sonner__content',
      icon: 'context-sonner__icon',
      contentTitle: 'context-sonner__content-title',
      contentDescription: 'context-sonner__content-description',
      buttonWrapper: 'context-sonner__button-wrapper',
    },
  },

  component: {
    select: {
      wrapper: 'component-select__wrapper',
      isCenter: 'component-select--is-center',
      isShowScroll: 'component-select--is-show-scroll',
      isWrapSelectOption: 'component-select--is-wrap-select-option',
      isClearWhenClickSelectListOption: 'component-select--is-clear-when-click-select-list-option',
      isOnlyColorInSelectListOption: 'component-select--is-only-color-in-select-list-option',
      dropdownList: 'component-select__dropdown__list',
      dropdownListWrapper: 'component-select__dropdown__list__wrapper',
      dropdownListOption: 'component-select__dropdown__list__option',
      dropdownListOptionIsChecked: 'component-select__dropdown__list__option--is-checked',
      dropdownListOptionIsBorder: 'component-select__dropdown__list__option--is-border',
      dropdownListOptionIsDisabled: 'component-select__dropdown__list__option--is-disabled',
      dropdownListOptionIcon: 'component-select__dropdown__list__option__icon',
      list: 'component-select__list',
      listButton: 'component-select__list__button',
      listOption: 'component-select__list__option',
      listOptionIsChecked: 'component-select__list__option--is-checked',
      textarea: 'component-select__textarea',
    },
    tooltip: {
      root: 'component-tooltip',
      wrapper: 'component-tooltip__wrapper',
    },
    popover: {
      root: 'component-popover',
      boxShadow: 'component-popover--box-shadow',
    },
    textarea: {
      root: 'component-textarea',
      wrapper: 'component-textarea__wrapper',
      wrapperIsZeroRadius: 'component-textarea__wrapper--is-zero-radius',
      wrapperIsHidden: 'component-textarea__wrapper--is-hidden',
      wrapperIsHiddenBorder: 'component-textarea__wrapper--is-hidden-border',
      wrapperIsFullRadius: 'component-textarea__wrapper--is-full-radius',
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
      isZeroPadding: 'component-button--is-zero-padding',
      isSizeFitContent: 'component-button--is-size-fit-content',
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
    datePicker: {
      wrapper: 'component-date-picker__wrapper',
      wrapperIsMinWidth: 'component-date-picker__wrapper--is-min-width',
      dropdownList: 'component-date-picker__dropdown__list',
      dropdownListDays: 'component-date-picker__dropdown-list__days',
      day: 'component-date-picker__dropdown-list__day',
      dayIsChoice: 'component-date-picker__dropdown-list__day--is-choice',
      dayIsNotCurrentMonth: 'component-date-picker__dropdown-list__day--is-not-current-month',
      dayIsToday: 'component-date-picker__dropdown-list__day--is-today',
      dayIsWeekend: 'component-date-picker__dropdown-list__day--is-weekend',
      dayIsHidden: 'component-date-picker__dropdown-list__day--is-hidden',
      dayOfWeek: 'component-date-picker__dropdown-list__day-of-week',
      inputWrapper: 'component-date-picker__input-wrapper',
      inputSegment: 'component-date-picker__input-segment',
      inputSegmentHasValue: 'component-date-picker__input-segment--has-value',
      inputSegmentIsActive: 'component-date-picker__input-segment--is-active',
      listButton: 'component-date-picker__list__button',
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
