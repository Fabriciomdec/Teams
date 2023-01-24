import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import * as StyledInput from "./styles";

export function Input({ ...rest }: TextInputProps) {
 const {COLORS} = useTheme()

  return (
  <StyledInput.Container 
  placeholderTextColor={COLORS.GRAY_300}
  {...rest}>

  </StyledInput.Container>
  );
}
