import { Button, ButtonLink } from '@local/components/button';

import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { FC } from 'react';

import { SharedProps } from '.';

export const Shared: FC<SharedProps> = (props) => {
  return (
    <nav style={nav}>
      <ul style={tabsContainer}>
        {props.option.map((item) => (
          <motion.li
            key={item.id}
            initial={false}
            animate={{
              backgroundColor: item.id === props.value ? '#eee' : '#eee0',
            }}
            style={tab}
            onClick={() => props.onSelected?.(item.id)}
          >
            {props.isLink & ('link' in item) ? (
              <Link {...item.link}>
                <Button {...item} />
              </Link>
            ) : (
              <Button {...item} />
            )}
            {item.id === props.value ? <motion.div style={underline} layoutId='underline' id='underline' /> : null}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

const nav: React.CSSProperties = {
  background: '#fdfdfd',
  padding: '5px 5px 0',
  borderRadius: '10px',
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderBottom: '1px solid #eeeeee',
  height: 44,
};

const tabsStyles: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  fontWeight: 500,
  fontSize: 14,
};

const tabsContainer: React.CSSProperties = {
  ...tabsStyles,
  display: 'flex',
  width: '100%',
};

const tab: React.CSSProperties = {
  ...tabsStyles,
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  width: '100%',
  padding: '10px 15px',
  position: 'relative',
  background: 'white',
  cursor: 'pointer',
  height: 24,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: 1,
  minWidth: 0,
  userSelect: 'none',
  color: '#0f1115',
};

const underline: React.CSSProperties = {
  position: 'absolute',
  bottom: -2,
  left: 0,
  right: 0,
  height: 2,
  background: 'var(--accent)',
};

/**
 * ==============   Data   ================
 */

const allIngredients = [
  { icon: '🍅', label: 'Tomato' },
  { icon: '🥬', label: 'Lettuce' },
  { icon: '🧀', label: 'Cheese' },
  { icon: '🥕', label: 'Carrot' },
  { icon: '🍌', label: 'Banana' },
  { icon: '🫐', label: 'Blueberries' },
  { icon: '🥂', label: 'Champers?' },
];

const [tomato, lettuce, cheese] = allIngredients;
const tabs = [tomato, lettuce, cheese];
