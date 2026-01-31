import { Stack } from '@local/components/stack';
import { useLayout } from '@local/hooks/use-layout-sx/use';
import { I_SX } from '@local/styles/add/add.types';

import { FC, PropsWithChildren } from 'react';

export const WrapperBig: FC<PropsWithChildren & I_SX> = (props) => {
  const styleLayout = useLayout(props?.sx ?? {});
  return (
    <Stack
      sx={(theme) => ({
        default: {
          position: 'relative',
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
        },
      })}
      style={styleLayout}
    >
      {props.children}
    </Stack>
  );
};
export const WrapperMin: FC<PropsWithChildren & I_SX> = (props) => {
  const styleLayout = useLayout(props?.sx ?? {});
  return (
    <Stack
      sx={(theme) => ({
        default: {
          position: 'relative',
          borderRadius: '8px',
          padding: '8px',
          border: '1px dashed',
          height: 'fit-content',
          color: theme.palette.whiteStandard,
          borderColor: theme.palette.blueHover,
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '6px',
        },
      })}
      style={styleLayout}
    >
      {props.children}
    </Stack>
  );
};
