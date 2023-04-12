import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const screenOptions = ({ route }) => {
    return {}
}

export const MainStackScreen = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            {/* AGREGAR RUTAS PARA LAS PANTALLAS */}
        </Tab.Navigator>
    )
}
