import { Popover, usePopover } from '@local/components/popover';
import { Typography } from '@local/components/typography';
import { CSS_CLASS } from '@local/styles/utils';
import { CSS_VARS, CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { FC, memo, Ref, useMemo } from 'react';

import { DEFAULT_TOOLTIP_OFFSET_FALLBACK, DEFAULT_TOOLTIP_PLACEMENT_FALLBACK } from './component.constants';
import { ITooltip } from './component.types';

export const Tooltip: FC<ITooltip> = memo((props) => {
  if (props.isDisabled)
    return (
      <div className={setClasses([CSS_CLASS.component.tooltip.wrapper, props.className])} style={props.style}>
        {props.children}
      </div>
    );

  return <TooltipContent {...props} />;
});

export const TooltipContent: FC<ITooltip> = (props) => {
  const { isOpen, refReference, refFloating, floatingStyles } = usePopover({
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
    const className = setClasses([CSS_CLASS.component.tooltip.root]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.tooltip.height] = CSS_VARS.size[props.size].padding;
    vars[CSS_VARS_RAW.component.tooltip.padding] = `${CSS_VARS.size[props.size].padding} ${CSS_VARS.size[props.size].padding} 0px ${CSS_VARS.size[props.size].padding}`;

    const style = setStyles([Object.keys(vars).length ? vars : undefined, props.style]);

    return { className, style };
  }, [props.style, props.size]);

  return (
    <>
      <div
        className={setClasses([CSS_CLASS.component.tooltip.wrapper, props.className])}
        style={props.style}
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
      >
        <Typography
          sx={{
            size: 14,
            ...props.sxTypography,
          }}
        >
          {props.content}
        </Typography>
      </Popover>
    </>
  );
};

Tooltip.displayName = 'Tooltip';
