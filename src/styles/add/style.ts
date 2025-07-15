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

export const addColorTransition = css`
  transition:
    outline 0s,
    opacity ${(props) => props.theme.transition.default},
    background-color ${(props) => props.theme.transition.default},
    color ${(props) => props.theme.transition.default},
    box-shadow ${(props) => props.theme.transition.default},
    border-color ${(props) => props.theme.transition.default};
`;

export const addOutline = css`
  outline: 2px solid transparent;
  outline-offset: 1px;
  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.states.focus};
  }
`;
export const addOutlineChildren = css<{ $isReadOnly?: boolean }>`
  outline: 2px solid transparent;
  outline-offset: 1px;
  ${(props) =>
    !props.$isReadOnly &&
    css`
      &:has(:focus-visible) {
        outline: 2px solid ${(props) => props.theme.states.focus};
        outline-offset: 1px;
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
