import { Icon as IconComponent, THEME_MAP } from '@local/components/icon';
import { Typography } from '@local/components/typography';
import { IThemePalette } from '@local/styles/utils';
import { CSS_VARS } from '@local/styles/utils/constants';

import type { Meta } from '@storybook/react-vite';
import { FC } from 'react';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<typeof IconComponent> = {
  component: IconComponent,
  title: 'Component/Icon',
};

export default meta;

const IconWrapperAll: FC = () => {
  return (
    <WrapperBig sx={{ flexDirection: 'row' }}>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimary',
          }}
        >
          ID
        </Typography>
        <WrapperMin sx={(theme) => ({ color: theme.palette.accentBrown })}>
          {THEME_MAP.id.map((item) => (
            <IconComponent key={item} type='id' name={item} size={'large'} />
          ))}
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimary',
          }}
        >
          Checkbox
        </Typography>
        <WrapperMin>
          {THEME_MAP.checkbox.map((item) => (
            <IconComponent key={item} type={'checkbox'} name={item} size={'large'} color='textPrimary' />
          ))}
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimary',
          }}
        >
          Loading
        </Typography>
        <WrapperMin>
          {THEME_MAP.loading.map((item) => (
            <IconComponent key={item} type={'loading'} name={item} size={'large'} color='textPrimary' />
          ))}
          {THEME_MAP.loading.map((item) => (
            <IconComponent key={item} type={'loading'} name={item} size={'large'} color='accentBlue' />
          ))}
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimary',
          }}
        >
          Logo
        </Typography>
        <WrapperMin>
          {THEME_MAP.logo.map((item) => (
            <IconComponent key={item} type={'logo'} name={item} size={'large'} color='textPrimary' />
          ))}
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimary',
          }}
        >
          All Palette Colors
        </Typography>
        <WrapperMin>
          {Object.keys(CSS_VARS.palette).map((item) => (
            <IconComponent key={item} type={'logo'} name={'Jenesei'} size={'large'} color={item as IThemePalette} />
          ))}
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimary',
          }}
        >
          All Sizes
        </Typography>
        <WrapperBig>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimary',
              }}
            >
              small
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'small'} color='textPrimary' />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimary',
              }}
            >
              mediumSmall
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'mediumSmall'} color='textPrimary' />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimary',
              }}
            >
              medium
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'medium'} color='textPrimary' />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimary',
              }}
            >
              largeMedium
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'largeMedium'} color='textPrimary' />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimary',
              }}
            >
              large
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'large'} color='textPrimary' />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimary',
              }}
            >
              100%
            </Typography>
            <WrapperMin sx={{ width: '100px', height: '100px' }}>
              <IconComponent type={'logo'} name={'Jenesei'} size={'100%'} color='textPrimary' />
            </WrapperMin>
          </WrapperMin>
        </WrapperBig>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimary',
          }}
        >
          Other
        </Typography>
        <WrapperBig>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimary',
              }}
            >
              Custom color
            </Typography>
            <IconComponent
              type={'logo'}
              name={'Jenesei'}
              size={'medium'}
              sx={{
                color: 'red',
              }}
            />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimary',
              }}
            >
              Turn
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'medium'} color='textPrimary' turn={90} />
          </WrapperMin>
        </WrapperBig>
      </WrapperBig>
    </WrapperBig>
  );
};

export const Icon = {
  render: () => <IconWrapperAll />,
};
