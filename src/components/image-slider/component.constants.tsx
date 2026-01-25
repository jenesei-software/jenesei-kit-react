import 'styled-components';

import { Button } from '@local/components/button';
import { Stack } from '@local/components/stack';

import { ImageSliderProps } from './component.types';


export const IMAGES: ImageSliderProps['images'] = [
  {
    id: 0,
    children: (
      <Stack
        sx={{
          default: {
            justifyContent: 'flex-start',
            padding: '5px',
            flexGrow: 1,
          },
        }}
      >
        <Button
          isHiddenBorder
          isDisabled
          genre='realebail-white'
          size='medium'
          sxTypography={{ default: { weight: 700 } }}
        >
          Los Angeles
        </Button>
      </Stack>
    ),
    imageSrc:
      'https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg.webp?itok=46pJYz8v',
  },
  {
    id: 1,
    children: (
      <Stack
        sx={{
          default: {
            justifyContent: 'flex-start',
            padding: '5px',
            flexGrow: 1,
          },
        }}
      >
        <Button
          isHiddenBorder
          isDisabled
          genre='realebail-white'
          size='medium'
          sxTypography={{ default: { weight: 700 } }}
        >
          Los Angeles
        </Button>
      </Stack>
    ),
    imageSrc:
      'https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 2,
    children: (
      <Stack
        sx={{
          default: {
            justifyContent: 'flex-start',
            padding: '5px',
            flexGrow: 1,
          },
        }}
      >
        <Button
          isHiddenBorder
          isDisabled
          genre='realebail-white'
          size='medium'
          sxTypography={{ default: { weight: 700 } }}
        >
          Los Angeles
        </Button>
      </Stack>
    ),
    imageSrc:
      'https://img.goodfon.com/original/2048x1319/8/29/ssha-kaliforniia-los-andzheles-los-angeles-doma-neboskreby-s.jpg',
  },
  {
    id: 3,
    children: (
      <Stack
        sx={{
          default: {
            justifyContent: 'flex-start',
            padding: '5px',
            flexGrow: 1,
          },
        }}
      >
        <Button
          isHiddenBorder
          isDisabled
          genre='realebail-white'
          size='medium'
          sxTypography={{ default: { weight: 700 } }}
        >
          Los Angeles
        </Button>
      </Stack>
    ),
    imageSrc:
      'https://images.pexels.com/photos/2231756/pexels-photo-2231756.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    id: 4,
    children: (
      <Stack
        sx={{
          default: {
            justifyContent: 'flex-start',
            padding: '5px',
            flexGrow: 1,
          },
        }}
      >
        <Button
          isHiddenBorder
          isDisabled
          genre='realebail-white'
          size='medium'
          sxTypography={{ default: { weight: 700 } }}
        >
          Los Angeles
        </Button>
      </Stack>
    ),
    imageSrc:
      'https://images.pexels.com/photos/1813157/pexels-photo-1813157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
];
