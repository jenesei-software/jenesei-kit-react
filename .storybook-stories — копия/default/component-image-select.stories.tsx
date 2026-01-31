import { ImageSelect as ImageSelectComponent } from '@local/components/image-select';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ImageSelectComponent> = {
  component: ImageSelectComponent,
  title: 'Component/Image/Select',
};

export default meta;
type Story = StoryObj<typeof ImageSelectComponent>;

export const Select: Story = {
  args: {
    propsButton: {
      default: {
        genre: 'product',
        size: 'medium',
      },
      delete: {
        genre: 'blackBorder',
        size: 'medium',
      },
    },
    sx: {
      default: {
        width: '100%',
      },
    },
    onChange(images) {
      console.log('Selected images:', images);
    },
    genre: 'realebail-white',
    size: 'medium',
    imageSettings: {
      aspect: 900 / 600,
      maxSize: 5 * 1024 * 1024,
      maxCount: 5,
      width: 200,
      height: 200,
    },
    isContain: true,
    locale: {
      buttonAdd: 'Add Image',
      dialogSave: 'Save',
      dialogCancel: 'Cancel',
      dialogAddImage: 'Add',
      dialogDeleteImage: 'Delete',
      imageFallback: 'Fallback image',
      buttonReset: 'Reset image',
      dragAndDrop: 'Drag and drop your files here',
    },
    defaultImages: [],
    images: [
      {
        id: 0,
        index: 0,
        isNew: false,
        url: 'https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg.webp?itok=46pJYz8v',
      },
    ],
  },
};
