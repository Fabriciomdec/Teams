import { useState } from "react";
import { FlatList } from "react-native";

import * as StyledPlayers from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

export function Players() {
  const [team, setTeam] = useState<string>("Time A");
  const [countPlayers, setCountPlayers] = useState<string[]>([])

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
      <StyledPlayers.HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <StyledPlayers.PlayersNumber>{countPlayers.length}</StyledPlayers.PlayersNumber>
      </StyledPlayers.HeaderList>
    </StyledPlayers.Container>
  );
}
