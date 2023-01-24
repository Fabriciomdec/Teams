
import { useNavigation } from "@react-navigation/native";

import * as StyledNewGroup from "./styles";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

export function NewGroup() {
  const navigation = useNavigation();
  function handleNewGroup() {
    navigation.navigate('players', {group: 'Teste'})
  }
  return (
    <StyledNewGroup.Container>
      <Header showBackButton />
      <StyledNewGroup.Content>
        <StyledNewGroup.Icon />
        <Highlight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Digite o nome da turma"/>
        <Button title="Criar" style={{marginTop: 20}} onPress={handleNewGroup}/>
      </StyledNewGroup.Content>
    </StyledNewGroup.Container>
  );
}
