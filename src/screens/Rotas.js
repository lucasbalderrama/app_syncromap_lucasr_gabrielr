import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Rotas({ }) {

    const navigation = useNavigation();

    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems:
                'center'
        }}>
            <Text>Rotas</Text>

            <Pressable onPress={() => navigation.navigate('Mapa')}> <Text>Mapa</Text> </Pressable>
        </View>
    );
}