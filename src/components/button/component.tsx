import {
  Icon,
  TIconCheckboxNameString,
  TIconIdNameString,
  TIconLoadingNameString,
  TIconLogoNameString,
  TIconRealEbailNameString,
} from '@local/components/icon';
import { Ripple } from '@local/components/ripple';

import { useMergeRefs } from '@floating-ui/react';
import { FC, Ref, useMemo, useRef } from 'react';
import { useTheme } from 'styled-components';

import { ButtonProps, StyledButton, StyledButtonIconsWrapper } from '.';

export const Button: FC<ButtonProps> = (props) => {
  const theme = useTheme();

  const iconComponents = useMemo(
    () =>
      (props.icons ?? [])
        ?.filter((icon) => !icon.isHidden)
        ?.map((icon, index) =>
          icon?.type === 'id' ? (
            <Icon
              key={`${icon.type}-${icon.name}-${index}`}
              name={icon?.name as TIconIdNameString}
              type='id'
              size={icon?.size ?? props.size}
              turn={icon.turn}
              order={icon.order}
            />
          ) : icon?.type === 'logo' ? (
            <Icon
              key={`${icon.type}-${icon.name}-${index}`}
              name={icon?.name as TIconLogoNameString}
              type='logo'
              size={icon?.size ?? props.size}
              turn={icon.turn}
              order={icon.order}
            />
          ) : icon?.type === 'checkbox' ? (
            <Icon
              key={`${icon.type}-${icon.name}-${index}`}
              name={icon?.name as TIconCheckboxNameString}
              type='checkbox'
              size={icon?.size ?? props.size}
              turn={icon.turn}
              order={icon.order}
            />
          ) : icon?.type === 'loading' ? (
            <Icon
              key={`${icon.type}-${icon.name}-${index}`}
              name={icon?.name as TIconLoadingNameString}
              type='loading'
              size={icon?.size ?? props.size}
              turn={icon.turn}
              order={icon.order}
            />
          ) : icon?.type === 'realebail' ? (
            <Icon
              key={`${icon.type}-${icon.name}-${index}`}
              name={icon?.name as TIconRealEbailNameString}
              type='realebail'
              size={icon?.size ?? props.size}
              turn={icon.turn}
              order={icon.order}
            />
          ) : null,
        ),
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
      $isNotHoverEffect={props.isNotHoverEffect}
      whileTap={props.isWhileTapEffect ? { scale: 0.9, transition: { duration: 0.02 } } : {}}
      id={props.id}
      tabIndex={props.tabIndex ?? 0}
      $isFullSize={props.isFullSize}
      $genre={props.genre}
      $size={props.size}
      $isDisabled={props.isDisabled}
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
        isDisabled={props.isDisabled ?? props.isDisabledRipple}
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
