import { create } from 'storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'Jenesei',
  brandUrl: 'https://jenesei.ru/',
  brandImage: '/icons/icon-180x180.png',
  brandTarget: '_blank',

  color: '#395295',
  colorSecondary: '#4195D2',

  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  textColor: '#10162F',
  textInverseColor: '#ffffff',

  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',

  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});
