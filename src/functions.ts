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
