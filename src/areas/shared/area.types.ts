import { ButtonProps } from '@local/components/button';

import { LinkProps } from '@tanstack/react-router';

type BaseSharedProps = {
  value?: string;
  onSelected?: (tab: string) => void;
};
type TabsLink = {
  isLink?: true;
  option: (ButtonProps & { id: string; link: LinkProps })[];
};

type TabsButton = {
  isLink?: never;
  option: (ButtonProps & { id: string })[];
};

export type SharedProps = BaseSharedProps & (TabsLink | TabsButton);
export type StyledSharedProps = object;
