import { Tooltip } from '@local/components/tooltip';
import { useLayout } from '@local/hooks/use-layout-sx/use';
import { useOverflowing } from '@local/hooks/use-overflowing';
import { dynamicTypography } from '@local/styles/add';

import { ElementType, useMemo } from 'react';

import { TypographyProps, TypographyTooltipProps } from './component.types';

export const Typography = (props: TypographyProps) => {
  const params = useLayout(props?.sx ?? {});

  const { className, style, Component } = useMemo(() => {
    return {
      className: dynamicTypography.className(params ?? {}),
      style: dynamicTypography.style(params ?? {}),
      Component: props.isAnchor
        ? 'a'
        : props.isParagraph
          ? 'p'
          : props.isSpan
            ? 'span'
            : params && 'variant' in params
              ? params.variant === 'h7' || params.variant === 'h8' || params.variant === 'h9'
                ? 'span'
                : params.variant
              : ('span' as ElementType),
    };
  }, [params, props.isAnchor, props.isParagraph, props.isSpan]);

  return (
    <Component ref={props.ref} href={props.href} className={className} style={style}>
      {props.children}
    </Component>
  );
};

export const TypographyTooltip = (props: TypographyTooltipProps) => {
  const { isDisabled, ref } = useOverflowing<HTMLDivElement>({
    isCheckSize: props.tooltip.isDisabled !== undefined ? !props.tooltip.isDisabled : true,
    dependencies: [props.children],
  });
  return (
    <Tooltip isDisabled={isDisabled} content={props.children} {...props.tooltip}>
      <Typography ref={ref} {...props.typography} style={{ position: 'relative' }}>
        {props.children}
      </Typography>
    </Tooltip>
  );
};
