import { ErrorMessage } from '@local/styles/error';

import { useMergeRefs } from '@floating-ui/react';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useTheme } from 'styled-components';

import { StyledTextArea, TextAreaProps, TextAreaWrapper } from '.';

export const TextArea = (props: TextAreaProps) => {
  const theme = useTheme();

  const refLocal = useRef<HTMLTextAreaElement>(null);
  const ref = useMergeRefs([refLocal, props.ref]);

  const lineHeight = useMemo(
    () => theme.font.sizeDefault.default * theme.font.lineHeight,
    [theme.font.lineHeight, theme.font.sizeDefault.default],
  );
  const maxHeight = useMemo(() => (props.maxRows ? props.maxRows * lineHeight : 0), [lineHeight, props.maxRows]);
  const minHeight = useMemo(
    () => (props.minRows ? props.minRows * lineHeight : lineHeight),
    [lineHeight, props.minRows],
  );

  const resizeTextarea = useCallback(() => {
    const el = refLocal.current;
    if (el && props.isAutoHeight) {
      el.style.height = 'auto';
      const newHeight = Math.min(el.scrollHeight, maxHeight);
      el.style.height = `${newHeight}px`;
    }
  }, [props.isAutoHeight, maxHeight]);

  const handleOnChange = useCallback(
    (value: string) => {
      if (props.isNoSpaces) {
        const valueWithoutSpaces = value.replace(/\s+/g, '');
        props.onChange?.(valueWithoutSpaces);
      } else {
        props.onChange?.(value);
      }
    },
    [props],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (props.isAutoHeight) {
      requestAnimationFrame(resizeTextarea);
    }
  }, [props.value, resizeTextarea, props.isAutoHeight]);
  return (
    <>
      <TextAreaWrapper
        $isInputEffect={props.isInputEffect}
        $isDisabled={props.isDisabled}
        $isDisabledOutline={props.isDisabled ?? props.isDisabledOutline}
        $isOutlineBoxShadow={props.isOutlineBoxShadow}
        $sx={props.sx}
        $genre={props.genre}
        $size={props.size}
        $lineHeight={lineHeight}
        $isReadOnly={props.isReadOnly}
        className={props.className}
        tabIndex={-1}
      >
        <StyledTextArea
          tabIndex={0}
          ref={ref}
          $font={{
            ...props.font,
            size: props.font?.size ?? 16,
            weight: props.font?.weight ?? (props.isBold ? 500 : 400),
            height: props.font?.height ?? `${lineHeight}px`,
          }}
          $lineHeight={lineHeight}
          $isResize={props.isResize}
          $error={props.error}
          $isInputEffect={props.isInputEffect}
          $isLoading={props.isLoading}
          $genre={props.genre}
          $size={props.size}
          $isBold={props.isBold}
          $isDisabled={props.isDisabled}
          maxLength={props.maxLength}
          minLength={props.minLength}
          disabled={props.isDisabled}
          readOnly={props.isReadOnly}
          required={props.isRequired}
          defaultValue={props.defaultValue === null ? '' : props.defaultValue}
          value={props.value === null ? '' : props.value}
          rows={props.minRows}
          placeholder={props.placeholder}
          onChange={(event) => handleOnChange(event.target.value)}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onKeyDown={props.onKeyDown}
          name={props.name}
          autoComplete={props.autoComplete}
          id={props.id}
          style={{
            minHeight: `${minHeight}px`,
            maxHeight: props.isResize ? 'none' : props.isAutoHeight ? `${maxHeight}px` : `${minHeight}px`,
          }}
        />
      </TextAreaWrapper>
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
