import { useScreenWidth } from '@local/contexts/context-screen-width';
import { useOverflowing } from '@local/hooks/use-overflowing';

import { createLink, LinkProps } from '@tanstack/react-router';
import { memo, useMemo } from 'react';

import { Tooltip } from '../tooltip';
import { Title, TypographyCSSProps, TypographyProps, TypographyTooltipProps } from '.';

const TypographyWithRef = (props: TypographyProps) => {
  const { screenActual } = useScreenWidth();
  const cssProps: TypographyCSSProps & Pick<TypographyProps, 'onClick' | 'className' | 'style'> = useMemo(
    () => ({
      $sxTypography: props.sx,
      style: props.style,
      className: props.className,
      $sx: props.sxStandard,
      $isTransitionFontSize: props.isTransitionFontSize,
      $isDisabledOutline: props.isDisabledOutline,
      $isOutlineBoxShadow: props.isOutlineBoxShadow,
      $isReadOnly: props.isReadOnly,
      onClick: props.onClick ? props.onClick : () => {},
    }),
    [
      props.sx,
      props.style,
      props.className,
      props.sxStandard,
      props.onClick,
      props.isDisabledOutline,
      props.isOutlineBoxShadow,
      props.isReadOnly,
      props.isTransitionFontSize,
    ],
  );

  const screenSX = useMemo(() => props.sx?.[screenActual] ?? props.sx?.default, [props.sx, screenActual]);

  if (screenSX && 'variant' in screenSX) {
    if (screenSX.variant === 'h7' || screenSX.variant === 'h8' || screenSX.variant === 'h9') {
      return (
        <Title
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          ref={props.ref as any}
          as={props.isAnchor ? 'a' : props.isParagraph ? 'p' : props.isSpan ? 'span' : 'span'}
          href={props.href}
          {...cssProps}
        >
          {props.children}
        </Title>
      );
    } else {
      return (
        <Title
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          ref={props.ref as any}
          as={props.isAnchor ? 'a' : props.isParagraph ? 'p' : props.isSpan ? 'span' : screenSX.variant}
          href={props.href}
          {...cssProps}
        >
          {props.children}
        </Title>
      );
    }
  }

  return (
    <Title
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      ref={props.ref as any}
      as={props.isAnchor ? 'a' : props.isParagraph ? 'p' : props.isSpan ? 'span' : 'span'}
      href={props.href}
      {...cssProps}
    >
      {props.children}
    </Title>
  );
};

export const Typography = (props: TypographyProps) => {
  return <TypographyWithRef {...props} />;
};

const TypographySizeIsAnchor = (props: TypographyProps & LinkProps) => {
  return <TypographyWithRef isAnchor {...props} ref={props.ref} href={props.href} />;
};

export const TypographyLink = createLink(TypographySizeIsAnchor);

export const TypographyTooltip = memo((props: TypographyTooltipProps) => {
  const { isDisabled, ref } = useOverflowing<HTMLDivElement>({
    isCheckSize: props.tooltip.isDisabled !== undefined ? !props.tooltip.isDisabled : true,
    dependencies: [props.children],
  });
  return (
    <Tooltip isDisabled={isDisabled} content={props.children} {...props.tooltip}>
      <TypographyWithRef ref={ref} {...props.typography} style={{ position: 'relative' }}>
        {props.children}
      </TypographyWithRef>
    </Tooltip>
  );
});

TypographyTooltip.displayName = 'TypographyTooltip';
TypographyWithRef.displayName = 'TypographyWithRef';
TypographySizeIsAnchor.displayName = 'TypographySizeIsAnchor';
