import React from "react";

import * as StyleHeader from "./styles";
import logoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean
}

export const Header: React.FC<Props> = ({showBackButton = false}) => {
  return (
    <StyleHeader.Container>
      {
        showBackButton && 
        <StyleHeader.BackButton>
        <StyleHeader.BackIcon />
      </StyleHeader.BackButton>
      }
      <StyleHeader.Logo source={logoImg} />
    </StyleHeader.Container>
  );
};
