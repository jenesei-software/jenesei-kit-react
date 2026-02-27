import { useSX } from '@local/hooks/use-responsive-layout';
import { CSS_CLASS } from '@local/styles/utils';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { motion } from 'framer-motion';
import { FC, useMemo } from 'react';

import styles from './component.styles.module.css';
import { IStack, IStackMotion } from './component.types';

export const Stack: FC<IStack> = (props) => {
  const sx = useSX(props?.sx ?? {});

  const { className, style, Component } = useMemo(() => {
    return {
      className: setClasses([
        styles.stack,
        props.isRipple && CSS_CLASS.isRipple,
        props.isHover && CSS_CLASS.isHover,
        props.className,
      ]),
      style: setStyles([sx, props.style]),
      Component: props.as ?? 'div',
    };
  }, [props.as, props.className, props.isHover, props.isRipple, props.style, sx]);

  return (
    <Component
      //@ts-expect-error
      ref={props.ref}
      onClick={props.onClick}
      //@ts-expect-error
      onDrop={props.onDrop}
      //@ts-expect-error
      onDragOver={props.onDragOver}
      className={className}
      style={style}
      id={props.id}
    >
      {props.children}
    </Component>
  );
};

export const StackMotion: FC<IStackMotion> = (props) => {
  const { isHover, isRipple, onClick, onDrop, onDragOver, ref, sx, className, style, ...rest } = props;
  const sxMemo = useSX(props?.sx ?? {});

  const {
    className: className2,
    style: style2,
    as,
  } = useMemo(() => {
    return {
      className: setClasses([styles.stack, isRipple && CSS_CLASS.isRipple, isHover && CSS_CLASS.isHover, className]),
      style: setStyles([sxMemo, style]),
      as: props.as ?? 'div',
    };
  }, [props.as, isHover, isRipple, className, style, sxMemo]);

  return (
    <motion.div
      as={as}
      ref={ref}
      onClick={onClick}
      onDrop={onDrop}
      onDragOver={onDragOver}
      className={className2}
      style={style2}
      {...rest}
    >
      {props.children}
    </motion.div>
  );
};
