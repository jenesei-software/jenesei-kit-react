import { CSS_CLASS, CSS_VARS } from '@local/styles/utils';
import { CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { FC, useMemo } from 'react';

import { ISeparator } from './component.types';

const DEFAULT_SEPARATOR_SIZE = '1px';

export const Separator: FC<ISeparator> = (props) => {
  const { className, style } = useMemo(() => {
    const className = setClasses([CSS_CLASS.component.separator.root, props.className]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.separator.background] = CSS_VARS.palette[props.color ?? 'fillPrimaryLight'];
    vars[CSS_VARS_RAW.component.separator.radius] = props.radius || '0px';
    vars[CSS_VARS_RAW.component.separator.width] =
      props.type === 'horizontal' ? 'auto' : props.thickness || DEFAULT_SEPARATOR_SIZE;
    vars[CSS_VARS_RAW.component.separator.height] =
      props.type === 'vertical' ? 'auto' : props.thickness || DEFAULT_SEPARATOR_SIZE;
    vars[CSS_VARS_RAW.component.separator.maxHeight] =
      props.type === 'vertical' ? '100%' : props.thickness || DEFAULT_SEPARATOR_SIZE;
    vars[CSS_VARS_RAW.component.separator.maxWidth] =
      props.type === 'horizontal' ? '100%' : props.thickness || DEFAULT_SEPARATOR_SIZE;

    const style = setStyles([Object.keys(vars).length ? vars : undefined, props.style]);

    return { className, style };
  }, [props.className, props.style, props.color, props.radius, props.thickness, props.type]);

  return <hr className={className} style={style} />;
};
