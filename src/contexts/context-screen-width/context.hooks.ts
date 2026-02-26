import { useContextSelector } from 'use-context-selector';

import { ScreenWidthContext } from './context';
import { ScreenWidthContextProps, useScreenWidthDependenciesProps } from './context.types';

export const useScreenWidth = (props: useScreenWidthDependenciesProps): ScreenWidthContextProps => {
  const context = useContextSelector(ScreenWidthContext, (v) => {
    return v
      ? props.reduce((acc, prop) => {
          acc[prop] = v[prop];
          return acc;
        }, {} as any)
      : null;
  });
  if (!context) {
    throw new Error('useScreenWidth must be used within an ProviderScreenWidth');
  }
  return context;
};
