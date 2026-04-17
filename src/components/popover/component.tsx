import { useTypographyStyles } from '@local/hooks/use-typography-styles';
import { CSS_CLASS, CSS_VARS } from '@local/styles/utils';
import { CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import {
  arrow,
  autoUpdate,
  FloatingArrow,
  FloatingPortal,
  flip,
  offset,
  shift,
  size,
  useFloating,
} from '@floating-ui/react';
import { FC, Ref, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { DEFAULT_ARROW_HEIGHT, DEFAULT_POPOVER_CLOSE_DELAY, DEFAULT_POPOVER_OFFSET } from './component.constants';
import { IPopover, IUsePopover } from './component.types';

const POPOVER_FADE_DURATION_MS = 300;

// Утилита для поиска фокусируемых элементов
const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]',
  ].join(',');

  return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[];
};

// Утилита для поиска следующего/предыдущего фокусируемого элемента в документе
const getNextFocusableElement = (currentElement: HTMLElement, backward = false): HTMLElement | null => {
  const allFocusableElements = getFocusableElements(document.body);
  const currentIndex = allFocusableElements.indexOf(currentElement);

  if (currentIndex === -1) return null;

  if (backward) {
    return currentIndex > 0 ? allFocusableElements[currentIndex - 1] : null;
  } else {
    return currentIndex < allFocusableElements.length - 1 ? allFocusableElements[currentIndex + 1] : null;
  }
};

export const Popover: FC<IPopover> = (props) => {
  const [isVisible, setIsVisible] = useState(props.isOpen);
  const closeAnimationTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (closeAnimationTimeout.current) {
      clearTimeout(closeAnimationTimeout.current);
      closeAnimationTimeout.current = null;
    }

    if (props.isOpen) {
      setIsVisible(true);
      return;
    }

    closeAnimationTimeout.current = setTimeout(() => {
      setIsVisible(false);
      closeAnimationTimeout.current = null;
    }, POPOVER_FADE_DURATION_MS);

    return () => {
      if (closeAnimationTimeout.current) {
        clearTimeout(closeAnimationTimeout.current);
        closeAnimationTimeout.current = null;
      }
    };
  }, [props.isOpen]);

  const { className: classNameTypography, style: styleTypography } = useTypographyStyles({
    sx: { variant: 'callout', ...props?.sxTypography },
  });

  const { className, style } = useMemo(() => {
    const className = setClasses([
      classNameTypography,
      CSS_CLASS.component.popover.root,
      CSS_CLASS.transition.color,
      props.control ? CSS_CLASS.control[props.control] : false,
      !props.isDisabledBoxShadow ? CSS_CLASS.component.popover.boxShadow : false,
      props.className,
    ]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.popover.background] = CSS_VARS.genre.popover[props.genre].background;
    vars[CSS_VARS_RAW.component.popover.color] = CSS_VARS.genre.popover[props.genre].color;
    vars[CSS_VARS_RAW.component.popover.borderColor] = CSS_VARS.genre.popover[props.genre].border;
    if (!props.isDisabledBoxShadow)
      vars[CSS_VARS_RAW.component.popover.boxShadow] = CSS_VARS.genre.popover[props.genre].boxShadow;

    vars[CSS_VARS_RAW.component.popover.maxHeight] = props.maxHeight || '100%';
    vars[CSS_VARS_RAW.component.popover.maxWidth] = props.maxWidth || '100%';
    vars[CSS_VARS_RAW.component.popover.padding] = CSS_VARS.size[props.size].padding;
    vars[CSS_VARS_RAW.component.popover.borderRadius] = CSS_VARS.size[props.size].radius;

    const style = setStyles([styleTypography, Object.keys(vars).length ? vars : undefined, props.style]);

    return { className, style };
  }, [
    props.className,
    props.style,
    props.genre,
    props.maxHeight,
    props.maxWidth,
    props.size,
    classNameTypography,
    styleTypography,
    props.control,
    props.isDisabledBoxShadow,
  ]);

  const staticSide = props.placement
    ? {
        top: {
          size: 'left',
          value: `calc(50% - ${(props.arrowHeight ?? DEFAULT_ARROW_HEIGHT) * 2}px)`,
        },
        right: {
          size: 'top',
          value: `calc(50% - ${props.arrowHeight ?? DEFAULT_ARROW_HEIGHT}px)`,
        },
        bottom: {
          size: 'left',
          value: `calc(50% - ${(props.arrowHeight ?? DEFAULT_ARROW_HEIGHT) * 2}px)`,
        },
        left: {
          size: 'top',
          value: `calc(50% - ${props.arrowHeight ?? DEFAULT_ARROW_HEIGHT}px)`,
        },
      }[props.placement.split('-')[0]]
    : null;

  return (
    <FloatingPortal>
      <div
        ref={props.ref as Ref<HTMLDivElement | null>}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          ...props.floatingStyles,
          // transform: props.floatingStyles.transform,
          zIndex: 9998,
          outline: '0px transparent solid !important',
          border: '0px transparent solid !important',
          pointerEvents: props.isOpen ? 'auto' : 'none',
        }}
      >
        <div
          tabIndex={-1}
          className={className}
          style={{
            ...style,
            transition: 'opacity var(--transition-default)',
            ...(props.isOpen
              ? {
                  opacity: 1,
                  visibility: 'visible',
                }
              : {
                  opacity: 0,
                  visibility: isVisible ? 'visible' : 'hidden',
                }),
          }}
        >
          {props.isArrow && props.context && (
            <FloatingArrow
              width={(props.arrowHeight ?? DEFAULT_ARROW_HEIGHT) * 2}
              height={props.arrowHeight ?? DEFAULT_ARROW_HEIGHT}
              ref={props.refArrow}
              context={props.context}
              fill={CSS_VARS.genre.popover[props.genre].background}
              style={props.isCenteredArrow && staticSide ? { [staticSide.size]: staticSide.value } : {}}
            />
          )}
          {props.children}
        </div>
      </div>
    </FloatingPortal>
  );
};

export const usePopover = (props: IUsePopover) => {
  const { onFocus, onBlur, onBlurReference } = props;

  // const [isPositioned, setIsPositioned] = useState(false);

  // Состояние открытия поповера
  const [isOpen, setIsOpen] = useState(false);
  // Минимальная ширина поповера (нужна, если хотим, чтобы ширина совпадала с референсом)
  // const [minWidth, setMinWidth] = useState<number | undefined>(undefined);
  // Флаг, был ли поповер когда-либо открыт (чтобы onBlur не вызывался при первом рендере)
  const [wasEverOpen, setWasEverOpen] = useState(false);
  // Ссылка на элемент, который был в фокусе до открытия поповера
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const refArrow = useRef(null);

  // Отступ для hover-зоны (чтобы не закрывался мгновенно при небольших движениях мыши)
  const hoverOffset = useMemo(
    () => (props.hoverOffset ?? props.offset ?? DEFAULT_POPOVER_OFFSET) + (props.arrowHeight ?? 0),
    [props.hoverOffset, props.offset, props.arrowHeight],
  );

  const defaultOffset = useMemo(
    () => (props.offset ?? DEFAULT_POPOVER_OFFSET) + (props.arrowHeight ?? 0),
    [props.offset, props.arrowHeight],
  );

  // Позиционирование через floating-ui
  const {
    floatingStyles,
    context,
    update,
    refs,
    placement: actualPlacement,
  } = useFloating({
    open: isOpen,
    placement: props.placement,

    middleware: [
      offset(defaultOffset),
      flip(),
      shift(),
      props.isArrow
        ? arrow({
            element: refArrow,
          })
        : false,
      props.isWidthAsContent
        ? size({
            apply({ rects, elements }) {
              Object.assign(elements.floating.style, {
                minWidth: `min(${rects.reference.width}px, 100dvw)`,
                maxWidth: `min(${rects.reference.width}px, 100dvw)`,
              });
            },
          })
        : false,
    ],
  });

  // Сохраняем обработчик клика вне поповера (чтобы можно было удалить при cleanup)
  const clickOutsideHandler = useRef<((e: MouseEvent) => void) | null>(null);
  // Таймаут для закрытия при hover-режиме
  const hoverCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    // const test = autoUpdate(refs.reference.current, refs.floating.current, () => {
    //   computePosition(refs.reference.current, refs.floating.current, {
    //     placement:props.placement,
    //     middleware: [arrow({ element: refArrow.current })]
    //   }).then(({ x, y }) => {
    //     Object.assign(refs.floating.style, {
    //       left: `${x}px`,
    //       top: `${y}px`
    //     });
    //   });
    // });
    return cleanup;
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
  // useEffect(() => {
  //   if (!props.isWidthAsContent || !refs.reference.current) return;

  //   const el = refs.reference.current;

  //   const observer = new ResizeObserver(([entry]) => {
  //     const width = entry.contentRect.width;
  //     if (width > 0) setMinWidth(width);
  //   });

  //   observer.observe(el as Element);

  //   // Синхронный fallback на случай если размер уже есть
  //   const rect = el.getBoundingClientRect();
  //   if (rect.width > 0) setMinWidth(rect.width);

  //   return () => observer.disconnect();
  // }, [props.isWidthAsContent, refs.reference]);

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
          if (ref && 'current' in ref && ref.current && ref.current instanceof HTMLElement) {
            return ref.current.contains(e.relatedTarget as Node);
          }
          return false;
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
   * Focus trap - управление фокусом внутри поповера
   */
  useEffect(() => {
    if (!props.isFocusTrap) return;
    if (!isOpen || !refs.floating.current) return;

    const floatingEl = refs.floating.current as HTMLElement;
    const refEl = refs.reference.current as HTMLElement;

    // Сохраняем текущий активный элемент
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Фокусируем первый доступный элемент в поповере
    const focusFirstInPopover = () => {
      const elements = getFocusableElements(floatingEl);
      if (elements.length > 0) {
        elements[0].focus();
        return true;
      }
      return false;
    };

    let mutationObserver: MutationObserver | null = null;
    const hasFocusedInitial = focusFirstInPopover();

    if (!hasFocusedInitial) {
      mutationObserver = new MutationObserver(() => {
        if (focusFirstInPopover()) {
          mutationObserver?.disconnect();
          mutationObserver = null;
        }
      });

      mutationObserver.observe(floatingEl, { childList: true, subtree: true });
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = getFocusableElements(floatingEl);
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab - переход назад
        if (document.activeElement === firstElement) {
          // Если это первый элемент в поповере, ищем предыдущий элемент в форме
          e.preventDefault();
          const prevElement = getNextFocusableElement(refEl, true);
          if (prevElement) {
            prevElement.focus();
          }
          return;
        }
        return;
      }

      // Tab - переход вперед
      if (document.activeElement === lastElement) {
        // Если это последний элемент в поповере, ищем следующий элемент в форме
        e.preventDefault();
        const nextElement = getNextFocusableElement(refEl, false);
        if (nextElement) {
          nextElement.focus();
        }
        return;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
      document.removeEventListener('keydown', handleKeyDown);
      // Возвращаем фокус на предыдущий элемент при закрытии
      // if (previousActiveElement.current) {
      //   previousActiveElement.current.focus();
      // }
    };
  }, [isOpen, refs.floating, refs.reference.current, props.isFocusTrap]);

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
    refArrow,
    context,
    floatingStyles,
    placement: actualPlacement,
  };
};
