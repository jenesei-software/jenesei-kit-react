import { Button } from '@local/components/button/export';

import { FC, useId } from 'react';

import { ButtonGroupProps, ButtonGroupWrapper } from '.';

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
