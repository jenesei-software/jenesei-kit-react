import { addOutlineProps, addOutlinePropsDollar } from '@local/styles/add';
import { addSXProps } from '@local/styles/sx';
import {
  IThemeDevice,
  IThemeFontFamily,
  IThemePaletteKeys,
  IThemeTypographyHeading,
  IThemeTypographyWeight,
} from '@local/theme';
import { AddDollarSign } from '@local/types';

import { CSSProperties, PropsWithChildren, Ref } from 'react';

import { TooltipProps } from '../tooltip';

type TypographyDefaultProps = {
  align?: CSSProperties['textAlign'];

  color?: IThemePaletteKeys;

  cursor?: CSSProperties['cursor'];

  decoration?: CSSProperties['textDecoration'];

  family?: IThemeFontFamily;

  flex?: string;

  height?: number | string;

  isHoverUnderlining?: boolean;

  letterSpacing?: CSSProperties['letterSpacing'];

  line?: number;

  overflow?: CSSProperties['overflow'];

  shadow?: 'shadowPulse';

  transform?: CSSProperties['textTransform'];

  weight?: IThemeTypographyWeight;

  wrap?: CSSProperties['textWrap'];

  isNoUserSelect?: boolean;
};

export type TypographyDataProps = TypographyDefaultProps & {
  size?: number | string;
};

type TypographyVariantProps = TypographyDefaultProps & {
  variant: IThemeTypographyHeading;
};

export type TypographyAllProps = TypographyDataProps | TypographyVariantProps;

export type TypographySXProps = {
  default: TypographyAllProps;
} & {
  [K in IThemeDevice]?: TypographyAllProps;
};

export type TypographyProps = PropsWithChildren & {
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  href?: string;

  isParagraph?: boolean;
  isAnchor?: boolean;
  isSpan?: boolean;
  isTransitionFontSize?: boolean;

  ref?: Ref<HTMLElement | HTMLHeadingElement | HTMLAnchorElement | null>;

  sx: TypographySXProps;

  sxStandard?: addSXProps['sx'];
} & addOutlineProps;

export type addSXTypographyProps = {
  sxTypography?: TypographySXProps;
};

export type addSXTypographyPropsDollar = AddDollarSign<addSXTypographyProps>;

export type TypographyCSSProps = AddDollarSign<{
  sxTypography: TypographySXProps;
  sx?: addSXProps['sx'];
  isTransitionFontSize?: boolean;
}> &
  addOutlinePropsDollar;

export type TypographyTooltipProps = {
  typography: TypographyProps;
  tooltip: Omit<TooltipProps, 'children' | 'content'>;
} & PropsWithChildren;
