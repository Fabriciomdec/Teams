import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Groups } from "@screens/Groups";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="groups" component={Groups} />
      <Screen name="groups" component={NewGroup} />
      <Screen name="groups" component={Players} />
    </Navigator>
  );
}
