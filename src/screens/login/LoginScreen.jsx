import React, { useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../contexts/UserContext'
import { getUsers } from '../../api/user.service'
import { styles } from './LoginScreen.styles'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../utils/theme'


export const LoginScreen = () => {
    const navigation = useNavigation()
    const { setCurrentUser } = useContext(UserContext)
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const handleLogin = ({ username, password }) => {
        getUsers()
            .then(users => {
                const user = users.find((user) => (user.username === username && password === user.password))
                if (user !== undefined) {
                    setCurrentUser({ username, password })
                    navigation.navigate('Inicio')
                }
            })
            .catch(err => console.warn(err))
    }

    return (
        <View style={styles.container}>
            <Ionicons name="ios-happy" size={100} alignSelf="center" color={COLORS.orange} />
            <Text style={styles.title}>Inicio de Sesión</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder='Nombre de usuario'
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        autoCapitalize='none'
                    />
                )}
                name='username'
                rules={{ required: 'El nombre de usuario es requerido' }}
            />
            {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder='Contraseña'
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry
                    />
                )}
                name='password'
                rules={{ required: 'La constraseña es requerida' }}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLogin)}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}
