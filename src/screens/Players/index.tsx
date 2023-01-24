import { useState } from "react";
import { FlatList } from "react-native";

import * as StyledPlayers from "./styles";
import { useRoute } from "@react-navigation/native";

import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

type RouteParams = {
  group?: string;
}

export function Players() {
  const [team, setTeam] = useState<string>("Time A");
  const [players, setPlayers] = useState<string[]>(['TESTE', 'Rodrigo', 'Neston'])

  const route = useRoute();
  const { group } = route.params as RouteParams

  return (
    <StyledPlayers.Container>
      <Header showBackButton />
      <Highlight
        title={group}
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
        <StyledPlayers.PlayersNumber>{players.length}</StyledPlayers.PlayersNumber>
      </StyledPlayers.HeaderList>
      <FlatList 
      data={players}
      keyExtractor={item => item}
      renderItem={({item}) => (<PlayerCard name={item} onRemove={() => {console.log("press")}}/>)}
      ListEmptyComponent={() => (
        <ListEmpty message="Não há pessoas nesse time" />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        {paddingBottom: 100},
        players.length === 0 && {flex: 1}
      ]}
      />
      <Button title="Remover turma" type="REMOVE"/>
    </StyledPlayers.Container>
  );
}
