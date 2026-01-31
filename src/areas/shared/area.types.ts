import { ButtonProps } from '@local/components/button';
import { I_SX } from '@local/styles/add';

type BaseSharedProps = I_SX & {
  value?: string;
  onSelected?: (tab: string) => void;
};
type TabsLink = {
  isLink?: true;
  option: { default: ButtonProps; selected?: Partial<ButtonProps>; id: string }[];
};

type TabsButton = {
  isLink?: never | false;
  option: { default: ButtonProps; selected?: Partial<ButtonProps>; id: string }[];
};

export type SharedProps = BaseSharedProps & (TabsLink | TabsButton);
export type StyledSharedProps = object;
