import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainStackScreen } from './src/screens/MainStackScreen';
import { NavigationContainer } from '@react-navigation/native';

const MainStack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
          <MainStack.Navigator screenOptions={{ headerShown: false }}>
            {/* //Pantallas con Tab */}
            <MainStack.Screen name='Main' component={MainStackScreen} />
            {/* //Pantallas sin Tab */}

          </MainStack.Navigator>
        </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
