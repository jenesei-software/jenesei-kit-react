import { Button } from '@local/components/button';

import { FC, useId } from 'react';

import { ButtonGroupWrapper } from './component.styles';
import { ButtonGroupProps } from './component.types';


export const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const groupId = useId();

  return (
    <ButtonGroupWrapper $sx={props.sx} $position={props.position} className={props.className} id={`jenesei-button-group-${groupId}`}>
      {props.value?.map((button, idx) => (
        <Button id={`jenesei-button-${groupId}-${idx}`} key={idx} {...button} />
      ))}
    </ButtonGroupWrapper>
  );
};
