import React, { memo } from 'react';
import styled from 'styled-components';
import Image from 'next/image'
const Img = styled(Image).attrs(props => ({
  src: props.src || "/illustration-welcome.png",
  width: props.width || "100%",
  height: props.height || "auto"
}))`
  position: ${(props: Props) => props.position || "relative"};
  max-width: ${props => props.maxWidth || "none"};
  min-width: ${props => props.minWidth || "none"};
  max-height: ${props => props.maxHeight || "none"};
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
  readonly padding? : string,
  readonly border? : string,
  readonly borderRadius? : string,
  readonly margin? : string,
  readonly hoverBgColor? : string,
  readonly hoverBorder? : string,
  readonly zIndex?: string
  readonly shadow?: string;
}

export default memo(Img);
