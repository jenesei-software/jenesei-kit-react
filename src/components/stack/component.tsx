import { useLayout } from '@local/hooks/use-layout-sx';
import { recipeHover, recipeRipple, styleContainer } from '@local/styles/add';

import { motion } from 'framer-motion';
import { FC, useMemo } from 'react';

import { StackMotionProps, StackProps } from './component.types';

export const Stack: FC<StackProps> = (props) => {
  const styleLayout = useLayout(props?.sx ?? {});

  const { className, style, Component } = useMemo(() => {
    return {
      className: [
        styleContainer,
        recipeRipple({ isRipple: props.isRipple }),
        recipeHover({ isHover: props.isHover }),
        props.className,
      ].join(' '),
      style: Object.assign({}, styleLayout, props.style),
      Component: props.as ?? 'div',
    };
  }, [props.as, props.className, props.isHover, props.isRipple, props.style, styleLayout]);

  return (
    <Component
      //@ts-ignore
      ref={props.ref}
      //@ts-ignore
      onClick={props.onClick}
      //@ts-ignore
      onDrop={props.onDrop}
      //@ts-ignore
      onDragOver={props.onDragOver}
      className={className}
      style={style}
      id={props.id}
    >
      {props.children}
    </Component>
  );
};

export const StackMotion: FC<StackMotionProps> = (props) => {
  const { isHover, isRipple, onClick, onDrop, onDragOver, ref, sx } = props;

  const styleLayout = useLayout(sx ?? {});

  const { className, style, as } = useMemo(() => {
    return {
      className: [
        styleContainer,
        recipeRipple({ isRipple: isRipple }),
        recipeHover({ isHover: isHover }),
        props.className,
      ].join(' '),
      style: Object.assign({}, styleLayout, props.style),
      as: props.as ?? 'div',
    };
  }, [props.as, styleLayout, isHover, isRipple, props.style, props.className]);

  return (
    <motion.div
      as={as}
      ref={ref}
      onClick={onClick}
      onDrop={onDrop}
      onDragOver={onDragOver}
      className={className}
      style={style}
      {...props}
    >
      {props.children}
    </motion.div>
  );
};
