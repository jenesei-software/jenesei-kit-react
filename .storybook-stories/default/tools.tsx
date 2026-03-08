import { Stack } from '@local/components/stack';
import { CSS_VARS, ISx } from '@local/styles/utils';

import { FC, PropsWithChildren } from 'react';

export const WrapperBig: FC<PropsWithChildren & ISx> = (props) => {
  return (
    <Stack
      sx={{
        position: 'relative',
        borderRadius: '8px',
        padding: '16px',
        border: '1px dashed',
        height: 'fit-content',
        color: CSS_VARS.palette.textPrimaryLight,
        borderColor: CSS_VARS.palette.accentBlueLight,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '6px',
        overflow: 'hidden',
      }}
      style={props?.sx}
    >
      {props.children}
    </Stack>
  );
};
export const WrapperMin: FC<PropsWithChildren & ISx> = (props) => {
  return (
    <Stack
      sx={{
        position: 'relative',
        borderRadius: '8px',
        padding: '8px',
        border: '1px dashed',
        height: 'fit-content',
        color: CSS_VARS.palette.textPrimaryLight,
        borderColor: CSS_VARS.palette.accentBlueLight,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '6px',
      }}
      style={props?.sx}
    >
      {props.children}
    </Stack>
  );
};
