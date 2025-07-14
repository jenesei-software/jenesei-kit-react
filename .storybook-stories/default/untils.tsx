import { Stack } from '@local/components/stack';
import { addSXProps } from '@local/index';

import { FC, PropsWithChildren } from 'react';

export const WrapperBig: FC<PropsWithChildren & addSXProps> = (props) => {
  return (
    <Stack
      sx={(theme) => ({
        ...(typeof props.sx === 'object' ? props.sx : props.sx?.(theme)),
        default: {
          borderRadius: '8px',
          padding: '16px',
          border: '1px dashed',
          height: 'fit-content',
          color: theme.palette.whiteStandard,
          borderColor: theme.palette.blueHover,
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '6px',
          overflow: 'hidden',
          ...(typeof props.sx === 'object' ? props.sx.default : props.sx?.(theme).default),
        },
      })}
    >
      {props.children}
    </Stack>
  );
};
export const WrapperMin: FC<PropsWithChildren & addSXProps> = (props) => {
  return (
    <Stack
      sx={(theme) => ({
        ...(typeof props.sx === 'object' ? props.sx : props.sx?.(theme)),
        default: {
          borderRadius: '8px',
          padding: '8px',
          border: '1px dashed',
          height: 'fit-content',
          color: theme.palette.whiteStandard,
          borderColor: theme.palette.blueHover,
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '6px',
          ...(typeof props.sx === 'object' ? props.sx.default : props.sx?.(theme).default),
        },
      })}
    >
      {props.children}
    </Stack>
  );
};
