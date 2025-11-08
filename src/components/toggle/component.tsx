import { KEY_SIZE_DATA_TOGGLE } from '@local/styles/theme/export';

import { useMemo } from 'react';

import { ToggleCenter, ToggleProps, ToggleWrapper } from '.';

export const Toggle = (props: ToggleProps) => {
  const toggleVariants = useMemo(
    () => ({
      tap: {
        width: KEY_SIZE_DATA_TOGGLE[props.size].thumb + 4,
        translateX: props.value
          ? KEY_SIZE_DATA_TOGGLE[props.size].width -
            KEY_SIZE_DATA_TOGGLE[props.size].thumb -
            KEY_SIZE_DATA_TOGGLE[props.size].padding * 3 -
            4
          : 0,
        transition: {
          duration: 0.05,
        },
      },
      checked: {
        translateX:
          KEY_SIZE_DATA_TOGGLE[props.size].width -
          KEY_SIZE_DATA_TOGGLE[props.size].thumb -
          KEY_SIZE_DATA_TOGGLE[props.size].padding * 3,
        transition: { ease: 'circInOut', duration: 0.05 },
      },
      unchecked: {
        translateX: 0,
        transition: { ease: 'circInOut', duration: 0.05 },
      },
    }),
    [props.size, props.value],
  );

  return (
    <ToggleWrapper
      $genre={props.genre}
      $isDisabled={props.isDisabled}
      $isDisabledOutline={props.isDisabled ?? props.isDisabledOutline}
      $isOutlineBoxShadow={props.isOutlineBoxShadow}
      $isReadOnly={props.isReadOnly}
      $value={props.value}
      $size={props.size}
      $error={props.error}
      tabIndex={0}
      onClick={() => props.onChange?.(!props.value)}
      whileTap='tap'
      animate={props.value ? 'checked' : 'unchecked'}
      onKeyDown={(e) => {
        if (e.key === 'Enter') props.onChange?.(!props.value);
      }}
    >
      <ToggleCenter
        variants={toggleVariants}
        $genre={props.genre}
        $isDisabled={props.isDisabled}
        $value={props.value}
        $size={props.size}
        $error={props.error}
      />
    </ToggleWrapper>
  );
};
