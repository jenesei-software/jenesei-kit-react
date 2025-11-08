import { Button } from '@local/components/button/export';
import { LIST_IMAGE_SUPPORTED_FORMAT_FOR_INPUT } from '@local/consts';
import { useImageCrop } from '@local/hooks/use-image-crop';

import { FC, useCallback, useRef } from 'react';

import { ImageButtonProps } from '.';

export const ImageButton: FC<ImageButtonProps> = (props) => {
  const refInput = useRef<HTMLInputElement | null>(null);

  const handleOpenFileDialog = useCallback(() => {
    refInput.current?.click();
  }, []);

  const { handleAddFiles } = useImageCrop({
    onSave: props.onSave,
    locale: props.locale,
    dialog: props.dialog,
    imageSettings: props.imageSettings,
    refInput: refInput,
  });

  return (
    <>
      <Button
        {...props.button}
        onClick={(e) => {
          props.button.onClick?.(e);
          handleOpenFileDialog();
        }}
      >
        {props.button.children || props.locale.buttonAdd}
      </Button>
      <input
        ref={refInput}
        type='file'
        accept={LIST_IMAGE_SUPPORTED_FORMAT_FOR_INPUT}
        multiple
        style={{ display: 'none' }}
        onChange={(e) => {
          if (e.target.files) handleAddFiles(e.target.files);
        }}
      />
    </>
  );
};
