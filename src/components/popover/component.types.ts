import { addErrorPropsDollar } from '@local/components/error';
import { addSXProps, addSXPropsDollar, addSXTypographyProps, addSXTypographyPropsDollar } from '@local/styles/add';
import { ITheme, IThemeSize } from '@local/styles/theme';
import { AddDollarSign } from '@local/types';

import { Placement } from '@floating-ui/react';
import { CSSProperties, PropsWithChildren, Ref } from 'react';

/**
 * Props for the Popover component. / Свойства компонента Popover.
 */
export type PopoverProps = PropsWithChildren & {
  /**
   * Additional class name for the popover root element.
   * Дополнительный CSS-класс для корневого элемента поповера.
   */
  className?: string;
  /**
   * Maximum width of the popover (CSS value, e.g. '300px' or '100%').
   * Максимальная ширина поповера (CSS-значение, например, '300px' или '100%').
   */
  maxWidth?: string;
  /**
   * Maximum height of the popover (CSS value, e.g. '400px' or '100%').
   * Максимальная высота поповера (CSS-значение, например, '400px' или '100%').
   */
  maxHeight?: string;
  /**
   * Controls whether the popover is open (visible).
   * Управляет открытием поповера (видимостью).
   */
  isOpen: boolean;
  /**
   * If true, always show the outline (for accessibility/debug).
   * Если true — всегда показывать обводку (для доступности/отладки).
   */
  isShowAlwaysOutline?: boolean;
  /**
   * Styles for the floating popover element (from floating-ui).
   * Стили для плавающего элемента поповера (от floating-ui).
   */
  floatingStyles: CSSProperties;
  /**
   * Callback fired when the popover should close (e.g. click outside).
   * Колбэк, вызываемый при необходимости закрыть поповер (например, при клике вне).
   */
  onClose?: () => void;
  /**
   * Ref to the popover root element.
   * Ref на корневой элемент поповера.
   */
  ref?: Ref<HTMLElement | null>;
  /**
   * Size of the popover (affects padding, font, etc.).
   * Размер поповера (влияет на отступы, шрифт и т.д.).
   */
  size?: IThemeSize;
  /**
   * Visual genre/style of the popover (e.g. 'black', 'primary').
   * Визуальный стиль поповера (например, 'black', 'primary').
   */
  genre?: keyof ITheme['colors']['button'];
} & addSXProps &
  addSXTypographyProps;

export type StyledPopoverProps = AddDollarSign<
  Pick<PopoverProps, 'maxWidth' | 'maxHeight' | 'size' | 'isShowAlwaysOutline'> & Required<Pick<PopoverProps, 'genre'>>
> &
  addSXPropsDollar &
  addErrorPropsDollar &
  addSXTypographyPropsDollar;

/**
 * Props for the usePopover hook (popover logic and behavior).
 * Свойства для хука usePopover (логика и поведение поповера).
 */
export type UsePopoverProps = {
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
