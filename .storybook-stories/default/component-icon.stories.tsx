import type { Meta, StoryObj } from '@storybook/react-vite'
import 'styled-components'

import { ENUM_ICON_CHECKBOX, ENUM_ICON_ID, ENUM_ICON_LOADING, ENUM_ICON_LOGO, Icon as IconComponent } from '@local/components/icon'
import { WrapperBig, WrapperMin } from './untils'
import { Typography } from '@local/components/typography'
import { FC } from 'react'
import { transformEnumToOptions } from '@local/functions'
import { IThemePaletteKeys, JeneseiPalette } from '@local/theme'

const meta: Meta<typeof IconComponent> = {
  component: IconComponent,
  title: 'Component/Icon'
}

export default meta

const IconWrapperAll: FC = () => {


  return (
    <WrapperBig sx={{ default: { flexDirection: 'row' } }}>
      <WrapperBig sx={{ default: { flexDirection: 'column' } }}>
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
        <WrapperMin>
          {Object.keys(ENUM_ICON_ID).map((item) => (
            <IconComponent type={'id'} name={item as keyof typeof ENUM_ICON_ID} size={'large'} primaryColor='black100' />)
          )}
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
          {Object.keys(ENUM_ICON_CHECKBOX).map((item) => (
            <IconComponent type={'checkbox'} name={item as keyof typeof ENUM_ICON_CHECKBOX} size={'large'} primaryColor='black100' />)
          )}
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
          {Object.keys(ENUM_ICON_LOADING).map((item) => (
            <IconComponent type={'loading'} name={item as keyof typeof ENUM_ICON_LOADING} size={'large'} primaryColor='black100' />)
          )}
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
          {Object.keys(ENUM_ICON_LOGO).map((item) => (
            <IconComponent type={'logo'} name={item as keyof typeof ENUM_ICON_LOGO} size={'large'} primaryColor='black100' />)
          )}
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
            <IconComponent type={'logo'} name={"Jenesei"} size={'large'} primaryColor={item as IThemePaletteKeys} />)
          )}
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
            <IconComponent type={'logo'} name={"Jenesei"} size={'small'} primaryColor='black100' />
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
            <IconComponent type={'logo'} name={"Jenesei"} size={'mediumSmall'} primaryColor='black100' />
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
            <IconComponent type={'logo'} name={"Jenesei"} size={'medium'} primaryColor='black100' />
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
            <IconComponent type={'logo'} name={"Jenesei"} size={'largeMedium'} primaryColor='black100' />
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
            <IconComponent type={'logo'} name={"Jenesei"} size={'large'} primaryColor='black100' />
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
              <IconComponent type={'logo'} name={"Jenesei"} size={'100%'} primaryColor='black100' />
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
            <IconComponent type={'logo'} name={"Jenesei"} size={'medium'} sx={{
              default: {
                color: 'red',
              }
            }} />
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
            <IconComponent type={'logo'} name={"Jenesei"} size={'medium'} primaryColor='black100' turn={90} />
          </WrapperMin>
        </WrapperBig>

      </WrapperBig>
    </WrapperBig>
  )
}


export const Icon = {
  render: () => <IconWrapperAll />,
}
