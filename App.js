import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackScreen } from "./src/screens/MainStackScreen";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./src/contexts/UserContext";
import { EventDetailScreen } from "./src/screens/EventDetail/EventDetailScreen";
import { EventDetailWebScreen } from "./src/screens/EventDetail/EventDetailWebScreen";

const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <MainStack.Navigator screenOptions={{ headerShown: false }}>
            {/* //Pantallas con Tab */}
            <MainStack.Screen name="Main" component={MainStackScreen} />
            {/* //Pantallas sin Tab */}
            <MainStack.Screen name="EventDetail" component={EventDetailScreen} />
            <MainStack.Screen name="EventDetailWeb" component={EventDetailWebScreen} />
          </MainStack.Navigator>
        </NavigationContainer>
      </UserProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
