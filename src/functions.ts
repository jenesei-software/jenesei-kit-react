import { I_LAYOUT, I_LAYOUT_VALUE } from "./styles/add";
import { THEME_GLOBAL_VALUE } from "./styles/theme";

type EnumOption = {
  value: string;
  label: string;
  placeholder: string;
  search: string;
};

export function transformEnumToOptions<T extends Record<string, string>>(enumObj: T): EnumOption[] {
  return Object.entries(enumObj).map(([key, value]) => ({
    value: key,
    label: value,
    placeholder: value,
    search: `${value}, ${key}`,
  }));
}

type GenericObject<T> = {
  [key: string]: T;
};

export function transformObjectToArray<T>(obj: GenericObject<T>): Array<T> {
  return Object.entries(obj).map(([, value]) => ({
    ...value,
  }));
}

export function transformObjectValuesToKeys<T>(obj: GenericObject<T>): GenericObject<string> {
  return Object.keys(obj).reduce(
    (acc, key) => {
      acc[key] = key;
      return acc;
    },
    {} as GenericObject<string>,
  );
}

export function getContrastYIQ(hexcolor: string) {
  hexcolor = hexcolor.replace('#', '');
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000000' : '#FFFFFF';
}

export function getScrollbarWidth() {
  const div = document.createElement('div');
  div.style.visibility = 'hidden';
  div.style.overflow = 'scroll';
  div.style.width = '100px';
  div.style.position = 'absolute';
  div.style.top = '-9999px';
  document.body.appendChild(div);
  const scrollBarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollBarWidth;
}

export function getHasVerticalScroll(): boolean {
  if (typeof window === 'undefined') return false;
  return document.documentElement.scrollHeight > window.innerHeight;
}

// export function getSxTypography(props: {
//   size: IThemeSize;
//   weight: number;
//   sx?: TypographySXProps;
//   theme: DefaultTheme;
// }): TypographySXProps {
//   const sx = typeof props.sx === 'function' ? props.sx(props.theme) : props.sx;
//   return {
//     default: {
//       size: THEME_KEY_SIZE[props.size].font,
//       weight: 700,
//       ...sx?.default,
//     },
//     ...sx,
//   };
// }

type AnyObject = Record<string, any>;

export function stringifyCssObject<T extends AnyObject>(obj?: T): AnyObject | undefined {
  if (!obj) return undefined;

  const result: AnyObject = {};

  for (const key in obj) {
    const value = obj[key];

    if (value == null) continue;

    if (typeof value === 'object' && !Array.isArray(value)) {
      const nested = stringifyCssObject(value);
      if (nested && Object.keys(nested).length > 0) {
        result[key] = nested;
      }
    } else {
      result[key] = String(value);
    }
  }

  return result;
}

export const getResolveSX = <A extends object>(sxProp?: I_LAYOUT<A>, sxPropBase?: I_LAYOUT<A>): I_LAYOUT_VALUE<A> => {
  const resolve = (sx?: I_LAYOUT<A>): I_LAYOUT_VALUE<A> =>
    typeof sx === 'function' ? sx(THEME_GLOBAL_VALUE) : (sx ?? {});

  const base = resolve(sxPropBase);
  const custom = resolve(sxProp);

  const merged: I_LAYOUT_VALUE<A> = {};

  merged.default = mergeOptionalObjects(base.default, custom.default);
  merged.breakpoints = mergeOptionalObjects(base.breakpoints, custom.breakpoints);
  merged.orientations = mergeOptionalObjects(base.orientations, custom.orientations);

  return merged;
};

function mergeOptionalObjects<T extends object>(base?: T, custom?: T): T | undefined {
  if (base && custom) return { ...base, ...custom };
  return base ?? custom;
}
