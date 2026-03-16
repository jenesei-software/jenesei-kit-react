import { ISx, IThemePalette } from '@local/styles/utils';

import { PropsWithChildren, ReactNode } from 'react';

type IPreviewDefault = {
  defaultVisible?: boolean;
  content?: ReactNode;
  sxLoader?: ISx['sx'];
  sxChildren?: ISx['sx'];
  colorIcon?: IThemePalette;
};

interface IPreviewIsShow extends IPreviewDefault {
  visible: boolean;
  minTime?: number;
}

interface IPreviewTime extends IPreviewDefault {
  time: number;
}

export type IPreviewAdditional = IPreviewIsShow | IPreviewTime;

export type IPreview = PropsWithChildren & IPreviewAdditional;
