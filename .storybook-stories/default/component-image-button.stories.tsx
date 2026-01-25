import type { Meta, StoryObj } from '@storybook/react-vite';
import 'styled-components';

import { ImageButton } from '@local/components/image-button';

const meta: Meta<typeof ImageButton> = {
  component: ImageButton,
  title: 'Component/Image/Button',
};

export default meta;

type Story = StoryObj<typeof ImageButton>;

export const Button: Story = {
  args: {
    button: {
      genre: 'blackBorder',
      size: 'medium',
      children: 'Add Image',
    },
    dialog: {
      button: {
        genre: 'blackBorder',
        size: 'medium',
      },
      buttonDelete: {
        genre: 'blackBorder',
        size: 'medium',
      },
    },
    locale: {
      buttonAdd: 'Add Image',
      dialogSave: 'Save',
      dialogCancel: 'Cancel',
      dialogAddImage: 'Add',
      dialogDeleteImage: 'Delete',
    },
    imageSettings: {
      aspect: 2 / 2,
      maxCount: 1,
      maxSize: 5 * 1024 * 1024, // 5 MB
    },
    onSave(files) {
      if (files) {
        files.forEach((file) => {
          console.log(`Added file: ${file.name}, size: ${file.isNew} bytes`);
        });
      } else {
        console.log('No files added');
      }
    },
  },
};
