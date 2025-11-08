import { addError } from '@local/components/error/export';
import { addSX } from '@local/styles/add/export';

import styled from 'styled-components';

import { RangeComponentProps, RangeThumbProps, RangeWrapperProps } from '.';

export const RangeWrapper = styled.div<RangeWrapperProps>`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  height: 20px;
  ${addError};
  ${addSX};
`;

export const RangeTrack = styled.div<RangeComponentProps>`
  position: absolute;
  height: 3px;
  width: 100%;
  padding: 0px 10px;
  border-radius: 2px;
`;
export const RangeThumb = styled.input<RangeThumbProps>`
  position: absolute;
  width: 100%;
  outline: none !important;
  pointer-events: none;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  left: 0;
  margin: 0;
  &::-webkit-slider-thumb {
    pointer-events: all;
    width: 16px;
    height: 16px;
    margin: 0;
    padding: 0;
    border-radius: 50%;
    background: ${(props) => props.$colorBackground};
    border: 3px ${(props) => props.$colorBorder} solid;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: 0px;
    transition:
      transform ${(props) => props.theme.transition.default},
      color ${(props) => props.theme.transition.default},
      background-color ${(props) => props.theme.transition.default};
    &:hover {
      transform: scale(1.2);
    }
  }
`;
