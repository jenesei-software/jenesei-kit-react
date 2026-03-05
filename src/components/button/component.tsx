import { getIconComponents } from '@local/components/icon';
import { useSX } from '@local/hooks/use-responsive-layout';
import { useTypographyStyles } from '@local/hooks/use-typography-styles';
import { CSS_CLASS, CSS_VARS, CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';
import { IContainer, ITypography } from '@local/styles/utils/types';

import { useMergeRefs } from '@floating-ui/react';
import { motion } from 'framer-motion';
import { FC, Ref, useMemo, useRef } from 'react';

import styles from './component.styles.module.css';
import { IButton } from './component.types';

export const Button: FC<IButton> = (props) => {
  const sx = useSX(props?.sx ?? {}) as IContainer;

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

  const sxTypography = useSX(props?.sxTypography ?? {}) as ITypography;

  const { className: classNameTypography, style: styleTypography } = useTypographyStyles({
    sx: { ...sxTypography, size: CSS_VARS.size[props.size].font, weight: '700' },
  });

  const { className, style } = useMemo(() => {
    const className = setClasses([
      props.className,
      classNameTypography,
      styles['component-button'],
      CSS_CLASS.outline[props.isDisabledOutline ? 'none' : (props.outline ?? 'default')],
      CSS_CLASS.control[
        props.isDisabled || props.isHidden ? 'none' : props.isNotHoverEffect ? 'onlyActive' : 'default'
      ],
      CSS_CLASS.transition.color,
      props.isNotHoverEffect && styles['is-no-hover-effect'],
      props.isHidden && styles['is-hidden'],
      props.isHiddenBorder && styles['is-hidden-border'],
      props.isRadius && styles['is-radius'],
      props.isFullSize && styles['is-full-size'],
      props.isWidthAsHeight && styles['is-width-as-height'],
      props.isMinWidthAsContent && styles['is-min-width-as-content'],
    ]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.button.index.background] = CSS_VARS.genre.button[props.genre].background.index;
    vars[CSS_VARS_RAW.component.button.index.color] = CSS_VARS.genre.button[props.genre].color.index;
    vars[CSS_VARS_RAW.component.button.index.border] =  CSS_VARS.genre.button[props.genre].border.index;

    vars[CSS_VARS_RAW.component.button.index.height] = CSS_VARS.size[props.size].height;
    vars[CSS_VARS_RAW.component.button.index.padding] = CSS_VARS.size[props.size].padding;
    vars[CSS_VARS_RAW.component.button.index.radius] = CSS_VARS.size[props.size].radius;
    vars[CSS_VARS_RAW.component.button.index.gap] = `calc(${CSS_VARS.size[props.size].padding} - 2px)`;

    const style = setStyles([sx, props.style, styleTypography, Object.keys(vars).length ? vars : undefined]);

    return { className, style };
  }, [props.className, props.style, props, classNameTypography, styleTypography, sx]);

  const { className: classNameIconGroup, style: styleIconGroup } = useMemo(() => {
    const className = setClasses([
      styles['component-button__icons'],

      props.isIconGroup && styles['is-icon-group'],
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
      id={props.id}
      tabIndex={props.tabIndex ?? 0}
      disabled={props.isDisabled}
      type={props.type ?? 'button'}
      className={className}
      style={style}
      onClick={handleClick}
      onFocus={props.onFocus}
      onMouseDown={props.onMouseDown}
      ref={ref as Ref<HTMLButtonElement>}
    >
      {!props.isOnlyIcon && <div style={{ order: 0, display: 'contents' }}>{props.children && props.children}</div>}
      <div className={classNameIconGroup} style={styleIconGroup}>
        {iconComponents}
      </div>
    </motion.button>
  );
};
