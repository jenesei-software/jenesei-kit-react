import { useContextSelector } from 'use-context-selector';

import { AppContext } from './context';
import { IAppContext, IUseAppDependencies } from './context.types';

export const useApp = (props: IUseAppDependencies): IAppContext => {
  const context = useContextSelector(AppContext, (v) => {
    return v
      ? props.reduce((acc, prop) => {
          acc[prop] = v[prop];
          return acc;
        }, {} as any)
      : null;
  });
  if (!context) {
    throw new Error('useApp must be used within an AppContext');
  }
  return context;
};
