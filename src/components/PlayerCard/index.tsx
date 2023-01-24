import { ButtonIcon } from "@components/ButtonIcon";
import * as StyledPlayerCard from "./styles";

type PlayerCardProps = {
  name: string;
  onRemove: () => void
};

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <StyledPlayerCard.Container>
        <StyledPlayerCard.Icon name="person" />
      <StyledPlayerCard.Name>{name}</StyledPlayerCard.Name>
      <ButtonIcon icon="close" type="REMOVE" onPress={onRemove}/>
    </StyledPlayerCard.Container>
  );
}
