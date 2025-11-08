import { getIconComponents } from '@local/components/icon/export';
import { Ripple } from '@local/components/ripple/export';
import { TypographySXProps } from '@local/styles/add/export';
import { IThemeSize, KEY_SIZE_DATA } from '@local/styles/theme/export';

import { useMergeRefs } from '@floating-ui/react';
import { FC, Ref, useMemo, useRef } from 'react';
import { useTheme } from 'styled-components';

import { ButtonProps, StyledButton, StyledButtonIconsWrapper } from '.';

function getSxTypography(props: { size: IThemeSize; weight: number; sx?: TypographySXProps }): TypographySXProps {
  return {
    default: {
      size: KEY_SIZE_DATA[props.size].font,
      weight: 700,
      ...props.sx?.default,
    },
    ...props.sx,
  };
}

export const Button: FC<ButtonProps> = (props) => {
  const theme = useTheme();

  const iconComponents = useMemo(
    () => getIconComponents({ icons: props.icons ?? [], size: props.size }),
    [props.icons, props.size],
  );

  const handleClick: ButtonProps['onClick'] = (event) => {
    if (!props.isDisabled && props.onClick) {
      props.onClick(event);
    }
  };
  const refDefault = useRef<HTMLButtonElement>(null);

  const ref = useMergeRefs([refDefault, props.ref]);

  const isInteractive = !props.isDisabled && props.isWhileTapEffect;


  return (
    <StyledButton
      $isNotHoverEffect={props.isNotHoverEffect}
      whileTap={isInteractive ? { scale: 1.1, transition: { duration: 0.08, ease: 'easeOut' } } : undefined}
      whileHover={isInteractive ? { scale: 0.97, transition: { duration: 0.2, ease: 'easeOut' } } : undefined}
      id={props.id}
      tabIndex={props.tabIndex ?? 0}
      $isFullSize={props.isFullSize}
      $genre={props.genre}
      $size={props.size}
      $isDisabled={props.isDisabled}
      $isDisabledOutline={props.isDisabled ?? props.isDisabledOutline}
      $isOutlineBoxShadow={props.isOutlineBoxShadow}
      $isReadOnly={props.isReadOnly}
      $isMinWidthAsContent={props.isMinWidthAsContent}
      $isWidthAsHeight={props.isWidthAsHeight}
      $isRadius={props.isRadius}
      $isHidden={props.isHidden}
      $isPlaystationEffect={props.isPlaystationEffect}
      $sxTypography={getSxTypography({ size: props.size, weight: 700, sx: props.sxTypography })}
      $isHiddenBorder={props.isHiddenBorder || props.isPlaystationEffect}
      disabled={props.isDisabled}
      type={props.type ?? 'button'}
      className={props.className}
      onClick={handleClick}
      onFocus={props.onFocus}
      onMouseDown={props.onMouseDown}
      ref={ref as Ref<HTMLButtonElement>}
      $sx={props.sx}
    >
      <Ripple
        color={theme.colors.checkbox[props.genre].color.rest}
        isDisabled={props.isDisabled || props.isDisabledRipple}
        isHidden={props.isHidden}
      />

      {!props.isOnlyIcon && <div style={{ order: 0, display: 'contents' }}>{props.children && props.children}</div>}
      <StyledButtonIconsWrapper
        $size={props.size}
        $isIconGroup={props.isIconGroup}
        $iconGroupOrder={'iconGroupOrder' in props ? props.iconGroupOrder : undefined}
      >
        {iconComponents}
      </StyledButtonIconsWrapper>
    </StyledButton>
  );
};
