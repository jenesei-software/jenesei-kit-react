import { Icon as IconComponent, IIcon, THEME_MAP } from '@local/components/icon';
import { Typography } from '@local/components/typography';
import { IThemePalette } from '@local/styles/utils';
import { CSS_VARS } from '@local/styles/utils/constants';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC } from 'react';

import { WrapperBig, WrapperMin } from './tools';

const meta: Meta<typeof IconComponent> = {
  component: IconComponent,
  title: 'Component/7. Icon',
};

export default meta;

const CollectionWrapper: FC = () => {
  return (
    <WrapperBig sx={{ flexDirection: 'row' }}>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          ID
        </Typography>
        <WrapperMin sx={{ color: CSS_VARS.palette.accentBrownLight, flexDirection: 'row' }}>
          {THEME_MAP.id.map((item) => (
            <IconComponent key={item} type='id' name={item} size={'large'} />
          ))}
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Checkbox
        </Typography>
        <WrapperMin sx={{ color: CSS_VARS.palette.accentGreenLight, flexDirection: 'row' }}>
          {THEME_MAP.checkbox.map((item) => (
            <IconComponent key={item} type={'checkbox'} name={item} size={'large'} color='textPrimaryLight' />
          ))}
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Loading
        </Typography>
        <WrapperMin sx={{ color: CSS_VARS.palette.accentBlueLight, flexDirection: 'row' }}>
          {THEME_MAP.loading.map((item) => (
            <IconComponent key={item} type={'loading'} name={item} size={'large'} color='textPrimaryLight' />
          ))}
          {THEME_MAP.loading.map((item) => (
            <IconComponent key={item} type={'loading'} name={item} size={'large'} color='accentBlueLight' />
          ))}
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Logo
        </Typography>
        <WrapperMin sx={{ flexDirection: 'row' }}>
          {THEME_MAP.logo.map((item) => (
            <IconComponent key={item} type={'logo'} name={item} size={'large'} color='textPrimaryLight' />
          ))}
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          All Palette Colors
        </Typography>
        <WrapperMin sx={{ flexDirection: 'row' }}>
          {Object.keys(CSS_VARS.palette).map((item) => (
            <IconComponent key={item} type={'logo'} name={'Jenesei'} size={'large'} color={item as IThemePalette} />
          ))}
        </WrapperMin>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          All Sizes
        </Typography>
        <WrapperBig>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              small
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'small'} color='textPrimaryLight' />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              mediumSmall
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'mediumSmall'} color='textPrimaryLight' />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              medium
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'medium'} color='textPrimaryLight' />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              largeMedium
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'largeMedium'} color='textPrimaryLight' />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              large
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'large'} color='textPrimaryLight' />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              100%
            </Typography>
            <WrapperMin sx={{ width: '100px', height: '100px' }}>
              <IconComponent type={'logo'} name={'Jenesei'} size={'100%'} color='textPrimaryLight' />
            </WrapperMin>
          </WrapperMin>
        </WrapperBig>
      </WrapperBig>
      <WrapperBig sx={{ flexDirection: 'column' }}>
        <Typography
          sx={{
            variant: 'title-2',
            color: 'textPrimaryLight',
          }}
        >
          Other
        </Typography>
        <WrapperBig>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              Custom color
            </Typography>
            <IconComponent
              type={'logo'}
              name={'Jenesei'}
              size={'medium'}
              style={{
                color: 'red',
              }}
            />
          </WrapperMin>
          <WrapperMin sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                variant: 'title-2',
                color: 'textPrimaryLight',
              }}
            >
              Turn
            </Typography>
            <IconComponent type={'logo'} name={'Jenesei'} size={'medium'} color='textPrimaryLight' turn={90} />
          </WrapperMin>
        </WrapperBig>
      </WrapperBig>
    </WrapperBig>
  );
};

export const Collection = {
  render: () => <CollectionWrapper />,
};

type Story = StoryObj<IIcon>;

export const Index: Story = {
  args: {
    type: 'logo',
    name: 'Jenesei',
    size: 'medium',
    color: 'textPrimaryLight',
  },
};
