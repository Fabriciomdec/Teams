
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import * as StyledNewGroup from "./styles";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

export function NewGroup() {
  const [group, setGroup] = useState<string>('')

  const navigation = useNavigation();
  function handleNewGroup() {
    navigation.navigate('players', { group })
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
        <Input 
        placeholder="Digite o nome da turma"
        onChangeText={setGroup}
        />
        <Button title="Criar" style={{marginTop: 20}} onPress={handleNewGroup}/>
      </StyledNewGroup.Content>
    </StyledNewGroup.Container>
  );
}
