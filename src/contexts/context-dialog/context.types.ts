import { IThemePalette } from '@local/styles/utils';

import { PropsWithChildren, ReactNode } from 'react';

export type IDialogProvider = PropsWithChildren & {
  zIndex: number;
};

export type IDialogContext<T extends object = Record<string, unknown>> = {
  add: (dialog: IDialogContent<T>) => void;
  remove: (id: IDialogContent<T>['id']) => void;
  update: (dialog: IDialogContent<T>) => void;
  dialogHistory: IDialogContent<T>[];
};

export type IDialogItem = {
  add: () => void;
  remove: () => void;
  id: string | null;
};

export type IDialogContent<T extends object = Record<string, unknown>> = {
  props?: IUseDialog<T>;
  id?: string;
  index?: number;
  onRemove?: () => void;
};

export type IUseDialogDependencies = (keyof IDialogContext)[];
export type IUseDialog<T extends object = Record<string, unknown>> = {
  content?: IDialogContentNode<T>;
  propsDialog?: IDialogDialogProps;
  propsCustom?: T;
  onRemove?: () => void;
};

type IDialogDialogProps = {
  maxWidth?: string;
  maxHeight?: string;
  padding?: string;
  borderRadius?: string;
  background?: IThemePalette;
  isRemoveOnOutsideClick?: boolean;
};
interface IDialogContentNodeProps<T extends object = Record<string, unknown>> {
  remove?: () => void;
  isAnimating?: boolean;
  propsCustom?: T;
}

type IDialogContentNode<T extends object> = (props: IDialogContentNodeProps<T>) => ReactNode;

export type IDialogElement<T extends object> = IDialogContent<T>;

export type IDialogLayoutStyle = Pick<IDialogProvider, 'zIndex'>;

export type IDialogElementStyle<T extends object = Record<string, unknown>> = Pick<IUseDialog<T>, 'propsDialog'>;
