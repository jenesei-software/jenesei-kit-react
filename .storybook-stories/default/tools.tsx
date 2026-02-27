import { Stack } from '@local/components/stack';
import { useSX } from '@local/hooks/use-responsive-layout/use';
import { ISx } from '@local/styles/utils';

import { FC, PropsWithChildren } from 'react';

export const WrapperBig: FC<PropsWithChildren & ISx> = (props) => {
  const styleLayout = useSX(props?.sx ?? {});
  return (
    <Stack
      sx={(theme) => ({
        position: 'relative',
        borderRadius: '8px',
        padding: '16px',
        border: '1px dashed',
        height: 'fit-content',
        color: theme.palette.fillPrimary,
        borderColor: theme.palette.accentBlue,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '6px',
        overflow: 'hidden',
      })}
      style={styleLayout}
    >
      {props.children}
    </Stack>
  );
};
export const WrapperMin: FC<PropsWithChildren & ISx> = (props) => {
  const styleLayout = useSX(props?.sx ?? {});
  return (
    <Stack
      sx={(theme) => ({
        position: 'relative',
        borderRadius: '8px',
        padding: '8px',
        border: '1px dashed',
        height: 'fit-content',
        color: theme.palette.fillPrimary,
        borderColor: theme.palette.accentBlue,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '6px',
      })}
      style={styleLayout}
    >
      {props.children}
    </Stack>
  );
};
