import { IStack } from '@local/components/stack';

type IDefaultScroll = {
  vertical?: boolean;
  horizontal?: boolean;
  isAlwaysVertical?: boolean;
  isAlwaysHorizontal?: boolean;
};

export type IScroll = IStack & IDefaultScroll;
