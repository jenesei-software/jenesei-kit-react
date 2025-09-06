import { Typography } from '@local/components/typography';

import { FC, memo, Ref } from 'react';

import { usePopover } from '../popover';
import {
  DEFAULT_TOOLTIP_OFFSET_FALLBACK,
  DEFAULT_TOOLTIP_PLACEMENT_FALLBACK,
  TooltipBox,
  TooltipContainer,
  TooltipProps,
} from '.';

export const Tooltip: FC<TooltipProps> = memo((props) => {
  if (props.isDisabled) return <TooltipContainer sx={props.sx}>{props.children}</TooltipContainer>;

  return <TooltipContent {...props} />;
});

export const TooltipContent: FC<TooltipProps> = (props) => {
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
  return (
    <>
      <TooltipContainer sx={props.sx} ref={refReference as Ref<HTMLDivElement | null>}>
        {props.children}
      </TooltipContainer>
      <TooltipBox
        size={props.size}
        isOpen={isOpen}
        genre={props.genre}
        floatingStyles={floatingStyles}
        ref={refFloating}
        maxHeight={props.maxHeight}
        maxWidth={props.maxWidth}
      >
        <Typography
          sx={
            props.sxTypography ?? {
              default: {
                size: 14,
              },
            }
          }
        >
          {props.content}
        </Typography>
      </TooltipBox>
    </>
  );
};

Tooltip.displayName = 'Tooltip';
