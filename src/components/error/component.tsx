import { useTypographyStyles } from '@local/hooks/use-typography-styles';
import { MotionWordsPullUp } from '@local/styles/motion';
import { CSS_CLASS, CSS_VARS } from '@local/styles/utils';
import { CSS_VARS_RAW } from '@local/styles/utils/constants';
import { setClasses, setStyles } from '@local/styles/utils/functions';

import { FC, useMemo } from 'react';

import { IErrorMessage } from './component.types';

export const ErrorMessage: FC<IErrorMessage> = (props) => {
  const { className: classNameTypography, style: styleTypography } = useTypographyStyles({
    sx: {
      size: '16px',
      weight: '700',
      height: '1',
      ...props?.sxTypography,
    },
    style: { order: 0, display: 'contents' },
  });

  const { className, style } = useMemo(() => {
    const className = setClasses([
      CSS_CLASS.component.error.root,
      CSS_CLASS.transition.color,
      props.size && props.isErrorAbsolute
        ? CSS_CLASS.component.error.sizeAbsolute
        : CSS_CLASS.component.error.sizeDefault,
      props.className,
    ]);

    const vars: Record<string, string> = {};

    vars[CSS_VARS_RAW.component.error.color] = CSS_VARS.palette.accentRedLight;
    vars[CSS_VARS_RAW.component.error.padding] = props.size ? CSS_VARS.size[props.size].padding : '0px';

    const style = setStyles([Object.keys(vars).length ? vars : undefined, props.style]);

    return { className, style };
  }, [props.className, props.style, props.size, props.isErrorAbsolute]);

  return (
    <>
      {props.errorMessage && props.isError ? (
        <div className={className} style={style}>
          <div className={classNameTypography} style={styleTypography}>
            <MotionWordsPullUp text={props.errorMessage} />
          </div>
        </div>
      ) : null}
    </>
  );
};
