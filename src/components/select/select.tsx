import { VirtualItem, useVirtualizer } from '@tanstack/react-virtual'
import gsap from 'gsap'
import { memo, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

import { Button } from '@components/button'
import { Checkbox, CheckboxProps } from '@components/checkbox'
import { InputProps } from '@components/input'
import { Tooltip } from '@components/tooltip'
import { Typography } from '@components/typography'

import {
  KEY_SIZE_DATA,
  TJeneseiThemeGenreInput,
  TJeneseiThemeSize,
} from '@theme/index'

import {
  DropdownErase,
  DropdownFooter,
  DropdownList,
  DropdownListParent,
  DropdownOption,
  DropdownSelectAll,
  ISelectItem,
  SelectItemProps,
  SelectProps,
  SelectStyledInput,
  SelectWrapper,
} from '.'

const DEFAULT_MAX_VIEW = 5
const DEFAULT_MIN_VIEW = 5
const DEFAULT_OVERSCAN = 1

export const Select = <T extends ISelectItem>(props: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isAll, setIsAll] = useState(
    props?.footer?.selectAll?.defaultValue ?? false,
  )
  const listRef = useRef<HTMLUListElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const parentListRef = useRef<HTMLDivElement>(null)

  const theme = useTheme()

  const maxViewLength = useMemo(
    () => props.maxView ?? DEFAULT_MAX_VIEW,
    [props.maxView],
  )
  const minViewLength = useMemo(
    () => props.minView ?? DEFAULT_MIN_VIEW,
    [props.minView],
  )
  const optionsLength = useMemo(
    () => props.option.length,
    [props.option.length],
  )
  const isFooter: boolean = useMemo(() => !!props?.footer, [props.footer])
  const isErase: boolean = useMemo(() => !!props?.footer?.erase, [props.footer])
  const isSelectAll: boolean = useMemo(
    () => !!props?.footer?.selectAll,
    [props.footer],
  )
  const sizeHeight = useMemo(
    () => KEY_SIZE_DATA[props.size].height,
    [props.size],
  )
  const height = useMemo(
    () =>
      sizeHeight *
        (optionsLength < maxViewLength ? minViewLength : maxViewLength) +
      (isFooter ? sizeHeight : 0),
    [sizeHeight, optionsLength, maxViewLength, minViewLength, isFooter],
  )
  const radius = useMemo(() => KEY_SIZE_DATA[props.size].radius, [props.size])

  const isSelectedItem = useCallback(
    (option: T): boolean => {
      return isAll || (props.value ?? []).includes(option)
    },
    [isAll, props.value],
  )

  const handleEraseOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      event.stopPropagation()
      props.footer?.erase?.onCLick
        ? props.footer?.erase?.onCLick()
        : props.onChange([])
      setIsAll(false)
    },
    [props],
  )

  const handleSelectAllOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      event.stopPropagation()
      if (props.inputProps.value !== '') {
        return props.onChange(props.option)
      }
      if (isAll) {
        setIsAll(false)
        props.onChange(props.option)
      } else {
        if (props.footer?.selectAll?.onCLick) {
          props.footer?.selectAll?.onCLick()
        } else {
          setIsAll(true)
        }
      }
    },
    [isAll, props],
  )

  const handleOptionOnClick = useCallback(
    (option: T) => {
      if (isAll) {
        const index = props.option.findIndex(
          (selectedItems) => selectedItems.value === option.value,
        )
        const newValue = [
          ...props.option.slice(0, index),
          ...props.option.slice(index + 1),
        ]
        props.onChange(newValue)
      } else {
        const index = props.value.findIndex(
          (selectedItems) => selectedItems.value === option.value,
        )

        if (
          index === -1 &&
          (!props.maxView || props.value.length < props.maxView)
        ) {
          const newValues = [...(props.value ?? []), option]
          props.onChange(newValues)

          if (newValues.length == props.option.length) {
            return setIsAll(true)
          }
        } else if (index !== -1) {
          const newValue = [
            ...props.value.slice(0, index),
            ...props.value.slice(index + 1),
          ]
          props.onChange(newValue)
        }
      }
      return setIsAll(false)
    },
    [isAll, props],
  )

  const handleListOptionOpenEffect = useCallback(() => {
    const list = listRef.current
    if (!list) return

    setIsAnimating(false)
    setIsOpen(true)
  }, [])

  const handleListOptionCloseEffect = useCallback(() => {
    const list = listRef.current
    if (!list) return

    gsap.to(inputRef.current, {
      duration: 0.1,
      borderBottomLeftRadius: `${radius}px`,
      borderBottomRightRadius: `${radius}px`,
    })
    gsap.to(parentListRef.current, {
      height: '0px',
      display: 'none',
      duration: 0.1,
      ease: 'power2.out',
      onComplete: () => {
        setIsAnimating(false)
        setIsOpen(false)
      },
    })
  }, [radius])

  const handleOnFocus = useCallback(() => {
    if (isAnimating) return
    if (isOpen) return

    setIsAnimating(true)

    gsap.to(inputRef.current, {
      duration: 0.1,
      borderBottomLeftRadius: `0px`,
      borderBottomRightRadius: `0px`,
      onComplete: () => {
        gsap.to(parentListRef.current, {
          height: `${height}px`,
          display: 'flex',
          duration: 0.1,
          onComplete: () => {
            handleListOptionOpenEffect()
          },
        })
      },
    })
  }, [
    handleListOptionOpenEffect,
    height,
    isAnimating,
    isOpen,
    theme.colors.focus,
  ])

  const handleOnBlur = useCallback(() => {
    if (isAnimating) return
    if (!isOpen) return

    setIsAnimating(true)

    gsap.to(parentListRef.current, {
      duration: 0.2,
      onComplete: () => {
        handleListOptionCloseEffect()
      },
    })
  }, [handleListOptionCloseEffect, isAnimating, isOpen])

  const handleMouseDown = useCallback((event: MouseEvent) => {
    if (
      parentListRef.current &&
      parentListRef.current.contains(event.target as Node)
    ) {
      event.preventDefault()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [handleMouseDown])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        parentListRef.current &&
        inputRef.current &&
        !parentListRef.current.contains(event.target as Node) &&
        !inputRef.current.contains(event.target as Node)
      ) {
        handleOnBlur()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleOnBlur])

  useEffect(() => {
    if (isOpen) {
      handleListOptionOpenEffect()
    }
  }, [handleListOptionOpenEffect, isOpen, props.option])

  const listVirtualizer = useVirtualizer({
    count: optionsLength,
    estimateSize: props.getEstimateSize
      ? props.getEstimateSize
      : () => sizeHeight,
    getScrollElement: () => parentListRef.current,
    overscan: DEFAULT_OVERSCAN,
    paddingEnd: isFooter ? sizeHeight : 0,
  })

  const handleFetchNextPage = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement
        if (
          scrollHeight - scrollTop - clientHeight < height &&
          !props.isFetching &&
          props.fetchNextPage
        ) {
          props.fetchNextPage()
        }
      }
    },
    [height, props],
  )

  return (
    <SelectWrapper
      tabIndex={0}
      $genre={props.genre}
      $radius={radius}
      $width={props.width ?? props.inputProps.width}
      $parentListHeight={height}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      <SelectStyledInput
        $isError={props.inputProps.isError}
        $isLoading={props.inputProps.isLoading}
        $postfixChildren={props.inputProps?.postfixChildren}
        $prefixChildren={props.inputProps?.prefixChildren}
        $genre={props.genre ?? props.inputProps.genre}
        $size={props.size}
        $isBold={props.inputProps.isBold}
        disabled={props.inputProps.isDisabled}
        readOnly={props.inputProps.isReadOnly}
        required={props.inputProps.isRequired}
        defaultValue={props.inputProps.defaultValue}
        value={props.inputProps.value ?? ''}
        placeholder={props.inputProps.placeholder}
        type={props.inputProps.type}
        onChange={(event) =>
          props.inputProps.onChange &&
          props.inputProps.onChange(event.target.value)
        }
        onBlur={props.inputProps.onBlur}
        onFocus={props.inputProps.onFocus}
        onClick={handleOnFocus}
        ref={inputRef}
      />
      <DropdownListParent
        ref={parentListRef}
        $genre={props.genre}
        $isShowScroll={optionsLength > maxViewLength}
        $isFooter={isFooter}
        $size={props.size}
        onScroll={(e) => handleFetchNextPage(e.target as HTMLDivElement)}
      >
        <DropdownList
          ref={listRef}
          style={{
            height: `${listVirtualizer.getTotalSize()}px`,
            minHeight: `${height}px`,
          }}
        >
          {listVirtualizer.getVirtualItems().map((virtualRow) => {
            const item = props.option[virtualRow.index]
            const checked = isSelectedItem(item)
            const MemoizedDropdownOption = memo(
              (params: {
                optionProps: InputProps
                genre: keyof TJeneseiThemeGenreInput
                size: TJeneseiThemeSize
                checkboxProps: CheckboxProps
                item: T
                checked: boolean
                virtualRow: VirtualItem<Element>
                optionItemClamp: number
              }) => (
                <DropdownOption
                  onClick={() => handleOptionOnClick(params.item)}
                  $isSelectedItem={params.checked}
                  $isCheckboxProps={!!params.checkboxProps}
                  $isError={params.optionProps.isError}
                  $isLoading={params.optionProps.isLoading}
                  $isCustomIcon={params.optionProps.isCustomIcon}
                  $postfixChildren={params.optionProps?.postfixChildren}
                  $prefixChildren={params.optionProps?.prefixChildren}
                  $genre={params.genre ?? params.optionProps.genre}
                  $size={params.size}
                  $isBold={params.optionProps.isBold}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${params.virtualRow.size}px`,
                    transform: `translateY(${params.virtualRow.start}px)`,
                  }}
                >
                  {!!params.checkboxProps && (
                    <Checkbox
                      {...params.checkboxProps}
                      checked={params.checked}
                    />
                  )}
                  <SelectItem
                    label={params.item.label}
                    optionItemClamp={params.optionItemClamp}
                  />
                </DropdownOption>
              ),
            )
            return (
              <MemoizedDropdownOption
                key={virtualRow.index}
                optionProps={props.optionProps}
                genre={props.genre}
                size={props.size}
                checkboxProps={props.checkboxProps}
                item={item}
                checked={checked}
                virtualRow={virtualRow}
                optionItemClamp={props.optionItemClamp}
              />
            )
          })}
          {isFooter && (
            <DropdownFooter
              $isErase={isErase}
              $isSelectAll={isSelectAll}
              $genre={props.genre}
              $size={props.size}
            >
              {props.footer!.selectAll && (
                <DropdownSelectAll>
                  <Button
                    isFullSize
                    genre={props.genre}
                    onClick={handleSelectAllOnClick}
                    size={'medium'}
                    isHiddenBorder
                  >
                    {props.footer!.selectAll.label}
                  </Button>
                </DropdownSelectAll>
              )}
              {props.footer!.erase && (
                <DropdownErase>
                  <Button
                    isFullSize
                    genre={props.genre}
                    onClick={handleEraseOnClick}
                    size={'medium'}
                    isHiddenBorder
                  >
                    {props.footer!.erase.label}
                  </Button>
                </DropdownErase>
              )}
            </DropdownFooter>
          )}
        </DropdownList>
      </DropdownListParent>
    </SelectWrapper>
  )
}

export const SelectItem = (
  props:{label: ReactNode,optionItemClamp:number },
) => {
  const [isOverflowing, setIsOverflowing] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        setIsOverflowing(
          contentRef.current.scrollHeight > contentRef.current.clientHeight,
        )
      }
    }
    checkOverflow()
    window.addEventListener('resize', checkOverflow)
    return () => window.removeEventListener('resize', checkOverflow)
  }, [props.label])

  return (
    <Tooltip
      isDisabled={!isOverflowing}
      placement="bottom"
      content={props.label}
    >
      <Typography
        ref={contentRef}
        clamp={props.optionItemClamp ?? 1}
        clampOrient="vertical"
        textWrap="wrap"
      >
        {props.label}
      </Typography>
    </Tooltip>
  )
}
