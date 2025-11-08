import { Checkbox } from '@local/components/checkbox/export';
import { getSxTypography } from '@local/functions';

import { ReactNode, useCallback } from 'react';

import {
  CheckboxChildren,
  CheckboxGroupItem,
  CheckboxGroupLabel,
  CheckboxGroupProps,
  CheckboxGroupValueProps,
  CheckboxGroupWrapper,
} from '.';

export const CheckboxGroup = <T extends CheckboxGroupValueProps>(props: CheckboxGroupProps<T>) => {
  const createMarkup = (html: string) => ({ __html: html });

  const handleCheckboxChange = useCallback(
    (item: T) => {
      const isSelected = props.value.some((selectedItem) => selectedItem[props.valueField] === item[props.valueField]);

      const updatedSelectedItems = isSelected
        ? props.value.filter((selectedItem) => selectedItem[props.valueField] !== item[props.valueField])
        : props.multiple
          ? [...props.value, item]
          : [item];
      if (props.onChange) props.onChange(updatedSelectedItems);
    },
    [props],
  );

  return (
    <CheckboxGroupWrapper
      className={props.className}
      $sx={props.sx}
      $size={props.size}
      $sxTypography={getSxTypography({ size: props.size, weight: 700, sx: props.sxTypography })}
    >
      {props.options.map((e, index) => {
        const isChecked = props.value.some((selectedItem) => selectedItem[props.valueField] === e[props.valueField]);
        return (
          <CheckboxGroupItem key={index} onClick={() => !props.isClickOnlyIcon && handleCheckboxChange(e)}>
            <Checkbox
              genre={props.checkboxGenre}
              isHiddenBorder={props.checkboxIsHiddenBorder}
              view={props.checkBoxView}
              sx={props.checkboxSX}
              sxTypography={getSxTypography({ size: props.size, weight: 700, sx: props.sxTypography })}
              size={props.size}
              checked={isChecked}
            >
              {props.labelField && e?.[props.labelField] !== undefined && (
                <CheckboxGroupLabel dangerouslySetInnerHTML={createMarkup(e[props.labelField] as string)} />
              )}
            </Checkbox>
            {props.childrenField && e?.[props.childrenField] !== undefined && (
              <CheckboxChildren>{e[props.childrenField] as ReactNode}</CheckboxChildren>
            )}
          </CheckboxGroupItem>
        );
      })}
    </CheckboxGroupWrapper>
  );
};
