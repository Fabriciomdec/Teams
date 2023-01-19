import { TouchableOpacityProps } from "react-native";
import * as StyledFilter from "./styles";

type FilterProps = TouchableOpacityProps &
  StyledFilter.FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <StyledFilter.Container isActive={isActive} {...rest}>
      <StyledFilter.Title>{title}</StyledFilter.Title>
    </StyledFilter.Container>
  );
}
