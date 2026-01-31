import { I_SX } from '@local/styles/add';
import { I_THEME_PALETTE, I_THEME_SIZE } from '@local/styles/theme';

import React, { CSSProperties } from 'react';
export type I_ICON_MAP = {
  id: typeof ThemeMapId;
  checkbox: typeof ThemeMapCheckbox;
  loading: typeof ThemeMapLoading;
  realebail: typeof ThemeMapRealebail;
  logo: typeof ThemeMapLogo;
};

export type IconProps = {
  [K in keyof I_ICON_MAP]: {
    type: K;
    name: I_ICON_MAP[K][number];
    className?: string;
    style?: CSSProperties;
    onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
    size: I_THEME_SIZE | '100%';
    color?: I_THEME_PALETTE;
    turn?: number;
    order?: number;
    tabIndex?: number;
  } & I_SX;
}[keyof I_ICON_MAP];

export type StyledIconProps = Pick<IconProps, 'size' | 'turn' | 'order'> & { color?: I_THEME_PALETTE };

export type StyledIconSkeletonProps = Pick<IconProps, 'size' | 'order'>;

export type addIconProps = {
  [T in keyof I_ICON_MAP]: Omit<IconProps, 'size'> & {
    type: T;
    name: I_ICON_MAP[T][number];
    isHidden?: boolean;
    size?: IconProps['size'];
  };
}[keyof I_ICON_MAP];

export type addIconPropsGeneric<T extends keyof I_ICON_MAP = keyof I_ICON_MAP> = {
  type: T;
  name: I_ICON_MAP[T][number];
  className?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  size?: I_THEME_SIZE | '100%';
  color?: I_THEME_PALETTE;
  turn?: number;
  order?: number;
  tabIndex?: number;
  isHidden?: boolean;
} & I_SX;

export type getIconComponentsProps = {
  size: I_THEME_SIZE;

  icons?: addIconProps[];
};

const ThemeMapId = [
  'Close',
  'Biometry',
  'Qr',
  'Search',
  'Folder',
  'Wallet',
  'Graph',
  'Bookmark',
  'Browser',
  'Category',
  'Home',
  'Notification',
  'Chat',
  'Heart',
  'Paper',
  'Plus',
  'Minus',
  'PaperPlus',
  'PaperNegative',
  'PaperFail',
  'PaperDownload',
  'PaperUpload',
  'Send',
  'Password',
  'Swap',
  'Work',
  'Arrow1',
  'Arrow2',
  'Arrow3',
  'Arrow4',
  'ArrowMini1',
  'ArrowMini2',
  'Scan',
  'Activity',
  'Calendar',
  'Message',
  'PlusMini',
  'ChartMini',
  'Game',
  'Bag1',
  'Bag2',
  'TicketStar',
  'MoreCircle',
  'MoreSquare',
  'Discount',
  'Buy',
  'Web',
  'InfoMini',
  'DangerMini',
  'CloseMini',
  'TickMini',
  'Video',
  'Discovery',
  'Location',
  'Document',
  'Setting',
  'Time',
  'VolumeUp',
  'VolumeDown',
  'VolumeOff',
  'Star',
  'Select',
  'Ticket',
  'Camera',
  'Profile',
  'AddUser',
  'TwoUser',
  'ThreeUser',
  'Login',
  'Logout',
  'Download',
  'Upload',
  'Voice1',
  'Voice2',
  'Delete',
  'Edit',
  'PlayMini',
  'ShieldDone',
  'ShieldFail',
  'Show',
  'Hide',
  'Filter1',
  'Filter2',
  'Image',
  'Call',
  'Calling',
  'CallMissed',
  'CallSilent',
  'Lock',
  'Unlock',
  'Resources',
  'Language',
] as const;
const ThemeMapCheckbox = [
  'Radio-true',
  'Radio-false',
  'Square-true',
  'Square-false',
  'Heart-true',
  'Heart-false',
  'Arrow',
] as const;
const ThemeMapLoading = ['Line', 'Circle', 'Blocks', 'Balls'] as const;
const ThemeMapRealebail = ['MapCluster', 'HomeLikes', 'HomeManagement', 'UserSettings', 'User'] as const;
const ThemeMapLogo = ['Jenesei', 'BustMarket'] as const;
