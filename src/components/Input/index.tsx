import { TextInput } from "react-native";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import * as StyledInput from "./styles";

type PropsInput = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({inputRef, ...rest }: PropsInput) {
 const {COLORS} = useTheme()

  return (
  <StyledInput.Container 
  ref={inputRef}
  placeholderTextColor={COLORS.GRAY_300}
  {...rest}>

  </StyledInput.Container>
  );
}
