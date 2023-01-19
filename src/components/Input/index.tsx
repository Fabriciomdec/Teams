import { TextInputProps } from "react-native";

import * as StyledInput from "./styles";

export function Input({ ...rest }: TextInputProps) {
  return (
  <StyledInput.Container {...rest}>
    
  </StyledInput.Container>
  );
}
