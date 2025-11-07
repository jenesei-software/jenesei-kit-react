import { AddDollarSign } from '@local/types';

import { css } from 'styled-components';

export const addRemoveScrollbar = css`
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-horizontal {
    display: none;
  }

  &::-webkit-scrollbar-vertical {
    display: none;
  }
  
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

export const addTransition = css`
  transition:
    outline 0s,
    opacity ${(props) => props.theme.transition.default},
    transform ${(props) => props.theme.transition.default},
    background-color ${(props) => props.theme.transition.default},
    height ${(props) => props.theme.transition.default},
    max-height ${(props) => props.theme.transition.default},
    width ${(props) => props.theme.transition.default},
    color ${(props) => props.theme.transition.default},
    visibility ${(props) => props.theme.transition.default},
    box-shadow ${(props) => props.theme.transition.default},
    border-color ${(props) => props.theme.transition.default},
    left ${(props) => props.theme.transition.default},
    right ${(props) => props.theme.transition.default},
    grid-template-areas ${(props) => props.theme.transition.default},
    grid-template-rows ${(props) => props.theme.transition.default},
    grid-template-columns ${(props) => props.theme.transition.default};
`;

export const addTransitionWithoutSize = css`
  transition:
    outline 0s,
    opacity ${(props) => props.theme.transition.default},
    transform ${(props) => props.theme.transition.default},
    background-color ${(props) => props.theme.transition.default},
    color ${(props) => props.theme.transition.default},
    visibility ${(props) => props.theme.transition.default},
    box-shadow ${(props) => props.theme.transition.default},
    border-color ${(props) => props.theme.transition.default},
    left ${(props) => props.theme.transition.default},
    right ${(props) => props.theme.transition.default},
    grid-template-areas ${(props) => props.theme.transition.default},
    grid-template-rows ${(props) => props.theme.transition.default},
    grid-template-columns ${(props) => props.theme.transition.default};
`;

export const addGridTransition = css`
  transition:
    grid-template-areas ${(props) => props.theme.transition.default},
    grid-template-rows ${(props) => props.theme.transition.default},
    grid-template-columns ${(props) => props.theme.transition.default};
`;

export const addFontSizeTransition = css<{ $isTransitionFontSize?: boolean }>`
  ${(props) =>
    props.$isTransitionFontSize &&
    css`
      transition: font-size ${(props) => props.theme.transition.default};
    `}
`;

export const addColorTransition = css`
  transition:
    outline 0s,
    opacity ${(props) => props.theme.transition.default},
    background-color ${(props) => props.theme.transition.default},
    color ${(props) => props.theme.transition.default},
    box-shadow ${(props) => props.theme.transition.default},
    border-color ${(props) => props.theme.transition.default};
`;

export type addOutlineProps = {
  isReadOnly?: boolean;
  isDisabledOutline?: boolean;
  isOutlineBoxShadow?: boolean;
};

export type addOutlinePropsDollar = AddDollarSign<addOutlineProps>;

export const addOutline = css<addOutlinePropsDollar>`
  outline: 0px solid transparent;
  ${(props) =>
    !props.$isReadOnly &&
    !props.$isDisabledOutline &&
    !props.$isOutlineBoxShadow &&
    css`
      outline: 2px solid transparent;
      outline-offset: 1px;
      &:focus-visible {
      outline: 2px solid ${(props) => props.theme.states.focus};
      }
  `};
    ${(props) =>
      !props.$isReadOnly &&
      !props.$isDisabledOutline &&
      props.$isOutlineBoxShadow &&
      css`
      outline: 1px solid transparent;
      outline-offset: 0px;
      &:focus-visible {
        outline: 1px solid #83b7e8;
        box-shadow: 0 1px 1px rgba(24,36,51, .06), 0 0 0 .25rem rgba(6,111,209, .25);
      }
  `};
`;

export const addOutlineChildren = css<addOutlinePropsDollar>`
  outline: 0px solid transparent;
  ${(props) =>
    (!props.$isReadOnly && !props.$isDisabledOutline && !props.$isOutlineBoxShadow) &&
    css`
      outline: 2px solid transparent;
      outline-offset: 1px;
      &:has(:focus-visible) {
        outline: 2px solid ${(props) => props.theme.states.focus};
        outline-offset: 1px;
      }
    `};
      ${(props) =>
        (!props.$isReadOnly && !props.$isDisabledOutline && props.$isOutlineBoxShadow) &&
        css`
      outline: 1px solid transparent;
      outline-offset: 0px;
      &:has(:focus-visible) {
       outline: 1px solid #83b7e8;
        box-shadow: 0 1px 1px rgba(24,36,51, .06), 0 0 0 .25rem rgba(6,111,209, .25);
      }
    `}
`;
export const addAlwaysOutline = css<{ $isShowAlwaysOutline?: boolean }>`
  ${(props) =>
    props.$isShowAlwaysOutline &&
    css`
      outline: 2px solid ${(props) => props.theme.states.focus};
      outline-offset: 1px;
    `}
`;
export const addRemoveOutline = css`
  outline: 0px solid transparent !important;
  outline-offset: 0px !important;
  &:focus-visible {
    outline: 0px solid ${(props) => props.theme.states.focus} !important;
  }
`;

export const addNiceNumber = css`
  font-variant-numeric: tabular-nums;
  font-feature-settings: 'tnum';
`;

export const addDisabled = css<{ $isDisabled?: boolean }>`
 ${(props) =>
   props.$isDisabled
     ? css`
          opacity: 0.5;
        `
     : css`
          opacity: 1;
        `};
`;
