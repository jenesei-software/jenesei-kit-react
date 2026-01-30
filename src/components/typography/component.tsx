import { Tooltip } from '@local/components/tooltip';
import { useOverflowing } from '@local/hooks/use-overflowing';
import { useResponsiveParams } from '@local/hooks/use-responsive-sx/use';
import { TypographyAllProps } from '@local/styles/add/add.types';
import { addSxTypography } from '@local/styles/add/add.vanilla-extract';

import { ElementType, useMemo } from 'react';

import { TypographyProps, TypographyTooltipProps } from './component.types';

export const Typography = (props: TypographyProps) => {
  const params = useResponsiveParams<TypographyAllProps>(props.sx);

  const { className, style, Component } = useMemo(() => {
    return {
      className: addSxTypography.className(params?.params ?? {}),
      style: addSxTypography.style(params?.params ?? {}),
      Component: props.isAnchor
        ? 'a'
        : props.isParagraph
          ? 'p'
          : props.isSpan
            ? 'span'
            : params?.params && 'variant' in params.params
              ? params?.params.variant === 'h7' || params.params.variant === 'h8' || params.params.variant === 'h9'
                ? 'span'
                : params?.params.variant
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
