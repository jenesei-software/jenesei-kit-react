import { JeneseiPalette } from '@local/theme/theme';

import { useMemo } from 'react';

import IconBustMarketJSON from './component-bustmarket.json';
import IconCheckboxJSON from './component-checkbox.json';
import IconIdJSON from './component-id.json';
import IconLoadingJSON from './component-loading.json';
import IconLogoJSON from './component-logo.json';
import IconRealEbailJSON from './component-realebail.json';
import {
  IconItemProps,
  IconTypeMap,
  StyledSVG,
  TIconBustMarketNameString,
  TIconCheckboxNameString,
  TIconIdNameString,
  TIconLoadingNameString,
  TIconLogoNameString,
  TIconRealEbailNameString,
} from '.';

export const Icon = <T extends keyof IconTypeMap>(props: IconItemProps<T>) => {
  const icon = useMemo(() => {
    let icon = null;

    switch (props.type) {
      case 'id':
        icon = IconIdJSON[props.name as TIconIdNameString];
        break;
      case 'bustmarket':
        icon = IconBustMarketJSON[props.name as TIconBustMarketNameString];
        break;
      case 'realebail':
        icon = IconRealEbailJSON[props.name as TIconRealEbailNameString];
        break;
      case 'logo':
        icon = IconLogoJSON[props.name as TIconLogoNameString];
        break;
      case 'checkbox':
        icon = IconCheckboxJSON[props.name as TIconCheckboxNameString];
        break;
      case 'loading':
        icon = IconLoadingJSON[props.name as TIconLoadingNameString];
        break;
    }
    return icon;
  }, [props.name, props.type]);

  const primaryColor = props.primaryColor ? JeneseiPalette[props.primaryColor] : 'currentColor';
  const secondColor = props.secondColor ? JeneseiPalette[props.secondColor] : 'currentColor';

  if (!icon) {
    console.warn(`Icon ${props.name} not found in the library.`);
    return null;
  }

  const getFillColor = (fillType?: string): string | undefined => {
    if (fillType === 'primaryColor') return primaryColor;
    if (fillType === 'secondColor') return secondColor;
    return 'currentColor';
  };

  const contentPaths =
    (props.type == 'id' || props.type === 'checkbox' || props.type === 'realebail' || props.type === 'logo') &&
    typeof icon === 'object' &&
    'paths' in icon
      ? (icon.paths ?? []).map((path, index) => (
          <path
            key={`${props.type}-${props.name}-path-${index}`}
            id={'id' in path ? (path.id as string) : undefined}
            d={path.d}
            clipRule='evenodd'
            fillRule='evenodd'
            fill={'fill' in path ? getFillColor(path.fill as string) : 'currentColor'}
          />
        ))
      : null;

  const isFull = props.type === 'loading' || props.type === 'bustmarket' ? (icon as string) : null;

  return (
    <StyledSVG
      width='24'
      height='24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      $size={props.size}
      $turn={props.turn}
      $order={props.order}
      $color={props.primaryColor || undefined}
      $sx={props.sx}
      className={props.className}
      onClick={props.onClick}
      tabIndex={props.tabIndex}
      dangerouslySetInnerHTML={isFull ? { __html: isFull } : undefined}
    >
      {contentPaths}
    </StyledSVG>
  );
};
