import { Button } from '@local/components/button';
import { Stack } from '@local/components/stack';

import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components';

import { SharedProps } from '.';

export const Shared: FC<SharedProps> = (props) => {
  return (
    <Stack sx={props.sx}>
      <ul style={tabsContainer}>
        {props.option.map((item) => (
          <motion.li key={item.id} initial={false} style={tab} onClick={() => props.onSelected?.(item.id)}>
            {(props.isLink ?? false) && 'link' in item ? (
              <Link {...item.link}>
                <Button
                  {...(item.id === props.value
                    ? item.selected
                      ? { ...item.default, ...item.selected }
                      : item.default
                    : item.default)}
                />
              </Link>
            ) : (
              <Button
                {...(item.id === props.value
                  ? item.selected
                    ? { ...item.default, ...item.selected }
                    : item.default
                  : item.default)}
              />
            )}
            {item.id === props.value ? <Underline layoutId='underline' id='underline' /> : null}
          </motion.li>
        ))}
      </ul>
    </Stack>
  );
};

const tabsStyles: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const tabsContainer: React.CSSProperties = {
  ...tabsStyles,
  display: 'flex',
  width: '100%',
};

const tab: React.CSSProperties = {
  ...tabsStyles,
  position: 'relative',
  // display: 'contents',
};

const Underline = styled(motion.div)`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background: ${(props) => props.theme.palette.violetJanice};
`;
