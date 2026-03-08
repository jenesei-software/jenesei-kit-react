import { getIconComponents } from '@local/components/icon';
import { useTypographyStyles } from '@local/hooks/use-typography-styles';
import { CSS_CLASS, CSS_VARS, CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { useMergeRefs } from '@floating-ui/react';
import { motion } from 'framer-motion';
import { FC, Ref, useMemo, useRef } from 'react';

import { IButton } from './component.types';

export const Button: FC<IButton> = (props) => {
  const iconComponents = useMemo(
    () => getIconComponents({ icons: props.icons ?? [], size: props.size }),
    [props.icons, props.size],
  );

  const handleClick: IButton['onClick'] = (event) => {
    if (!props.isDisabled && props.onClick) {
      props.onClick(event);
    }
  };
  const refDefault = useRef<HTMLButtonElement>(null);

  const ref = useMergeRefs([refDefault, props.ref]);

  const isInteractive = !props.isDisabled && props.isWhileTapEffect;

  const { className: classNameTypography, style: styleTypography } = useTypographyStyles({
    sx: { ...props?.sxTypography, size: CSS_VARS.size[props.size].font, weight: '700', height: '1' },
    style: { order: 0, display: 'contents' },
  });

  const { className, style } = useMemo(() => {
    const className = setClasses([
      props.className,
      CSS_CLASS.component.button.index.root,
      CSS_CLASS.outline[props.isDisabledOutline ? 'none' : (props.outline ?? 'default')],
      CSS_CLASS.control[
        props.isDisabled || props.isHidden ? 'none' : props.isNotHoverEffect ? 'onlyActive' : 'boxShadow'
      ],
      CSS_CLASS.transition.color,
      props.isHidden && CSS_CLASS.component.button.index.isHidden,
      props.isHiddenBorder && CSS_CLASS.component.button.index.isHiddenBorder,
      props.isRadius && CSS_CLASS.component.button.index.isRadius,
      props.isFullSize && CSS_CLASS.component.button.index.isFullSize,
      props.isWidthAsHeight && CSS_CLASS.component.button.index.isWidthAsHeight,
      props.isMinWidthAsContent && CSS_CLASS.component.button.index.isMinWidthAsContent,
    ]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.button.index.background] = CSS_VARS.genre.button[props.genre].background.index;
    vars[CSS_VARS_RAW.component.button.index.color] = CSS_VARS.genre.button[props.genre].color.index;
    vars[CSS_VARS_RAW.component.button.index.border] = CSS_VARS.genre.button[props.genre].border.index;

    vars[CSS_VARS_RAW.component.button.index.height] = CSS_VARS.size[props.size].height;
    vars[CSS_VARS_RAW.component.button.index.padding] = CSS_VARS.size[props.size].padding;
    vars[CSS_VARS_RAW.component.button.index.radius] = CSS_VARS.size[props.size].radius;
    vars[CSS_VARS_RAW.component.button.index.gap] = `calc(${CSS_VARS.size[props.size].padding} - 2px)`;

    const style = setStyles([props.sx, props.style, Object.keys(vars).length ? vars : undefined]);

    return { className, style };
  }, [
    props.className,
    props.style,
    props.sx,
    props.genre,
    props.isDisabled,
    props.isDisabledOutline,
    props.isFullSize,
    props.isHidden,
    props.isHiddenBorder,
    props.isMinWidthAsContent,
    props.isNotHoverEffect,
    props.isRadius,
    props.isWidthAsHeight,
    props.outline,
    props.size,
  ]);

  const { className: classNameIconGroup, style: styleIconGroup } = useMemo(() => {
    const className = setClasses([
      CSS_CLASS.component.button.icons.root,

      props.isIconGroup && CSS_CLASS.component.button.icons.isIconGroup,
    ]);

    const vars: Record<string, string> = {};

    if ('iconGroupOrder' in props)
      vars[CSS_VARS_RAW.component.button.iconGroup.order] = String(props.iconGroupOrder ?? 'initial');

    const style = setStyles([Object.keys(vars).length ? vars : undefined]);

    return { className, style };
  }, [props.className, props.style, props]);

  return (
    <motion.button
      whileTap={isInteractive ? { scale: 1.1, transition: { duration: 0.08, ease: 'easeOut' } } : undefined}
      whileHover={isInteractive ? { scale: 0.97, transition: { duration: 0.2, ease: 'easeOut' } } : undefined}
      tabIndex={props.tabIndex ?? 0}
      disabled={props.isDisabled}
      className={className}
      style={style}
      onClick={handleClick}
      onFocus={props.onFocus}
      onMouseDown={props.onMouseDown}
      type={props.type ?? 'button'}
      ref={ref as Ref<HTMLButtonElement>}
      name={props.name}
      aria-label={props.ariaLabel}
      id={props.id}
    >
      {!props.isOnlyIcon && (
        <div className={classNameTypography} style={styleTypography}>
          {props.children}
        </div>
      )}
      <div className={classNameIconGroup} style={styleIconGroup}>
        {iconComponents}
      </div>
    </motion.button>
  );
};
