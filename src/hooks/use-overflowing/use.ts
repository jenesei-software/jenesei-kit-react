import { useDeepCompareMemoize } from '@local/hooks/use-deep-compare-memoize';

import { RefObject, useEffect, useMemo, useRef, useState } from 'react';

import { useTooltipProps } from './use.types';

/**
 * Хук для отслеживания переполнения содержимого в элементе (или его родителе).
 * Возвращает ref для привязки к DOM-элементу, флаг переполнения и флаг isDisabled.
 * @param props - опциональные параметры для управления поведением проверки переполнения
 */
export function useOverflowing<T extends HTMLElement>(
  props?: useTooltipProps,
): {
  isDisabled: boolean; // true, если нет переполнения
  isOverflowing: boolean; // true, если содержимое выходит за пределы контейнера
  ref: RefObject<HTMLElement | null>; // ref для отслеживания DOM-элемента
} {
  // Нужно ли проверять размеры (по умолчанию true)
  const isCheckSize = useMemo(() => props?.isCheckSize ?? true, [props?.isCheckSize]);
  // Проверять ли переполнение относительно родителя (mode === 'parent')
  const isParentMode = useMemo(() => props?.mode === 'parent', [props?.mode]);

  // Состояние переполнения (может быть принудительно задано через props)
  const [isOverflowing, setIsOverflowing] = useState(props?.isOverflowing !== undefined ? props?.isOverflowing : false);
  // ref для отслеживания элемента
  const ref = useRef<T | null>(null);
  // Мемоизированные зависимости для эффекта (глубокое сравнение)
  const dependencies = useDeepCompareMemoize(props?.dependencies);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // Если не нужно проверять размеры — выходим
    if (!isCheckSize) return;

    // Функция проверки переполнения
    const checkOverflow = () => {
      const el = ref.current;
      if (!el) return;

      // Получаем размеры содержимого и контейнера
      const scrollWidth = el.scrollWidth;
      const scrollHeight = el.scrollHeight;

      // Если parentMode — сравниваем с родителем, иначе с самим элементом
      const clientWidth = isParentMode && el.parentElement ? el.parentElement.clientWidth : el.clientWidth;
      const clientHeight = isParentMode && el.parentElement ? el.parentElement.clientHeight : el.clientHeight;

      // Считаем переполнение по ширине или высоте
      setIsOverflowing(scrollWidth > clientWidth || scrollHeight > clientHeight);
    };

    // Проверяем при монтировании и при изменении зависимостей
    checkOverflow();
    // Проверяем при изменении размера окна
    window.addEventListener('resize', checkOverflow);
    // Очищаем обработчик при размонтировании
    return () => window.removeEventListener('resize', checkOverflow);
  }, [dependencies, isCheckSize, isParentMode]);

  // isDisabled: true, если нет переполнения (можно использовать для отключения тултипа)
  return { isDisabled: !isOverflowing, ref: ref, isOverflowing };
}
