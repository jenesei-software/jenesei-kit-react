import { getIconComponents } from '@local/components/icon';
import { Ripple } from '@local/components/ripple';
import { KEY_SIZE_DATA } from '@local/theme';

import { useMergeRefs } from '@floating-ui/react';
import { FC, Ref, useMemo, useRef } from 'react';
import { useTheme } from 'styled-components';

import { ButtonProps, StyledButton, StyledButtonIconsWrapper } from '.';

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

  return (
    <StyledButton
      $font={{
        ...props.font,
        size: props.font?.size ?? KEY_SIZE_DATA[props.size].font,
        weight: props.font?.weight ?? 700,
      }}
      $isNotHoverEffect={props.isNotHoverEffect}
      whileTap={props.isWhileTapEffect ? { scale: 0.9, transition: { duration: 0.01 } } : {}}
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
      $sxTypography={props.sxTypography}
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
