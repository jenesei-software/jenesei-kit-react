import { ButtonProps } from '@local/components/button';
import { ImageSelectItemProps } from '@local/components/image-select';
import { addSXProps } from '@local/styles/add';

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
