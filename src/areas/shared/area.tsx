import { Button } from '@local/components/button';
import { Stack, StackMotion } from '@local/components/stack';

import { motion } from 'framer-motion';
import { CSSProperties, FC } from 'react';

import { IShared } from './area.types';

export const Shared: FC<IShared> = (props) => {
  return (
    <Stack style={tabsContainer} sx={props.sx} as='ul'>
      {props.option.map((item) => (
        <motion.li key={item.id} initial={false} style={tab} onClick={() => props.onSelected?.(item.id)}>
          {(props.isLink ?? false) && 'link' in item ? (
            <Button
              {...(item.id === props.value
                ? item.selected
                  ? { ...item.default, ...item.selected }
                  : item.default
                : item.default)}
            />
          ) : (
            <Button
              {...(item.id === props.value
                ? item.selected
                  ? { ...item.default, ...item.selected }
                  : item.default
                : item.default)}
            />
          )}
          {item.id === props.value ? (
            <StackMotion
              layoutId='underline'
              id='underline'
              sx={(theme) => ({
                ...underline,
                background: theme.palette[props.color ?? 'accentBlueLight'],
              })}
            />
          ) : null}
        </motion.li>
      ))}
    </Stack>
  );
};

const tabsStyles: CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const tabsContainer: CSSProperties = {
  ...tabsStyles,
  display: 'flex',
  width: '100%',
};

const tab: CSSProperties = {
  ...tabsStyles,
  position: 'relative',
};

const underline: CSSProperties = {
  position: 'absolute',
  width: '100%',
  left: 0,
  right: 0,
  bottom: -2,
  height: 2,
};
