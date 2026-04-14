import { IThemeSize } from '@local/styles/utils';
import { IThemeControl, IThemeGenrePopover, ITypography } from '@local/styles/utils/types';

import { FloatingContext, Placement } from '@floating-ui/react';
import { CSSProperties, PropsWithChildren, Ref, RefObject } from 'react';

/**
 * Props for the Popover component. / Свойства компонента Popover.
 */
export type IPopover = PropsWithChildren & {
  className?: string;
  style?: CSSProperties;
  maxWidth?: string;
  maxHeight?: string;
  isOpen: boolean;
  isArrow?: boolean;
  floatingStyles: CSSProperties;
  onClose?: () => void;
  control?: IThemeControl;
  sxTypography?: ITypography;
  placement?: Placement;
  arrowHeight?: number;
  isCenteredArrow?: boolean;
  /**
   * Ref to the popover root element.
   */
  ref?: Ref<HTMLElement | null>;
  refArrow?: RefObject<null>;
  size: IThemeSize;
  genre: IThemeGenrePopover;
  context?: FloatingContext;
  isDisabledBoxShadow?: boolean;
};

/**
 * Props for the usePopover hook (popover logic and behavior).
 * Свойства для хука usePopover (логика и поведение поповера).
 */
export type IUsePopover = {
  /**
   * Поддержка фокуса внутри поповера (если true, фокус будет удерживаться внутри поповера).
   */
  isFocusTrap?: boolean;
  /**
   * Delay in ms before closing popover on hover out (default: 100).
   * Задержка в мс перед закрытием поповера при уходе мыши (по умолчанию: 100).
   */
  hoverCloseDelay?: number;

  /**
   * Offset in px for hover zone around popover (default: 8).
   * Отступ в пикселях для hover-зоны вокруг поповера (по умолчанию: 8).
   */
  hoverOffset?: number;

  /**
   * If true, popover closes when clicking outside.
   * Если true — поповер закрывается при клике вне его.
   */
  isClickOutside?: boolean;

  /**
   * If true, disables all popover logic and interaction.
   * Если true — отключает всю логику и взаимодействие поповера.
   */
  isDisabled?: boolean;

  /**
   * If true, enables floating hover mode (popover stays open while mouse is near).
   * Если true — включает режим плавающего hover (поповер открыт, пока мышь рядом).
   */
  isFloatingHover?: boolean;

  /**
   * If true, popover width matches reference element.
   * Если true — ширина поповера совпадает с reference-элементом.
   */
  isWidthAsContent?: boolean;

  isArrow?: boolean;

  arrowHeight?: number;
  /**
   * Popover open/close mode: 'click', 'hover', 'clickOpen', or 'independence'.
   * Режим открытия/закрытия поповера: 'click', 'hover', 'clickOpen', 'independence'.
   */
  mode?: 'click' | 'hover' | 'clickOpen' | 'independence';

  /**
   * Offset in px between reference and popover (default: 8).
   * Отступ в пикселях между reference и поповером (по умолчанию: 8).
   */
  offset?: number;

  /**
   * Placement of the popover relative to reference (from floating-ui).
   * Положение поповера относительно reference (из floating-ui).
   */
  placement: Placement;

  /**
   * Refs to elements that should not trigger click outside close.
   * Массив ref'ов, которые не должны вызывать закрытие при клике вне.
   */
  refsExcludeClickOutside?: Ref<HTMLElement | null>[];
  /**
   * Refs to elements that should not trigger blur close.
   * Массив ref'ов, которые не должны вызывать закрытие при потере фокуса.
   */
  refsExcludeBlur?: Ref<HTMLElement | null>[];

  /**
   * Callback fired when popover is focused/opened.
   * Колбэк, вызываемый при открытии/фокусе поповера.
   */
  onFocus?: () => void;
  /**
   * Callback fired when popover is blurred/closed.
   * Колбэк, вызываемый при закрытии/потере фокуса поповера.
   */
  onBlur?: () => void;
  /**
   * Callback fired when reference element loses focus (not to excluded refs).
   * Колбэк, вызываемый при потере фокуса reference-элемента (не на исключённые ref'ы).
   */
  onBlurReference?: () => void;
};
