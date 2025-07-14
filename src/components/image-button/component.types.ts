import { addSXProps } from '@local/styles/sx';

import { ButtonProps } from '../button';
import { ImageSelectItemProps } from '../image-select';

export interface ImageButtonProps extends addSXProps {
  button: ButtonProps;

  dialog: {
    button: ButtonProps;
    buttonDelete: ButtonProps;
  };

  imageSettings: {
    maxSize: number;
    maxCount: number;
    aspect?: number;
  };

  locale: {
    buttonAdd: string;

    dialogSave: string;
    dialogCancel: string;
    dialogAddImage: string;
    dialogDeleteImage: string;
  };

  onSave: (files: ImageSelectItemProps[] | null) => void;
}
