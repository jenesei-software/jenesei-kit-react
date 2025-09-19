import { KEY_SIZE_DATA } from '@local/theme';

import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react';
import { AnimatePresence } from 'framer-motion';
import { FC, Ref, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { DEFAULT_POPOVER_CLOSE_DELAY, DEFAULT_POPOVER_OFFSET, PopoverProps, PopoverWrapper, UsePopoverProps } from '.';

export const Popover: FC<PopoverProps> = (props) => {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {props.isOpen && (
        <div
          tabIndex={-1}
          ref={props.ref as Ref<HTMLDivElement | null>}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            ...props.floatingStyles,
            transform: props.floatingStyles.transform,
            zIndex: 9999,
          }}
        >
          <PopoverWrapper
            tabIndex={-1}
            $isShowAlwaysOutline={props.isShowAlwaysOutline}
            $genre={props.genre ?? 'black'}
            $font={{
              ...props.font,
              size: props.font?.size ?? KEY_SIZE_DATA[props.size ?? 'medium'].font,
              weight: props.font?.weight ?? 700,
            }}
            className={props.className}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            $sx={props.sx}
            $size={props.size}
            $sxTypography={props.sxTypography}
            $maxHeight={props.maxHeight}
            $maxWidth={props.maxWidth}
          >
            {props.children}
          </PopoverWrapper>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export const usePopover = (props: UsePopoverProps) => {
  const { onFocus, onBlur, onBlurReference } = props;

  // Состояние открытия поповера
  const [isOpen, setIsOpen] = useState(false);
  // Минимальная ширина поповера (нужна, если хотим, чтобы ширина совпадала с референсом)
  const [minWidth, setMinWidth] = useState<number | undefined>(undefined);
  // Флаг, был ли поповер когда-либо открыт (чтобы onBlur не вызывался при первом рендере)
  const [wasEverOpen, setWasEverOpen] = useState(false);

  // Позиционирование через floating-ui
  const {
    refs,
    floatingStyles,
    update,
    placement: actualPlacement,
  } = useFloating({
    open: isOpen,
    placement: props.placement,
    middleware: [offset(props.offset ?? 8), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  // Сохраняем обработчик клика вне поповера (чтобы можно было удалить при cleanup)
  const clickOutsideHandler = useRef<((e: MouseEvent) => void) | null>(null);
  // Таймаут для закрытия при hover-режиме
  const hoverCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Отступ для hover-зоны (чтобы не закрывался мгновенно при небольших движениях мыши)
  const hoverOffset = useMemo(
    () => props.hoverOffset ?? props.offset ?? DEFAULT_POPOVER_OFFSET,
    [props.hoverOffset, props.offset],
  );
  // Задержка перед закрытием при hover
  const hoverCloseDelay = useMemo(() => props.hoverCloseDelay ?? DEFAULT_POPOVER_CLOSE_DELAY, [props.hoverCloseDelay]);

  /**
   * Навешиваем обработчики на reference-элемент в зависимости от режима:
   * - click / clickOpen → открытие/переключение по клику
   * - hover → открытие/закрытие при наведении
   */
  useEffect(() => {
    if (props.isDisabled) return;
    const refEl = refs.reference.current;
    if (!refEl) return;

    // Режим клика
    if ((props.mode === 'click' || props.mode === 'clickOpen') && refEl instanceof HTMLElement) {
      const handleClick = () => {
        if (props.mode === 'click') {
          setIsOpen((prev) => !prev);
        } else if (props.mode === 'clickOpen') {
          setIsOpen(true);
        }
      };

      refEl.addEventListener('click', handleClick);
      return () => {
        refEl.removeEventListener('click', handleClick);
      };

      // Режим ховера
    } else if (props.mode === 'hover' && refEl instanceof HTMLElement) {
      const handleMouseEnter = () => {
        setIsOpen(true);
      };
      const handleMouseLeave = () => {
        if (hoverCloseTimeout.current) clearTimeout(hoverCloseTimeout.current);
        hoverCloseTimeout.current = setTimeout(() => setIsOpen(false), hoverCloseDelay);
      };

      refEl.addEventListener('mouseenter', handleMouseEnter);
      refEl.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        refEl.removeEventListener('mouseenter', handleMouseEnter);
        refEl.removeEventListener('mouseleave', handleMouseLeave);
        if (hoverCloseTimeout.current) clearTimeout(hoverCloseTimeout.current);
      };
    }
  }, [props.mode, refs.reference, hoverCloseDelay, props.isDisabled]);

  // Автоматическое обновление позиции, пока поповер открыт
  useEffect(() => {
    if (!isOpen || !refs.reference.current || !refs.floating.current || props.isDisabled) return;

    const cleanup = autoUpdate(refs.reference.current, refs.floating.current, update);

    return () => cleanup();
  }, [isOpen, refs.reference, refs.floating, update, props.isDisabled]);

  /**
   * Логика закрытия поповера при клике вне него
   */
  useEffect(() => {
    if (!isOpen || !refs.reference.current || !refs.floating.current || props.isDisabled) return;

    if (props.isClickOutside) {
      clickOutsideHandler.current = (e: MouseEvent) => {
        const refEl = refs.reference.current;
        const floatingEl = refs.floating.current;
        const otherRefs = props.refsExcludeClickOutside || [];

        // Проверяем, что клик не по поповеру, не по reference и не по исключенным ref'ам
        if (
          refEl instanceof HTMLElement &&
          floatingEl instanceof HTMLElement &&
          !refEl.contains(e.target as Node) &&
          !floatingEl.contains(e.target as Node) &&
          !otherRefs.some((ref) => {
            if (typeof ref === 'object' && ref !== null && 'current' in ref) {
              return (ref.current as HTMLElement | null)?.contains(e.target as Node);
            }
            return false;
          })
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', clickOutsideHandler.current);
    }

    return () => {
      if (clickOutsideHandler.current) {
        document.removeEventListener('mousedown', clickOutsideHandler.current);
        clickOutsideHandler.current = null;
      }
      if (hoverCloseTimeout.current) {
        clearTimeout(hoverCloseTimeout.current);
      }
    };
  }, [isOpen, refs.reference, refs.floating, props.isClickOutside, props.isDisabled, props.refsExcludeClickOutside]);

  /**
   * Поддержка режима "плавающего hover"
   * Закрывает поповер, если мышь ушла за пределы reference+floating с отступом
   */
  useEffect(() => {
    if (!isOpen || !props.isFloatingHover || !refs.reference.current || !refs.floating.current || props.isDisabled)
      return;

    const refEl = refs.reference.current;
    const floatingEl = refs.floating.current;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const refRect = refEl.getBoundingClientRect();
      const floatingRect = floatingEl.getBoundingClientRect();

      // Находим, внутри ли курсор reference или floating с учётом отступа
      const isInsideRef =
        mouseX >= refRect.left - hoverOffset &&
        mouseX <= refRect.right + hoverOffset &&
        mouseY >= refRect.top - hoverOffset &&
        mouseY <= refRect.bottom + hoverOffset;

      const isInsideFloating =
        mouseX >= floatingRect.left - hoverOffset &&
        mouseX <= floatingRect.right + hoverOffset &&
        mouseY >= floatingRect.top - hoverOffset &&
        mouseY <= floatingRect.bottom + hoverOffset;

      if (isInsideRef || isInsideFloating) {
        // Если вернулись внутрь — отменяем закрытие
        if (hoverCloseTimeout.current) {
          clearTimeout(hoverCloseTimeout.current);
          hoverCloseTimeout.current = null;
        }
      } else {
        // Если вышли — запускаем таймер на закрытие
        if (hoverCloseTimeout.current) clearTimeout(hoverCloseTimeout.current);
        hoverCloseTimeout.current = setTimeout(() => setIsOpen(false), hoverCloseDelay);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (hoverCloseTimeout.current) {
        clearTimeout(hoverCloseTimeout.current);
      }
    };
  }, [isOpen, props.isFloatingHover, refs.reference, refs.floating, hoverOffset, hoverCloseDelay, props.isDisabled]);

  /**
   * Устанавливаем минимальную ширину поповера, равную reference (если включено isWidthAsContent)
   */
  useLayoutEffect(() => {
    if (!props.isWidthAsContent || !refs.reference.current) return;
    const rect = refs.reference.current.getBoundingClientRect();
    setMinWidth(rect.width);
  }, [props.isWidthAsContent, refs.reference]);

  // Методы управления открытием
  const open = useCallback(() => {
    if (props.isDisabled) return;
    setIsOpen(true);
  }, [props.isDisabled]);
  const close = useCallback(() => {
    if (props.isDisabled) return;
    setIsOpen(false);
  }, [props.isDisabled]);
  const toggle = useCallback(() => {
    if (props.isDisabled) return;
    setIsOpen((prev) => !prev);
  }, [props.isDisabled]);

  // Объединяем стили floating-ui с дополнительными ограничениями по ширине
  const combinedStyles = useMemo(() => {
    return {
      ...floatingStyles,
      minWidth: props.isWidthAsContent && minWidth ? `${minWidth}px` : undefined,
      maxWidth: props.isWidthAsContent && minWidth ? `${minWidth}px` : undefined,
    };
  }, [floatingStyles, props.isWidthAsContent, minWidth]);

  /**
   * Вызываем onFocus при открытии
   * и запоминаем, что поповер хоть раз был открыт
   */
  useEffect(() => {
    if (isOpen) {
      onFocus?.();
      setWasEverOpen(true);
    }
  }, [isOpen, onFocus]);

  /**
   * Вызываем onBlur при первом закрытии после открытия
   */
  useEffect(() => {
    if (!isOpen && wasEverOpen) {
      onBlur?.();
    }
  }, [isOpen, wasEverOpen, onBlur]);

  /**
   * Закрытие при потере фокуса (focusin вне поповера + reference)
   * (но не на исключённые элементы)
   */
  useEffect(() => {
    if (!isOpen || props.isDisabled) return;

    const handleFocusIn = (e: FocusEvent) => {
      const refEl = refs.reference.current;
      const floatingEl = refs.floating.current;
      const otherRefs = props.refsExcludeClickOutside || [];

      const isInside =
        (refEl instanceof HTMLElement && refEl.contains(e.target as Node)) ||
        (floatingEl instanceof HTMLElement && floatingEl.contains(e.target as Node)) ||
        otherRefs.some((ref) => {
          if (ref && 'current' in ref && ref.current && ref.current instanceof HTMLElement) {
            return ref.current.contains(e.target as Node);
          }
          return false;
        });

      if (!isInside) {
        setIsOpen(false);
      }
    };

    document.addEventListener('focusin', handleFocusIn);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, [isOpen, refs.reference, refs.floating, props.refsExcludeClickOutside, props.isDisabled]);

  /**
   * Вызываем onBlurReference, если фокус ушёл с reference-элемента
   * (но не на исключённые элементы)
   */
  useEffect(() => {
    if (!refs.reference.current || props.isDisabled || !onBlurReference) return;

    const refEl = refs.reference.current;
    const otherRefs = props.refsExcludeBlur || [];

    const handleBlur = (e: FocusEvent) => {
      if (
        refEl instanceof HTMLElement &&
        !refEl.contains(e.relatedTarget as Node) &&
        !otherRefs.some((ref) => {
          if (ref && 'current' in ref && ref.current && ref.current instanceof HTMLElement)
            return ref.current.contains(e.relatedTarget as Node);
        })
      ) {
        onBlurReference();
      }
    };

    if (refEl instanceof HTMLElement) refEl.addEventListener('blur', handleBlur, true);

    return () => {
      if (refEl instanceof HTMLElement) refEl.removeEventListener('blur', handleBlur, true);
    };
  }, [refs.reference, props.isDisabled, onBlurReference, props.refsExcludeBlur]);

  /**
   * Функция возвращает true или false в зависимости от состояния от FocusEvent который находится внутри или снаружи
   */
  const getIsInside = useCallback(
    (target: Node | null) => {
      if (!target) return false; // если relatedTarget null, значит фокус ушёл вне окна — закрываем

      const refEl = refs.reference.current;
      const floatingEl = refs.floating.current;
      const otherRefs = props.refsExcludeBlur || [];

      return (
        (refEl instanceof HTMLElement && refEl.contains(target)) ||
        (floatingEl instanceof HTMLElement && floatingEl.contains(target)) ||
        otherRefs.some((ref) => {
          if (ref && 'current' in ref && ref.current && ref.current instanceof HTMLElement) {
            return ref.current.contains(target);
          }
          return false;
        })
      );
    },
    [refs.reference, refs.floating, props.refsExcludeBlur],
  );
  // Возвращаем наружу API для использования поповера
  return {
    getIsInside,
    isOpen,
    setIsOpen,
    open,
    close,
    toggle,
    refReference: refs.setReference as Ref<HTMLElement | null>,
    refFloating: refs.setFloating as Ref<HTMLElement | null>,
    floatingStyles: combinedStyles,
    placement: actualPlacement,
  };
};
