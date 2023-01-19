import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import * as StyledPlayers from "./styles";

export function Players() {
  return (
    <StyledPlayers.Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe as turmas"
      />
      <StyledPlayers.Form>
      <Input placeholder="Nome da pessoa" autoCorrect={false} />
      <ButtonIcon icon="add" />
      </StyledPlayers.Form>
    </StyledPlayers.Container>
  );
}
