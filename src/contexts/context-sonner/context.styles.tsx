import { CSS_CLASS, CSS_VARS } from '@local/styles/utils';
import { setClasses } from '@local/styles/utils/functions';
import { IThemeGenreSonner } from '@local/styles/utils/types';

import { CSSProperties } from 'react';

import { ISonnerProvider } from './context.types';

export const SonnerClass = CSS_CLASS.context.sonner;

export const SonnerLayout = SonnerClass.layout;
export const SonnerElementWrapper = SonnerClass.elementWrapper;
export const SonnerContent = SonnerClass.content;
export const SonnerIcon = SonnerClass.icon;
export const SonnerContentTitle = SonnerClass.contentTitle;
export const SonnerContentDescription = SonnerClass.contentDescription;
export const SonnerButtonWrapper = SonnerClass.buttonWrapper;

const SONNER_LAYOUT_POSITION_CLASS: Record<ISonnerProvider['position'], string> = {
  'bottom-center': SonnerClass.layoutBottomCenter,
  'bottom-left': SonnerClass.layoutBottomLeft,
  'bottom-right': SonnerClass.layoutBottomRight,
  'top-right': SonnerClass.layoutTopRight,
  'top-left': SonnerClass.layoutTopLeft,
  'top-center': SonnerClass.layoutTopCenter,
};

type ISonnerStyleWithVars = CSSProperties & Record<string, string>;

export const getSonnerLayoutClassName = (position: ISonnerProvider['position']) =>
  setClasses([SonnerLayout, SONNER_LAYOUT_POSITION_CLASS[position]]);

export const getSonnerLayoutStyle = (props: Pick<ISonnerProvider, 'gap' | 'zIndex'>): ISonnerStyleWithVars => ({
  '--context-sonner-gap': `${props.gap}px`,
  '--context-sonner-z-index': `${props.zIndex ?? 0}`,
});

export const getSonnerElementWrapperStyle = (genre: IThemeGenreSonner): ISonnerStyleWithVars => {
  const genreTheme = CSS_VARS.genre.button[genre];

  return {
    '--context-sonner-wrapper-background': genreTheme.background.index,
    '--context-sonner-wrapper-border-color': genreTheme.border.index,
    '--context-sonner-wrapper-box-shadow':
      genre === 'primary' || genre === 'secondary'
        ? CSS_VARS.palette.shadowPrimaryLight
        : CSS_VARS.palette.shadowSecondaryLight,
    '--context-sonner-wrapper-box-shadow-hover':
      genre === 'primary' || genre === 'secondary'
        ? CSS_VARS.palette.shadowSecondaryLight
        : CSS_VARS.palette.shadowPrimaryLight,
    '--context-sonner-icon-color': genreTheme.color.index,
    '--context-sonner-title-color': genreTheme.color.index,
    '--context-sonner-description-color': genreTheme.color.index,
  };
};
