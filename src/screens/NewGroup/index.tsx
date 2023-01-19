import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import * as StyledNewGroup from "./styles";

export function NewGroup() {
  return (
    <StyledNewGroup.Container>
      <Header showBackButton />
      <StyledNewGroup.Content>
        <StyledNewGroup.Icon />
        <Highlight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Button title="Criar" />
      </StyledNewGroup.Content>
    </StyledNewGroup.Container>
  );
}
