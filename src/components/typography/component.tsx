import { useSX } from '@local/hooks/use-responsive-layout/use';
import { useTypographyStyles } from '@local/hooks/use-typography-styles';
import { ITypography } from '@local/styles/utils';

import { ElementType, memo, useMemo } from 'react';

import { ITypographyComponent } from './component.types';

export const Typography = memo((props: ITypographyComponent) => {
  const sx = useSX(props?.sx ?? {}) as ITypography;

  const { className, style } = useTypographyStyles({
    sx,
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
          : sx && 'variant' in sx
            ? sx.variant === 'headline'
              ? 'h1'
              : sx.variant === 'sub-headline'
                ? 'h2'
                : sx.variant === 'title-1'
                  ? 'h3'
                  : sx.variant === 'title-2'
                    ? 'h4'
                    : sx.variant === 'title-3'
                      ? 'h5'
                      : sx.variant === 'title-4'
                        ? 'h6'
                        : 'span'
            : 'span';
    return Component;
  }, [props.isAnchor, props.isParagraph, props.isSpan, sx]);

  return (
    <Component ref={props.ref as any} href={props.href} className={className} style={style}>
      {props.children}
    </Component>
  );
});
