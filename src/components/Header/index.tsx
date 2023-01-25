import React from "react";
import { useNavigation } from "@react-navigation/native";

import * as StyleHeader from "./styles";
import logoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean
}

export const Header: React.FC<Props> = ({showBackButton = false}) => {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
  }

  return (
    <StyleHeader.Container>
      {
        showBackButton && 
        <StyleHeader.BackButton onPress={handleGoBack}>
        <StyleHeader.BackIcon />
      </StyleHeader.BackButton>
      }
      <StyleHeader.Logo source={logoImg} />
    </StyleHeader.Container>
  );
};
