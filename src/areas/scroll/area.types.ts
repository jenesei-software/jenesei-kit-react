import { StackProps } from '@local/components/stack/export';
import { AddDollarSign } from '@local/types';

type DefaultScrollProps = {
  vertical?: boolean;
  horizontal?: boolean;
  isAlwaysVertical?: boolean;
  isAlwaysHorizontal?: boolean;
};

export type ScrollProps = StackProps & DefaultScrollProps;
export type StyledScrollProps = StackProps & AddDollarSign<DefaultScrollProps>;
