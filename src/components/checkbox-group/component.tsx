import { Checkbox } from '@local/components/checkbox';
import { KEY_SIZE_DATA } from '@local/theme';

import { ReactNode, useCallback } from 'react';
import { useTheme } from 'styled-components';

import {
  CheckboxChildren,
  CheckboxGroupItem,
  CheckboxGroupLabel,
  CheckboxGroupProps,
  CheckboxGroupWrapper,
  ICheckboxValue,
} from '.';

export const CheckboxGroup = <T extends ICheckboxValue>(props: CheckboxGroupProps<T>) => {
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

  const theme = useTheme();
  return (
    <CheckboxGroupWrapper
      className={props.className}
      $sx={props.sx}
      $size={props.size}
      $font={{
        size: props.font?.size ?? KEY_SIZE_DATA[props.size].font,
        weight: props.font?.weight ?? 700,
        family: props.font?.family ?? theme.font.family,
        height: props.font?.height,
      }}
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
              size={props.size}
              checked={isChecked}
              font={{
                size: props.font?.size ?? KEY_SIZE_DATA[props.size].font,
                weight: props.font?.weight ?? 700,
                family: props.font?.family ?? theme.font.family,
                height: props.font?.height,
              }}
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
