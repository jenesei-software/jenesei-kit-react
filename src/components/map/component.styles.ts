import styled, { css } from 'styled-components';

import { MapProps } from '.';

export const MapWrapper = styled.div<{ style?: MapProps<object>['style'] }>`
  display: contents;
  .leaflet-popup-content-wrapper {
    ${(props) => props.style?.popupWrapper && css(props.style.popupWrapper)}
  }
  .leaflet-popup-content {
    max-width: fit-content;
    width: 100%;
    ${(props) => props.style?.popupContent && css(props.style.popupContent)}
  }
  .leaflet-div-icon {
    background: none;
    border: none;
  }
`;
