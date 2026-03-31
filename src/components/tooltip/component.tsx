import { Popover, usePopover } from '@local/components/popover';
import { Typography } from '@local/components/typography';
import { useTypographyStyles } from '@local/hooks/use-typography-styles';
import { CSS_CLASS, EXTRA_VALUE } from '@local/styles/utils';
import { CSS_VARS, CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { FC, memo, Ref, useMemo } from 'react';

import { DEFAULT_TOOLTIP_OFFSET_FALLBACK, DEFAULT_TOOLTIP_PLACEMENT_FALLBACK } from './component.constants';
import { ITooltip } from './component.types';

export const Tooltip: FC<ITooltip> = memo((props) => {
  if (props.isDisabled)
    return (
      <div
        className={setClasses([CSS_CLASS.component.tooltip.wrapper, props.classNameWrapper])}
        style={props.styleWrapper}
      >
        {props.children}
      </div>
    );

  return <TooltipContent {...props} />;
});

export const TooltipContent: FC<ITooltip> = (props) => {
  const { isOpen, refReference, refFloating, floatingStyles, context, refArrow } = usePopover({
    placement: props.placement ?? DEFAULT_TOOLTIP_PLACEMENT_FALLBACK,
    offset: props.offset ?? DEFAULT_TOOLTIP_OFFSET_FALLBACK,
    mode: props.mode ?? 'hover',
    isClickOutside: props.isClickOutside ?? true,
    isFloatingHover: props.isFloatingHover ?? true,
    isWidthAsContent: props.isWidthAsContent ?? false,
    hoverCloseDelay: props.hoverCloseDelay ?? undefined,
    hoverOffset: props.hoverOffset ?? undefined,
  });

  const { className, style } = useMemo(() => {
    const className = setClasses([CSS_CLASS.component.tooltip.root, props.classNamePopover]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.tooltip.height] = CSS_VARS.size[props.size].padding;
    vars[CSS_VARS_RAW.component.tooltip.padding] =
      `${CSS_VARS.size[props.size].padding} ${CSS_VARS.size[props.size].padding} 0px ${CSS_VARS.size[props.size].padding}`;

    const style = setStyles([Object.keys(vars).length ? vars : undefined, props.stylePopover]);

    return { className, style };
  }, [props.size, props.classNamePopover, props.stylePopover]);

  const { className: classNameTypography, style: styleTypography } = useTypographyStyles({
    sx: { variant: EXTRA_VALUE.sizeToController[props.size], isBold: true, ...props?.sxTypography },
    style: { order: 0, display: 'inline-flex' },
  });

  return (
    <>
      <div
        className={setClasses([CSS_CLASS.component.tooltip.wrapper, props.classNameWrapper])}
        style={props.styleWrapper}
        ref={refReference as Ref<HTMLDivElement | null>}
      >
        {props.children}
      </div>
      <Popover
        className={className}
        style={style}
        size={props.size}
        isOpen={isOpen}
        genre={props.genre}
        floatingStyles={floatingStyles}
        ref={refFloating}
        maxHeight={props.maxHeight}
        maxWidth={props.maxWidth}
        context={context}
        refArrow={refArrow}
        isArrow
      >
        <Typography className={classNameTypography} style={styleTypography} sx={props.sxTypography}>
          {props.content}
        </Typography>
      </Popover>
    </>
  );
};

Tooltip.displayName = 'Tooltip';
