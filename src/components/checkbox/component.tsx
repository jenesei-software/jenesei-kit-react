import { ErrorMessage } from '@local/components/error';
import { Icon } from '@local/components/icon';
import { Ripple } from '@local/components/ripple';
import { getSxTypography } from '@local/functions';

import { FC, useCallback, useMemo } from 'react';
import { useTheme } from 'styled-components';

import { CheckboxWrapper } from './component.styles';
import { CheckboxProps } from './component.types';

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
        <Icon
          {...(props.checked ? props.view.true : props.view.false)}
          size={(props.checked ? props.view.true : props.view.false).size ?? props.size}
        />
        {props.children && props.children}
      </>
    ),
    [props.checked, props.children, props.size, props.view],
  );
  const LoadingComponent = <Icon size={props.size} type='loading' name='Line' />;

  return (
    <>
      <CheckboxWrapper
        type='button'
        $genre={props.genre}
        $error={props.error}
        $view={props.view}
        $checked={props.checked}
        $isWidthAsHeight={props.isWidthAsHeight}
        $size={props.size}
        $isDisabled={props.isDisabled}
        $isHiddenBorder={props.isHiddenBorder}
        $isNotBackground={props.isNotBackground}
        $sx={props.sx}
        $sxTypography={getSxTypography({ size: props.size, weight: 700, sx: props.sxTypography, theme })}
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
          size={props?.error.size ?? props.size}
          sxTypography={getSxTypography({ size: 'medium', weight: 400, sx: props.sxTypography, theme })}
          {...props.error}
        />
      ) : null}
    </>
  );
};
