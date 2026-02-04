import { addSX } from '@local/theme';

import styled from 'styled-components';

import { SeparatorWrapperProps } from './component.types';

const DEFAULT_SEPARATOR_SIZE = '1px';

export const SeparatorWrapper = styled.div<SeparatorWrapperProps>`
  flex-grow: 1;
  flex-shrink: 1;

  width: ${(props) => (props.$type === 'horizontal' ? 'auto' : props.$thickness || DEFAULT_SEPARATOR_SIZE)};
  max-width: ${(props) => (props.$type === 'horizontal' ? '100%' : props.$thickness || DEFAULT_SEPARATOR_SIZE)};
  height: ${(props) => (props.$type === 'vertical' ? 'auto' : props.$thickness || DEFAULT_SEPARATOR_SIZE)};
  max-height: ${(props) => (props.$type === 'vertical' ? '100%' : props.$thickness || DEFAULT_SEPARATOR_SIZE)};

  background: ${(props) => props.$color && props.theme.palette[props.$color]};
  border-radius: ${(props) => props.$radius || '0px'};
  ${addSX};
`;
