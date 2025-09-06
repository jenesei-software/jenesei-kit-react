import { Icon } from '@local/components/icon';
import { Stack, StackMotion } from '@local/components/stack';

import { AnimatePresence } from 'framer-motion';
import { FC, useEffect, useMemo, useState } from 'react';

import { PreviewProps } from '.';

export const Preview: FC<PreviewProps> = (props) => {
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
          sx={(theme) => ({
            ...props?.sxLoader,
            default: {
              backgroundColor: theme.palette.whiteStandard,
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              ...(props?.sxLoader
                ? typeof props?.sxLoader === 'function'
                  ? props?.sxLoader(theme).default
                  : props?.sxLoader.default
                : {}),
            },
          })}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Stack
            sx={{
              default: {
                position: 'absolute',
                width: '8vmin',
                height: '8vmin',
              },
            }}
          >
            <Icon size='100%' type='loading' color='blueFocus' name='Line' />
          </Stack>
          {props.content && (
            <Stack
              sx={{
                default: {
                  position: 'relative',
                  marginTop: '18vmin',
                },
              }}
            >
              {props.content}
            </Stack>
          )}
        </StackMotion>
      ) : null}
      {visible ? (
        <StackMotion
          key='children'
          sx={(theme) => ({
            ...props?.sxChildren,
            default: {
              display: 'contents',
              zIndex: 0,
              ...(props?.sxChildren
                ? typeof props?.sxChildren === 'function'
                  ? props?.sxChildren(theme).default
                  : props?.sxChildren.default
                : {}),
            },
          })}
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
