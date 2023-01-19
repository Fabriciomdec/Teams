
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import * as Group from "./styles";

export function Groups() {
  return (
    <Group.Container>
      <Header/>
      <Highlight title="Turmas" subtitle="jogue com a sua turma"/>

      <GroupCard title="Turma do Pagode"/>
    </Group.Container>
  );
}