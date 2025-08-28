import { addSXProps, addSXStyleProps } from '@local/styles/sx';
import { IThemePaletteKeys, IThemeSize } from '@local/theme';
import { AddDollarSign } from '@local/types';

import React from 'react';

export type IconItemProps<T extends keyof IconTypeMap> = {
  type: T;
  name: IconTypeMap[T];
  className?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  size: IThemeSize | '100%';
  primaryColor?: IThemePaletteKeys;
  secondColor?: IThemePaletteKeys;
  turn?: number;
  order?: number;
  tabIndex?: number;
} & addSXProps;

export type StyledIconIdItemProps = AddDollarSign<
  Pick<IconItemProps<'id'>, 'size' | 'turn' | 'order'> & { color?: IThemePaletteKeys }
> &
  addSXStyleProps;

export enum ENUM_ICON_ID {
  Close,
  Biometry,
  QR,
  Search,
  Folder,
  Wallet,
  Graph,
  Bookmark,
  Category,
  Home,
  Notification,
  Chat,
  Heart,
  Paper,
  Plus,
  Minus,
  PaperPlus,
  PaperNegative,
  PaperFail,
  PaperDownload,
  PaperUpload,
  Send,
  PasswordMini,
  Swap,
  Work,
  Arrow1,
  Arrow2,
  Arrow3,
  Arrow4,
  ArrowMini1,
  ArrowMini2,
  Scan,
  Activity,
  Calendar,
  Message,
  PlusMini,
  ChartMini,
  Game,
  Bag1,
  Bag2,
  TicketStar,
  MoreCircle,
  MoreSquare,
  Discount,
  Buy,
  Web,
  InfoMini,
  DangerMini,
  DangerTriangle,
  CloseMini,
  TickMini,
  Video,
  Discovery,
  Location,
  Document,
  Setting,
  TimeSquare,
  TimeCircle,
  VolumeUp,
  VolumeDown,
  VolumeOff,
  Star,
  Select,
  Ticket,
  Camera,
  Profile,
  AddUser,
  TwoUser,
  ThreeUser,
  Login,
  Logout,
  Download,
  Upload,
  Voice,
  Voice2,
  Delete,
  Edit,
  EditSquare,
  PlayMini,
  ShieldDone,
  ShieldFail,
  Show,
  Hide,
  Filter,
  Filter2,
  Image,
  Image2,
  Call,
  Calling,
  CallMissed,
  CallSilent,
  Lock,
  Unlock,
  Resources,
  Language,
}
export enum ENUM_ICON_CHECKBOX {
  Radio,
  Square,
  Arrow,
  Heart,
}
export enum ENUM_ICON_LOADING {
  Line,
  Circle,
  Blocks,
  Balls,
}
export enum ENUM_ICON_REALEBAIL {
  MapCluster,
  HomeLikes,
  HomeManagement,
  UserSettings,
  User,
}
export enum ENUM_ICON_LOGO {
  Jenesei,
  BustMarket,
}
export enum ENUM_ICON_BUSTMARKET {
  Card,
  Delivery,
  Heart,
  Reviews,
  Search,
  Menu,
}
export type TIconIdNameString = keyof typeof ENUM_ICON_ID;
export type TIconCheckboxNameString = keyof typeof ENUM_ICON_CHECKBOX;
export type TIconLoadingNameString = keyof typeof ENUM_ICON_LOADING;
export type TIconRealEbailNameString = keyof typeof ENUM_ICON_REALEBAIL;
export type TIconLogoNameString = keyof typeof ENUM_ICON_LOGO;
export type TIconBustMarketNameString = keyof typeof ENUM_ICON_BUSTMARKET;

export type IconTypeMap = {
  id: TIconIdNameString;
  checkbox: TIconCheckboxNameString;
  loading: TIconLoadingNameString;
  realebail: TIconRealEbailNameString;
  logo: TIconLogoNameString;
  bustmarket: TIconBustMarketNameString;
};
