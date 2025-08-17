import { ButtonProps } from '@local/components/button';
import { addSXProps } from '@local/index';

import { LinkProps } from '@tanstack/react-router';

type BaseSharedProps = addSXProps & {
  value?: string;
  onSelected?: (tab: string) => void;
};
type TabsLink = {
  isLink?: true;
  option: { default: ButtonProps; selected?: Partial<ButtonProps>; id: string; link: LinkProps }[];
};

type TabsButton = {
  isLink?: never | false;
  option: { default: ButtonProps; selected?: Partial<ButtonProps>; id: string }[];
};

export type SharedProps = BaseSharedProps & (TabsLink | TabsButton);
export type StyledSharedProps = object;
