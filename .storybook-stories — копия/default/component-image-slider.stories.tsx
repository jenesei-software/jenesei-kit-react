import { Button } from '@local/components/button';
import { ImageSlider as SliderComponent } from '@local/components/image-slider';
import { IMAGES } from '@local/components/image-slider/component.constants';
import { Stack } from '@local/components/stack';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof SliderComponent> = {
  component: SliderComponent,
  title: 'Component/Image/ImageSlider',
};

export default meta;
type Story = StoryObj<typeof SliderComponent>;

export const ImageSlider: Story = {
  args: {
    genre: 'realebail-white',
    size: 'medium',
    images: IMAGES,
    children: () => (
      <Stack
        sx={{
          default: {
            justifyContent: 'flex-end',
            padding: '5px',
            flexGrow: 1,
          },
        }}
      >
        <Button
          isHiddenBorder
          genre='productBorder'
          isWidthAsHeight
          size='medium'
          icons={[
            {
              type: 'id',
              name: 'Heart',
            },
          ]}
        />
      </Stack>
    ),
    locales: {
      failedToLoad: 'Failed to load image',
      noImagesAvailable: 'No images available',
    },
    imageSettings: {
      aspect: 1.5,
    },
    propsStack: {
      sx: {
        default: {
          height: '350px',
          width: '500px',
        },
      },
    },
  },
};
