import { useCallback, useMemo } from 'react';
import { useTheme } from 'styled-components';

import { RangeProps, RangeThumb, RangeTrack, RangeWrapper } from '.';

export const Range = (props: RangeProps) => {
  const { onChange } = props;
  const handleChange = useCallback(
    (index: number, newValue: number) => {
      const newValues = [...props.values];
      newValues[index] = Math.min(props.max, Math.max(props.min, newValue));
      onChange(newValues.sort((a, b) => a - b));
    },
    [onChange, props.max, props.min, props.values],
  );
  const getThumbPositionPercent = useCallback(
    (val: number) => ((val - props.min) / (props.max - props.min)) * 100,
    [props.max, props.min],
  );
  const positions = useMemo(
    () => props.values.map((val) => getThumbPositionPercent(val)),
    [getThumbPositionPercent, props.values],
  );
  const theme = useTheme();

  const colorTrackBackground = theme.colors.range[props.genre].track.background.rest;
  const colorTrackGradient = theme.colors.range[props.genre].track.gradient.rest;
  const colorThumbBorder = theme.colors.range[props.genre].thumb.border.rest;
  const colorThumbBackground = theme.colors.range[props.genre].thumb.background.rest;

  const trackGradient = useMemo(
    () =>
      positions
        .map((position, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === positions.length - 1;

          if (isFirst)
            return `${colorTrackBackground} 0%, ${colorTrackBackground} ${position}%, ${colorTrackGradient} ${position}%`;
          if (isLast)
            return `${colorTrackGradient} ${position}%, ${colorTrackBackground} ${position}%, ${colorTrackBackground} 100%`;
          return `${colorTrackGradient} ${position}%`;
        })
        .join(', '),
    [colorTrackGradient, colorTrackBackground, positions],
  );
  const gradient = useMemo(() => `linear-gradient(to right, ${trackGradient})`, [trackGradient]);

  return (
    <RangeWrapper $size={props.size} $sx={props.sx} $error={props.error} onBlur={props.onBlur}>
      {props.values.map((val, idx) => (
        <RangeThumb
          key={idx}
          type='range'
          $size={props.size}
          $genre={props.genre}
          min={props.min}
          max={props.max}
          step={props.step}
          value={val}
          onChange={(e) => handleChange(idx, parseFloat(e.target.value))}
          style={{ zIndex: 100 + idx }}
          $colorBackground={colorThumbBackground}
          $colorBorder={colorThumbBorder}
        />
      ))}
      <RangeTrack
        $size={props.size}
        $genre={props.genre}
        style={{
          background: gradient,
        }}
      />
    </RangeWrapper>
  );
};
