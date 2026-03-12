import { Tooltip } from '@local/components/tooltip';
import { useOverflowing } from '@local/hooks/use-overflowing';
import { useTypographyStyles } from '@local/hooks/use-typography-styles';

import { ElementType, memo, useMemo } from 'react';

import { ITypographyComponent, ITypographyTooltip } from './component.types';

export const Typography = memo((props: ITypographyComponent) => {
  const { className, style } = useTypographyStyles({
    sx: props?.sx ?? {},
    className: props.className,
    style: props.style,
  });

  const Component = useMemo(() => {
    const Component: ElementType = props.isAnchor
      ? 'a'
      : props.isParagraph
        ? 'p'
        : props.isSpan
          ? 'span'
          : props.sx && 'variant' in props.sx
            ? props.sx.variant === 'headline'
              ? 'h1'
              : props.sx.variant === 'sub-headline'
                ? 'h2'
                : props.sx.variant === 'title-1'
                  ? 'h3'
                  : props.sx.variant === 'title-2'
                    ? 'h4'
                    : props.sx.variant === 'title-3'
                      ? 'h5'
                      : props.sx.variant === 'title-4'
                        ? 'h6'
                        : 'span'
            : 'span';
    return Component;
  }, [props.isAnchor, props.isParagraph, props.isSpan, props.sx]);

  return (
    <Component ref={props.ref as any} href={props.href} className={className} style={style}>
      {props.children}
    </Component>
  );
});

export const TypographyTooltip = memo((props: ITypographyTooltip) => {
  const { isDisabled, ref } = useOverflowing<HTMLDivElement>({
    isCheckSize: props.tooltip.isDisabled !== undefined ? !props.tooltip.isDisabled : true,
    dependencies: [props.children],
  });
  return (
    <Tooltip isDisabled={isDisabled} content={props.children} {...props.tooltip}>
      <Typography ref={ref} {...props.typography} style={{ position: 'relative', ...props.typography.style }}>
        {props.children}
      </Typography>
    </Tooltip>
  );
});
