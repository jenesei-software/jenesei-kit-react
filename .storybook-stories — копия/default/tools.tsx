import { Stack } from '@local/components/stack';
import { useResponsiveSX } from '@local/hooks/use-responsive-sx/use';
import { addSXPropsNew } from '@local/styles/add/add.types';
import { addSx } from '@local/styles/add/add.vanilla-extract.css';

import { FC, PropsWithChildren } from 'react';

export const WrapperBig: FC<PropsWithChildren & addSXPropsNew> = (props) => {
  const screenSX = useResponsiveSX(props.sx);
  return (
    <Stack
      className={[addSx(screenSX)].join(' ')}
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
    >
      {props.children}
    </Stack>
  );
};
export const WrapperMin: FC<PropsWithChildren & addSXPropsNew> = (props) => {
  const screenSX = useResponsiveSX(props.sx);
  return (
    <Stack
      className={[addSx(screenSX)].join(' ')}
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
    >
      {props.children}
    </Stack>
  );
};
