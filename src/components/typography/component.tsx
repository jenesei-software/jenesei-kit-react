import { Tooltip } from '@local/components/tooltip';
import { useScreenWidth } from '@local/contexts/context-screen-width';
import { useOverflowing } from '@local/hooks/use-overflowing';
import { sxTypography } from '@local/styles/add/add.vanilla-extract.css';

import { memo, useMemo } from 'react';

import { TypographyProps, TypographyTooltipProps } from './component.types';

const TypographyWithRef = (props: TypographyProps) => {
  const { breakpoint } = useScreenWidth();

  const screenSX = useMemo(() => props.sx?.breakpoints?.[breakpoint] ?? props.sx?.default, [props.sx, breakpoint]);

  if (screenSX && 'variant' in screenSX) {
    if (screenSX.variant === 'h7' || screenSX.variant === 'h8' || screenSX.variant === 'h9') {
      return (
        <Text
          ref={props.ref as any}
          as={props.isAnchor ? 'a' : props.isParagraph ? 'p' : props.isSpan ? 'span' : 'span'}
          className={sxTypography.getStyles({
            sxTypography: props.sx,
          })}
          style={sxTypography.getVars({
            sxTypography: props.sx,
          })}
        >
          {props.children}
        </Text>
      );
    } else {
      return (
        <Text
          ref={props.ref as any}
          as={props.isAnchor ? 'a' : props.isParagraph ? 'p' : props.isSpan ? 'span' : screenSX.variant}
          href={props.href}
          className={sxTypography.getStyles({
            sxTypography: props.sx,
          })}
          style={sxTypography.getVars({
            sxTypography: props.sx,
          })}
        >
          {props.children}
        </Text>
      );
    }
  }

  return (
    <Text
      ref={props.ref as any}
      as={props.isAnchor ? 'a' : props.isParagraph ? 'p' : props.isSpan ? 'span' : 'span'}
      href={props.href}
      className={sxTypography.getStyles({
        sxTypography: props.sx,
      })}
      style={sxTypography.getVars({
        sxTypography: props.sx,
      })}
    >
      {props.children}
    </Text>
  );
};

export const Typography = (props: TypographyProps) => {
  return <TypographyWithRef {...props} />;
};

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

type Props = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<any>;
  href?: string;
};

function Text({ as: Component = 'span', children }: Props) {
  return <Component>{children}</Component>;
}
