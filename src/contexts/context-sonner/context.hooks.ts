import { useContextSelector } from 'use-context-selector';

import { SonnerContext } from './context';
import { ISonnerContext, IUseSonnerDependencies } from './context.types';

export const useSonner = (props: IUseSonnerDependencies): ISonnerContext => {
  const context = useContextSelector(SonnerContext, (v) => {
    return v
      ? props.reduce((acc, prop) => {
          acc[prop] = v[prop];
          return acc;
        }, {} as any)
      : null;
  });
  if (!context) {
    throw new Error('useSonner must be used within an ProviderSonner');
  }
  return context;
};
