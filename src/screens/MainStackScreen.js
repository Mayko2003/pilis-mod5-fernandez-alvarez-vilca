import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./home/HomeScreen";
import { SearchScreen } from "./Search/SearchScreen";
import { ProfileScreen } from "./Profile/ProfileScreen";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Inicio: "home",
  Perfil: "at-sharp",
  Buscar: "search-circle-outline",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      (<Entypo name={iconName} size={size} color={color} />),
      (<Ionicons name={iconName} size={size} color={color} />)
    ),
    tabBarActiveTintColor: "blue",
    tabBarInactiveTintColor: "gray",
  };
};

export const MainStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {/* AGREGAR RUTAS PARA LAS PANTALLAS */}
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Buscar" component={SearchScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
