import { CSS_CLASS, CSS_VARS } from '@local/styles/utils';

import { CSSProperties } from 'react';

import {
  DEFAULT_PROVIDER_DIALOG_ELEMENT_BACKGROUND,
  DEFAULT_PROVIDER_DIALOG_ELEMENT_BORDER_RADIUS,
  DEFAULT_PROVIDER_DIALOG_ELEMENT_MAX_HEIGHT,
  DEFAULT_PROVIDER_DIALOG_ELEMENT_MAX_WIDTH,
  DEFAULT_PROVIDER_DIALOG_ELEMENT_PADDING,
} from './context.constants';
import { IDialogElementStyle, IDialogLayoutStyle } from './context.types';

export const DialogClass = CSS_CLASS.context.dialog;

export const getDialogLayoutClassName = () => DialogClass.layout;

export const getDialogLayoutStyle = (props: IDialogLayoutStyle): CSSProperties => ({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: props.zIndex,
});

export const getDialogElementStyle = (props: IDialogElementStyle): CSSProperties => ({
  maxWidth: props.propsDialog?.maxWidth || DEFAULT_PROVIDER_DIALOG_ELEMENT_MAX_WIDTH,
  maxHeight: props.propsDialog?.maxHeight || DEFAULT_PROVIDER_DIALOG_ELEMENT_MAX_HEIGHT,
  borderRadius: props.propsDialog?.borderRadius || DEFAULT_PROVIDER_DIALOG_ELEMENT_BORDER_RADIUS,
  background: props.propsDialog?.background
    ? CSS_VARS.palette[props.propsDialog.background]
    : CSS_VARS.palette[DEFAULT_PROVIDER_DIALOG_ELEMENT_BACKGROUND],
  padding: props.propsDialog?.padding || DEFAULT_PROVIDER_DIALOG_ELEMENT_PADDING,
});
