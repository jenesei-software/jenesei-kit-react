import { Icon as IconComponent } from '@local/components/icon';
import { Typography } from '@local/components/typography';
import { IThemePaletteKeys, JeneseiPalette, ThemeLight } from '@local/theme';

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
    <WrapperBig sx={{ default: { flexDirection: 'row' } }}>
      <WrapperBig sx={{ default: { flexDirection: 'column'} }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          ID
        </Typography>
        <WrapperMin sx={{ default: { color: 'black' } }}>
          {ThemeLight.icon.map.id.map((item) => (
            <IconComponent key={item} type='id' name={item} size={'large'} />
          ))}
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Checkbox
        </Typography>
        <WrapperMin>
          {ThemeLight.icon.map.checkbox.map((item) => (
            <IconComponent key={item} type={'checkbox'} name={item} size={'large'} color='black100' />
          ))}
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Loading
        </Typography>
        <WrapperMin>
          {ThemeLight.icon.map.loading.map((item) => (
            <IconComponent key={item} type={'loading'} name={item} size={'large'} color='black100' />
          ))}
          {ThemeLight.icon.map.loading.map((item) => (
            <IconComponent key={item} type={'loading'} name={item} size={'large'} color='blueBr' />
          ))}
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Logo
        </Typography>
        <WrapperMin>
          {ThemeLight.icon.map.logo.map((item) => (
            <IconComponent key={item} type={'logo'} name={item} size={'large'} color='black100' />
          ))}
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          All Palette Colors
        </Typography>
        <WrapperMin>
          {Object.keys(JeneseiPalette).map((item) => (
            <IconComponent key={item} type={'logo'} name={'Jenesei'} size={'large'} color={item as IThemePaletteKeys} />
          ))}
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          All Sizes
        </Typography>
        <WrapperBig>
          <WrapperMin sx={{ default: { flexDirection: 'column' } }}>
            <Typography
              sx={{
                default: {
                  variant: 'h5',
                  color: 'black100',
                },
              }}
            >
              small
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'small'} color='black100' />
          </WrapperMin>
          <WrapperMin sx={{ default: { flexDirection: 'column' } }}>
            <Typography
              sx={{
                default: {
                  variant: 'h5',
                  color: 'black100',
                },
              }}
            >
              mediumSmall
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'mediumSmall'} color='black100' />
          </WrapperMin>
          <WrapperMin sx={{ default: { flexDirection: 'column' } }}>
            <Typography
              sx={{
                default: {
                  variant: 'h5',
                  color: 'black100',
                },
              }}
            >
              medium
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'medium'} color='black100' />
          </WrapperMin>
          <WrapperMin sx={{ default: { flexDirection: 'column' } }}>
            <Typography
              sx={{
                default: {
                  variant: 'h5',
                  color: 'black100',
                },
              }}
            >
              largeMedium
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'largeMedium'} color='black100' />
          </WrapperMin>
          <WrapperMin sx={{ default: { flexDirection: 'column' } }}>
            <Typography
              sx={{
                default: {
                  variant: 'h5',
                  color: 'black100',
                },
              }}
            >
              large
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'large'} color='black100' />
          </WrapperMin>
          <WrapperMin sx={{ default: { flexDirection: 'column' } }}>
            <Typography
              sx={{
                default: {
                  variant: 'h5',
                  color: 'black100',
                },
              }}
            >
              100%
            </Typography>
            <WrapperMin sx={{ default: { width: '100px', height: '100px' } }}>
              <IconComponent type={'logo'} name={'Jenesei'} size={'100%'} color='black100' />
            </WrapperMin>
          </WrapperMin>
        </WrapperBig>
      </WrapperBig>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
        <Typography
          sx={{
            default: {
              variant: 'h5',
              color: 'black100',
            },
          }}
        >
          Other
        </Typography>
        <WrapperBig>
          <WrapperMin sx={{ default: { flexDirection: 'column' } }}>
            <Typography
              sx={{
                default: {
                  variant: 'h5',
                  color: 'black100',
                },
              }}
            >
              Custom color
            </Typography>
            <IconComponent
              type={'logo'}
              name={'Jenesei'}
              size={'medium'}
              sx={{
                default: {
                  color: 'red',
                },
              }}
            />
          </WrapperMin>
          <WrapperMin sx={{ default: { flexDirection: 'column' } }}>
            <Typography
              sx={{
                default: {
                  variant: 'h5',
                  color: 'black100',
                },
              }}
            >
              Turn
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'medium'} color='black100' turn={90} />
          </WrapperMin>
        </WrapperBig>
      </WrapperBig>
    </WrapperBig>
  );
};

export const Icon = {
  render: () => <IconWrapperAll />,
};
