import { Icon } from '@local/components/icon';
import { Stack, StackMotion } from '@local/components/stack';
import { CSS_CLASS } from '@local/styles/utils';

import { AnimatePresence } from 'framer-motion';
import { FC, useEffect, useMemo, useState } from 'react';

import { IPreview } from './area.types';

export const Preview: FC<IPreview> = (props) => {
  const [visible, setVisible] = useState(props.defaultVisible ?? true);

  const propsVisible = useMemo(() => ('visible' in props ? props.visible : null), [props]);
  const propsTime = useMemo(() => ('time' in props ? props.time : null), [props]);
  const propsMinTime = useMemo(() => ('minTime' in props ? props.minTime : null), [props]);

  useEffect(() => {
    if (propsTime !== null) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, propsTime);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [propsTime]);

  useEffect(() => {
    if (propsVisible !== null) {
      if (propsVisible) {
        if (propsMinTime) {
          const timer = setTimeout(() => {
            setVisible(propsVisible);
          }, propsMinTime);
          return () => clearTimeout(timer);
        } else {
          setVisible(propsVisible);
        }
      } else {
        setVisible(propsVisible);
      }
    }
  }, [propsVisible, propsMinTime]);

  return (
    <AnimatePresence>
      {!visible ? (
        <StackMotion
          key='loader'
          sx={props?.sxLoader}
          className={CSS_CLASS.area.preview.root}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Stack className={CSS_CLASS.area.preview.containerIcon}>
            <Icon size='100%' type='loading' color='productPrimary' name='Line' />
          </Stack>
          {props.content && <Stack className={CSS_CLASS.area.preview.containerChildren}>{props.content}</Stack>}
        </StackMotion>
      ) : null}
      {visible ? (
        <StackMotion
          key='children'
          sx={props?.sxChildren}
          className={CSS_CLASS.area.preview.children}
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {props.children}
        </StackMotion>
      ) : null}
    </AnimatePresence>
  );
};
