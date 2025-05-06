    import React from 'react';

    import { createNativeStackNavigator } from '@react-navigation/native-stack';

    import Perfil from '../screens/Perfil';
    import Login from '../screens/Login';
    import Cadastro from '../screens/Cadastro';
    import Mapa from '../screens/Mapa';
    import Rotas from '../screens/Rotas';

    const Stack = createNativeStackNavigator();

    export default function NativeStack() {
        return (
            <Stack.Navigator initialRouteName="Mapa" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Mapa" component={Mapa} />
                <Stack.Screen name="Perfil" component={Perfil} />
                <Stack.Screen name="Rotas" component={Rotas} />
            </Stack.Navigator>
        );
    }