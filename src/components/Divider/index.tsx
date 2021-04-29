import React, { memo } from 'react';
import styled from 'styled-components';

const Divider = styled.div`
  display: ${(props: Props) => props.display || "flex"};
  position: ${props => props.position || "relative"};
  width: ${props => props.width || "1px"};
  max-width: ${props => props.maxWidth || "none"};
  min-width: ${props => props.minWidth || "none"};
  height: ${props => props.height || "1px"};
  max-height: ${props => props.maxHeight || "none"};
  background-color: ${props => props.color || "#ddd"};
  padding: ${props => props.padding || "0 0 0 0"};
  border: ${props => props.border || "0 solid transparent"};
  border-radius: ${props => props.borderRadius || "0"};
  margin: ${props => props.margin || "0 0 0 0"};
  z-index: ${props => props.zIndex || "auto"};
  -webkit-box-shadow: ${props => props.shadow || "0px 0px 0px 0px rgba(0,0,0,0)"}; 
  -moz-box-shadow: ${props => props.shadow || "0px 0px 0px 0px rgba(0,0,0,0)"}; 
  box-shadow: ${props => props.shadow || "0px 0px 0px 0px rgba(0,0,0,0)"}; 
  `;

interface Props {
  readonly display? : string,
  readonly flexDirection? : string,
  readonly justifyContent? : string,
  readonly position? : string,
  readonly alignContent? : string,
  readonly alignItems? : string,
  readonly width? : string,
  readonly height? : string,
  readonly maxHeight? : string,
  readonly minWidth? : string,
  readonly maxWidth? : string,
  readonly backgroundColor? : string,
  readonly background? : string,
  readonly padding? : string,
  readonly border? : string,
  readonly borderRadius? : string,
  readonly margin? : string,
  readonly hoverBgColor? : string,
  readonly hoverBorder? : string,
  readonly zIndex?: string
  readonly shadow?: string;
}

export default memo(Divider);

