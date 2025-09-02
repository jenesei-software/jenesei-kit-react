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
  Close = 'Close',
  Biometry = 'Biometry',
  QR = 'QR',
  Search = 'Search',
  Folder = 'Folder',
  Wallet = 'Wallet',
  Graph = 'Graph',
  Bookmark = 'Bookmark',
  Category = 'Category',
  Home = 'Home',
  Notification = 'Notification',
  Chat = 'Chat',
  Heart = 'Heart',
  Paper = 'Paper',
  Plus = 'Plus',
  Minus = 'Minus',
  PaperPlus = 'PaperPlus',
  PaperNegative = 'PaperNegative',
  PaperFail = 'PaperFail',
  PaperDownload = 'PaperDownload',
  PaperUpload = 'PaperUpload',
  Send = 'Send',
  PasswordMini = 'PasswordMini',
  Swap = 'Swap',
  Work = 'Work',
  Arrow1 = 'Arrow1',
  Arrow2 = 'Arrow2',
  Arrow3 = 'Arrow3',
  Arrow4 = 'Arrow4',
  ArrowMini1 = 'ArrowMini1',
  ArrowMini2 = 'ArrowMini2',
  Scan = 'Scan',
  Activity = 'Activity',
  Calendar = 'Calendar',
  Message = 'Message',
  PlusMini = 'PlusMini',
  ChartMini = 'ChartMini',
  Game = 'Game',
  Bag1 = 'Bag1',
  Bag2 = 'Bag2',
  TicketStar = 'TicketStar',
  MoreCircle = 'MoreCircle',
  MoreSquare = 'MoreSquare',
  Discount = 'Discount',
  Buy = 'Buy',
  Web = 'Web',
  InfoMini = 'InfoMini',
  DangerMini = 'DangerMini',
  DangerTriangle = 'DangerTriangle',
  CloseMini = 'CloseMini',
  TickMini = 'TickMini',
  Video = 'Video',
  Discovery = 'Discovery',
  Location = 'Location',
  Document = 'Document',
  Setting = 'Setting',
  TimeSquare = 'TimeSquare',
  TimeCircle = 'TimeCircle',
  VolumeUp = 'VolumeUp',
  VolumeDown = 'VolumeDown',
  VolumeOff = 'VolumeOff',
  Star = 'Star',
  Select = 'Select',
  Ticket = 'Ticket',
  Camera = 'Camera',
  Profile = 'Profile',
  AddUser = 'AddUser',
  TwoUser = 'TwoUser',
  ThreeUser = 'ThreeUser',
  Login = 'Login',
  Logout = 'Logout',
  Download = 'Download',
  Upload = 'Upload',
  Voice = 'Voice',
  Voice2 = 'Voice2',
  Delete = 'Delete',
  Edit = 'Edit',
  EditSquare = 'EditSquare',
  PlayMini = 'PlayMini',
  ShieldDone = 'ShieldDone',
  ShieldFail = 'ShieldFail',
  Show = 'Show',
  Hide = 'Hide',
  Filter = 'Filter',
  Filter2 = 'Filter2',
  Image = 'Image',
  Image2 = 'Image2',
  Call = 'Call',
  Calling = 'Calling',
  CallMissed = 'CallMissed',
  CallSilent = 'CallSilent',
  Lock = 'Lock',
  Unlock = 'Unlock',
  Resources = 'Resources',
  Language = 'Language',
}

export enum ENUM_ICON_CHECKBOX {
  Radio = 'Radio',
  Square = 'Square',
  Arrow = 'Arrow',
  Heart = 'Heart',
}
export enum ENUM_ICON_LOADING {
  Line = 'Line',
  Circle = 'Circle',
  Blocks = 'Blocks',
  Balls = 'Balls',
}
export enum ENUM_ICON_REALEBAIL {
  MapCluster = 'MapCluster',
  HomeLikes = 'HomeLikes',
  HomeManagement = 'HomeManagement',
  UserSettings = 'UserSettings',
  User = 'User',
}
export enum ENUM_ICON_LOGO {
  Jenesei = 'Jenesei',
  BustMarket = 'BustMarket',
}
export enum ENUM_ICON_BUSTMARKET {
  Card = 'Card',
  Delivery = 'Delivery',
  Heart = 'Heart',
  Reviews = 'Reviews',
  Search = 'Search',
  Menu = 'Menu',
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

export type addIconsGetIconComponentsProps = (
  | (Omit<IconItemProps<'id'>, 'size'> & { isHidden?: boolean; size?: IconItemProps<'id'>['size'] })
  | (Omit<IconItemProps<'checkbox'>, 'size'> & { isHidden?: boolean; size?: IconItemProps<'checkbox'>['size'] })
  | (Omit<IconItemProps<'loading'>, 'size'> & { isHidden?: boolean; size?: IconItemProps<'loading'>['size'] })
  | (Omit<IconItemProps<'realebail'>, 'size'> & { isHidden?: boolean; size?: IconItemProps<'realebail'>['size'] })
  | (Omit<IconItemProps<'logo'>, 'size'> & { isHidden?: boolean; size?: IconItemProps<'logo'>['size'] })
  | (Omit<IconItemProps<'bustmarket'>, 'size'> & { isHidden?: boolean; size?: IconItemProps<'logo'>['size'] })
)[];
export type getIconComponentsProps = (props: {
  icons?: addIconsGetIconComponentsProps;
  size: IThemeSize;
}) => React.ReactNode[] | null;
