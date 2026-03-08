import { addSX, addTransition } from '@local/theme';

import styled from 'styled-components';

import { ImageIMGProps } from './component.types';

export const ImageIMG = styled.img<ImageIMGProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.$isPending ? 0 : 1)};
  ${addTransition};
  ${addSX};
`;
