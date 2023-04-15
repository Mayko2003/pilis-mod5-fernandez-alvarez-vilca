import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from './home/HomeScreen'

const Tab = createBottomTabNavigator()

const screenOptions = ({ route }) => {
    return {}
}

export const MainStackScreen = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            {/* AGREGAR RUTAS PARA LAS PANTALLAS */}
            <Tab.Screen name='Home' component={HomeScreen} />
        </Tab.Navigator>
    )
}
