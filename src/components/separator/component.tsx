import { IThemePaletteKeys } from '@local/styles/theme/theme.interface';

import { FC } from 'react';

import { SeparatorWrapper } from './component.styles';
import { SeparatorProps } from './component.types';

export const Separator: FC<SeparatorProps> = (props) => {
  const color: IThemePaletteKeys = props.color || 'grayMonica';
  return (
    <SeparatorWrapper
      role='separator'
      aria-orientation={props.type}
      $radius={props.radius}
      $color={color}
      $sx={props.sx}
      $type={props.type}
      $thickness={props.thickness}
    />
  );
};
