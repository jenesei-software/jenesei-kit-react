import { ErrorMessage } from '@local/styles/error';
import { KEY_SIZE_DATA } from '@local/theme';

import { FC, useCallback, useMemo } from 'react';
import { useTheme } from 'styled-components';

import { Icon } from '../icon';
import { Ripple } from '../ripple';
import { CheckboxProps, CheckboxWrapper, StyledIcon } from '.';

export const Checkbox: FC<CheckboxProps> = (props) => {
  const handleOnClick = useCallback(
    (checked: boolean) => {
      props.onChange?.(checked);
    },
    [props.onChange],
  );
  const theme = useTheme();
  const children = useMemo(
    () => (
      <>
        <StyledIcon
          size={props.sizeIcon || props.size}
          name={props.view}
          type='checkbox'
          order={props.iconOrder}
          $genre={props.genre}
          $checked={props.checked}
        />
        {props.children && props.children}
      </>
    ),
    [props.checked, props.children, props.genre, props.iconOrder, props.size, props.sizeIcon, props.view],
  );
  const LoadingComponent = <Icon size={props.size} type='loading' name='Line' />;

  return (
    <>
      <CheckboxWrapper
        type='button'
        $genre={props.genre}
        $error={props.error}
        $view={props.view}
        $font={{
          size: props.font?.size ?? KEY_SIZE_DATA[props.size].font,
          weight: props.font?.weight ?? 700,
          family: props.font?.family ?? theme.font.family,
          height: props.font?.height,
        }}
        $checked={props.checked}
        $isWidthAsHeight={props.isWidthAsHeight}
        $size={props.size}
        $isDisabled={props.isDisabled}
        $isHiddenBorder={props.isHiddenBorder}
        $isNotBackground={props.isNotBackground}
        $sx={props.sx}
        $sxTypography={props.sxTypography}
        $isDisabledOutline={props.isDisabled ?? props.isDisabledOutline}
        $isOutlineBoxShadow={props.isOutlineBoxShadow}
        $isReadOnly={props.isReadOnly}
        disabled={props.isDisabled}
        tabIndex={0}
        onClick={() => !props.isDisabled && handleOnClick(!props.checked)}
      >
        <Ripple color={theme.colors.checkbox[props.genre].color.rest} isDisabled={props.isDisabled} />
        {props.isOnlyLoading ? (
          props.isLoading ? (
            LoadingComponent
          ) : (
            children
          )
        ) : (
          <>
            {children}
            {props.isLoading && LoadingComponent}
          </>
        )}
      </CheckboxWrapper>
      {props?.error ? (
        <ErrorMessage
          {...props.error}
          size={props?.error.size ?? props.size}
          font={{
            size: 12,
            weight: 400,
            family: props.font?.family ?? theme.font.family,
          }}
        />
      ) : null}
    </>
  );
};
