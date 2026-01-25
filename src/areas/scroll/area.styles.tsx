import { Stack } from '@local/components/stack';

import styled, { css } from 'styled-components';

import { StyledScrollProps } from './area.types';


export const StyledScroll = styled(Stack)<StyledScrollProps>`
  overflow-x: hidden;
  overflow-y: hidden;

  ${(props) => css`
    ${
      props.$horizontal &&
      css`
      scrollbar-gutter: stable;
      overflow-x: auto;
    `
    }

    ${
      props.$vertical &&
      css`
      scrollbar-gutter: stable;
      overflow-y: auto;
    `
    }

    ${
      props.$isAlwaysHorizontal &&
      css`
      scrollbar-gutter: stable;
      overflow-x: scroll;
    `
    }

    ${
      props.$isAlwaysVertical &&
      css`
      scrollbar-gutter: stable;
      overflow-y: scroll;
    `
    }
  `}
`;
