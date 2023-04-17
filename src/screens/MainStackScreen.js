import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./home/HomeScreen";
import { SearchScreen } from "./Search/SearchScreen";
import { ProfileScreen } from "./Profile/ProfileScreen";

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => {
  return {};
};

export const MainStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {/* AGREGAR RUTAS PARA LAS PANTALLAS */}
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Buscar" component={SearchScreen} />
      <Tab.Screen name="Usuario" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
