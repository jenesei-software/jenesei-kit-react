import { IButton } from '@local/components/button';
import { ISx, IThemePalette } from '@local/styles/utils';

type IBaseShared = ISx & {
  value?: string;
  onSelected?: (tab: string) => void;
  color?: IThemePalette;
};
type ITabsLink = {
  isLink?: true;
  option: { default: IButton; selected?: Partial<IButton>; id: string }[];
};

type ITabsButton = {
  isLink?: never | false;
  option: { default: IButton; selected?: Partial<IButton>; id: string }[];
};

export type IShared = IBaseShared & (ITabsLink | ITabsButton);