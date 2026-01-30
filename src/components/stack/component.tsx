import { useResponsiveSX } from '@local/hooks/use-responsive-sx';
import { addHover, addRipple, addSx } from '@local/styles/add/add.vanilla-extract.css';

import { motion } from 'framer-motion';
import { CSSProperties, ElementType, FC, ReactNode, Ref } from 'react';

import { StackMotionProps, StackProps } from './component.types';

export const Stack: FC<StackProps> = (props) => {
  const screenSX = useResponsiveSX(props.sx);

  return (
    <Container
      as={props.as}
      ref={props.ref}
      //@ts-ignore
      onClick={props.onClick}
      onDrop={props.onDrop}
      onDragOver={props.onDragOver}
      className={[
        addSx,
        addRipple({ isRipple: props.isRipple }),
        addHover({ isHover: props.isHover }),
        props.className,
      ].join(' ')}
      style={{
        ...(screenSX?.css),
        ...props.style,
      }}
    >
      {props.children}
    </Container>
  );
};

export const StackMotion: FC<StackMotionProps> = (props) => {
  const { style, className, isHover, isRipple, onClick, onDrop, onDragOver, ref, sx } = props;

  const screenSX = useResponsiveSX(sx);

  return (
    <motion.div
      as={props.as}
      ref={ref}
      onClick={onClick}
      onDrop={onDrop}
      onDragOver={onDragOver}
      className={[addSx, addRipple({ isRipple: isRipple }), addHover({ isHover: isHover }), className].join(' ')}
      style={{
        ...(screenSX?.css),
        ...style,
      }}
      {...props}
    >
      {props.children}
    </motion.div>
  );
};

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  ref?: Ref<any>;
};

function Container({ as: Component = 'div', children, className, style, ref }: Props) {
  return (
    <Component className={className} style={style} ref={ref}>
      {children}
    </Component>
  );
}
