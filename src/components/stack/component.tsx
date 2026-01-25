import { FC } from 'react';

import { StyledStack, StyledStackMotion } from './component.styles';
import { StackMotionProps, StackProps } from './component.types';

export const Stack: FC<StackProps> = (props) => {
  return (
    <StyledStack
      as={props.as}
      ref={props.ref}
      onClick={props.onClick}
      onDrop={props.onDrop}
      onDragOver={props.onDragOver}
      className={props.className}
      $sx={props.sx}
      $isHover={props.isHover}
      $isRipple={props.isRipple}
    >
      {props.children}
    </StyledStack>
  );
};

export const StackMotion: FC<StackMotionProps> = (props) => {
  const { style, className, isHover, isRipple, onClick, onDrop, onDragOver, ref, sx } = props;
  return (
    <StyledStackMotion
      as={props.as}
      ref={ref}
      style={style}
      onClick={onClick}
      onDrop={onDrop}
      onDragOver={onDragOver}
      className={className}
      $sx={sx}
      $isHover={isHover}
      $isRipple={isRipple}
      {...props}
    >
      {props.children}
    </StyledStackMotion>
  );
};
