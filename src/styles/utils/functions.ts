import clsx from 'clsx';
import { CSSProperties } from 'react';

export const setClasses = (classes: (string | boolean | undefined)[]) => clsx(classes.filter(Boolean));
export const setStyles = (styles: (Record<string, string> | boolean | undefined | CSSProperties)[]) =>
  Object.assign({}, ...styles.filter(Boolean));
