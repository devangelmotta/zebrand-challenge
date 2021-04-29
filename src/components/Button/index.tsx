import React, { memo } from 'react';
import styled from 'styled-components';

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
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Button = styled.button`
  display: ${(props: Props) => props.display || "flex"};
  display: ${(props: Props) => props.position || "relative"};
  flex-direction: ${props => props.flexDirection || "row"};
  justify-content: ${props => props.justifyContent || "space-between"};
  align-content: ${props => props.alignContent || "center"};
  align-items: ${props => props.alignItems || "center"};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "auto"};
  background-color: ${props => props.backgroundColor || "transparent"};
  border: ${props => props.border || "1px solid #fff"};
  border-radius: ${props => props.borderRadius || "0"};
  padding: ${props => props.padding || "0 0 0 0"};
  margin: ${props => props.margin || "0 0 0 0"};
  z-index: ${props => props.zIndex || "auto"};
    &:hover{
      //
    }
  `;

export default memo(Button);

