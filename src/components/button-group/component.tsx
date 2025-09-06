import { FC } from 'react';

import { Button } from '@local/components/button';

import { ButtonGroupProps, ButtonGroupWrapper } from '.';

export const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  return (
    <ButtonGroupWrapper $sx={props.sx} $position={props.position} className={props.className} id='jenesei-button-group'>
      {props.value?.map((button, id) => (
        <Button id='jenesei-button' key={id} {...button} />
      ))}
    </ButtonGroupWrapper>
  );
};
