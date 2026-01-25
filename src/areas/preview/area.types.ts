import { addSXProps } from '@local/styles/add';

import { PropsWithChildren, ReactNode } from 'react';

type PreviewDefaultProps = { defaultVisible?: boolean; content?: ReactNode } & {
  sxLoader?: addSXProps['sx'];
  sxChildren?: addSXProps['sx'];
};

interface PreviewIsShowProps extends PreviewDefaultProps {
  visible: boolean;
  minTime?: number;
}

interface PreviewTimeProps extends PreviewDefaultProps {
  time: number;
}

export type PreviewAdditionalProps = PreviewIsShowProps | PreviewTimeProps;

export type PreviewProps = PropsWithChildren & PreviewAdditionalProps;
