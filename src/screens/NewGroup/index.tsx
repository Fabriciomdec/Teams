import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import * as StyledNewGroup from "./styles";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState<string>("");

  const navigation = useNavigation();

  async function handleNewGroup() {
    if (group.trim().length === 0) {
      return Alert.alert("Novo Grupo", "Informe o nome da turma");
    }
    try {
      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo.");
      }
    }
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
        <Input placeholder="Digite o nome da turma" onChangeText={setGroup} />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </StyledNewGroup.Content>
    </StyledNewGroup.Container>
  );
}
