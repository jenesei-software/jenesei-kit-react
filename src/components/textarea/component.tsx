import { ErrorMessage } from '@local/styles/error'
import { KEY_SIZE_DATA } from '@local/theme/theme'

import { useMergeRefs } from '@floating-ui/react'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useTheme } from 'styled-components'

import { StyledTextArea, StyledTextAreaWrapper, TextAreaProps } from '.'

export const TextArea = (props: TextAreaProps) => {
  const theme = useTheme()
  const handleOnChange = useCallback(
    (value: string) => {
      if (props.isNoSpaces) {
        const valueWithoutSpaces = value.replace(/\s+/g, '')
        props.onChange?.(valueWithoutSpaces)
      } else {
        props.onChange?.(value)
      }
    },
    [props]
  )

  const refLocal = useRef<HTMLTextAreaElement>(null)
  const ref = useMergeRefs([refLocal, props.ref])
  // const sizeHeight = useMemo(() => props.sizeHeight ?? KEY_SIZE_DATA[props.size].height, [props.size, props.sizeHeight])

  const lineHeight = useMemo(
    () => theme.font.sizeDefault.default * theme.font.lineHeight,
    [theme.font.lineHeight, theme.font.sizeDefault.default]
  )
  const sizePadding = useMemo(
    () => props.sizePadding ?? KEY_SIZE_DATA[props.size].padding,
    [props.size, props.sizePadding]
  )
  const sizeRows = useCallback(
    (rows: number) => (rows ? lineHeight * rows : lineHeight) + (sizePadding - 4 + sizePadding - 2),
    [lineHeight, sizePadding]
  )
  const handleHeight = useCallback(() => {
    const el = refLocal.current
    if (!el) return
    const minHeight = sizeRows(props.minRows ?? 1)
    const maxHeight = props.maxRows ? sizeRows(props.maxRows) : Infinity
    // console.log(sizePadding + 4 + 6, minHeight, maxHeight)

    el.style.height = 'auto'
    const scrollHeight = el.scrollHeight
    let newHeight = scrollHeight
    // console.log('scrollHeight', scrollHeight, 'minHeight', minHeight, 'maxHeight', maxHeight)
    if (props.isAutoHeight) {
      newHeight = Math.max(minHeight, Math.min(scrollHeight, maxHeight))
    } else {
      newHeight = Math.max(minHeight, lineHeight)
    }

    // Устанавливаем финальные стили
    // el.style.height = `${newHeight}px`
    el.style.minHeight = `${minHeight}px`
    el.style.maxHeight = isFinite(maxHeight) ? `${maxHeight}px` : ''

    // Управление скроллом
    el.style.overflowY = 'auto'
  }, [sizeRows, props.minRows, props.maxRows, props.isAutoHeight, lineHeight])

  useEffect(() => {
    handleHeight()
  }, [handleHeight, props.value])

  return (
    <>
      <StyledTextAreaWrapper $isTextAreaEffect={props.isTextAreaEffect} $isDisabled={props.isDisabled} $sx={props.sx}>
        <StyledTextArea
          className={props.className}
          ref={ref}
          $isResize={props.isResize}
          $error={props.error}
          $isTextAreaEffect={props.isTextAreaEffect}
          $isLoading={props.isLoading}
          $genre={props.genre}
          $size={props.size}
          $isBold={props.isBold}
          $isDisabled={props.isDisabled}
          disabled={props.isDisabled}
          readOnly={props.isReadOnly}
          required={props.isRequired}
          defaultValue={props.defaultValue}
          value={props.value ?? ''}
          placeholder={props.placeholder}
          onChange={event => handleOnChange(event.target.value)}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          name={props.name}
          id={props.id}
          style={{
            ['field-sizing']: 'content',
            minHeight: lineHeight
          }}
        />
        {/* {props.isLoading && (
          <TextAreaStyledLoading
            $genre={props.genre}
            $size={props.size}
            size={props.size}
            color={theme.colors.input[props.genre].color.rest}
          />
        )} */}
      </StyledTextAreaWrapper>
      {props?.error ? <ErrorMessage {...props.error} size={props?.error.size ?? props.size} /> : null}
    </>
  )
}
