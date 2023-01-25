import { useRef, useState } from "react";
import { Alert, FlatList} from "react-native";
import { useEffect } from "react";
import { TextInput } from "react-native";

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
import { playerGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";

type RouteParams = {
  group: string;
};

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState<string>("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddNewPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "Nova Pessoa",
        "Informe o nome da pessoa para adicionar."
      );
    }

    const NewPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(NewPlayer, group);
      newPlayerNameInputRef.current?.blur();
      setNewPlayerName("");
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Pessoa", error.message);
      } else {
        Alert.alert(
          "Nova Pessoa",
          "Não foi possível adicionar uma nova pessoa."
        );
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playerGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      Alert.alert("Pessoas", "Não foi possível carregar as pessoas");
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <StyledPlayers.Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle="adicione a galera e separe as turmas"
      />
      <StyledPlayers.Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          onSubmitEditing={handleAddNewPlayer}
          returnKeyType='done'
        />
        <ButtonIcon icon="add" onPress={handleAddNewPlayer} />
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
        <StyledPlayers.PlayersNumber>
          {players.length}
        </StyledPlayers.PlayersNumber>
      </StyledPlayers.HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => {
              console.log("press");
            }}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover turma" type="REMOVE" />
    </StyledPlayers.Container>
  );
}
