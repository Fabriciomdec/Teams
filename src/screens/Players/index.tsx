import { useState } from "react";
import { Alert, FlatList } from "react-native";

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
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";

type RouteParams = {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState<string>("Time A");
  const [players, setPlayers] = useState<string[]>([])

  const route = useRoute();
  const { group } = route.params as RouteParams

  async function handleAddNewPlayer() {
    return console.log("fui chamado?")
    if(newPlayerName.trim().length === 0) {
      return Alert.alert("Nova Pessoa", "Informe o nome da pessoa para adicionar.");
    }

    const NewPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(NewPlayer, group)
      const players = await playersGetByGroup(group)
      console.log(group)
    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert("Nova Pessoa", error.message)
      } else {
        Alert.alert("Nova Pessoa", "Não foi possível adicionar uma nova pessoa.")
      } 
    }
  }

  return (
    <StyledPlayers.Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle="adicione a galera e separe as turmas"
      />
      <StyledPlayers.Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} onChangeText={setNewPlayerName}/>
        <ButtonIcon icon="add" onPress={() => console.log('estou sendo clicado?')}/>
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
