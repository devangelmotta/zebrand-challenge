import React, { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: ${(props: Props) => props.display || "flex"};
  position: ${props => props.position || "relative"};
  flex-direction: ${props => props.flexDirection || "column"};
  justify-content: ${props => props.justifyContent || "space-between"};
  align-content: ${props => props.alignContent || "center"};
  align-items: ${props => props.alignItems || "center"};
  width: ${props => props.width || "100%"};
  max-width: ${props => props.maxWidth || "none"};
  min-width: ${props => props.minWidth || "none"};
  height: ${props => props.height || "auto"};
  min-height: ${props => props.maxHeight || "none"};
  max-height: ${props => props.minHeight || "none"};
  background-color: ${props => props.backgroundColor || "transparent"};
  background: ${props => props.backgroundColor || ""};
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
  readonly minHeight? : string,
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

export default memo(Container);

