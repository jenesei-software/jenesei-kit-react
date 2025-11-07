import { addOutlineProps } from '@local/styles/add';
import { IThemePaletteKeys } from '@local/theme';
import { AddDollarSign } from '@local/types';

import { PropsWithChildren, ReactNode } from 'react';

export type ProviderDialogProps = PropsWithChildren & {
  zIndex: number;
};

export type DialogContextProps<T extends object = any> = {
  add: (dialog: DialogContentProps<T>) => void;
  remove: (id: DialogContentProps<T>['id']) => void;
  update: (dialog: DialogContentProps<T>) => void;
  dialogHistory: DialogContentProps<T>[];
};

export type DialogContextItemProps = {
  add: () => void;
  remove: () => void;
  id: string | null;
};

export type DialogContentProps<T extends object = any> = {
  props?: useDialogProps<T>;
  id?: string;
  index?: number;
  onRemove?: () => void;
};

export type useDialogProps<T extends object = any> = {
  content?: DialogContentObjectPropsContent<T>;
  propsDialog?: DialogContentObjectPropsDialog;
  propsOutline?: addOutlineProps;
  propsCustom?: T;
  onRemove?: () => void;
};

type DialogContentObjectPropsDialog = {
  maxWidth?: string;
  maxHeight?: string;
  padding?: string;
  borderRadius?: string;
  background?: IThemePaletteKeys;
  isRemoveOnOutsideClick?: boolean;
};
export interface DialogContentObjectPropsContentProps<T extends object = any> {
  remove?: () => void;
  isAnimating?: boolean;
  propsCustom?: T;
}

type DialogContentObjectPropsContent<T extends object> = (
  props: DialogContentObjectPropsContentProps<T>
) => ReactNode;

export type DialogElementProps<T extends object> = DialogContentProps<T>;

export type DialogLayoutProps = AddDollarSign<Pick<ProviderDialogProps, 'zIndex'>>;

export type DialogElementWrapperProps<T extends object> = AddDollarSign<
  addOutlineProps & Pick<useDialogProps<T>, 'propsDialog'>
>;
