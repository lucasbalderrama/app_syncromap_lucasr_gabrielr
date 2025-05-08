import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
    const [location, setLocation] = useState(null);
    const [destination, setDestination] = useState('');

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') return;
            const loc = await Location.getCurrentPositionAsync({});
            setLocation(loc.coords);
        })();
    }, []);

    const handleNavigate = () => {
        if (!destination || !location) return;
        navigation.navigate('Rotas', { destination, origin: location });
    };

    const irPerfil = () => {
        navigation.navigate('Perfil');
    }

    return (
        <SafeAreaView style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: location?.latitude || 0,
                    longitude: location?.longitude || 0,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                {location && (
                    <Marker
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                        title="Você está aqui"
                    />
                )}
            </MapView>
            <TextInput
                style={styles.input}
                placeholder="Digite o destino"
                value={destination}
                onChangeText={setDestination}
            />
            <TouchableOpacity onPress={irPerfil} style={styles.iconePerfilContainer}>
                <Image
                    style={styles.iconePerfil}
                    source={require('../assets/imagens-gerais/default-profile.jpg')}
                />
            </TouchableOpacity>
            <Button title="Navegar" onPress={handleNavigate} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    input: {
        position: 'absolute',
        top: 40,
        left: 10,
        right: 56,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        elevation: 2,
    },
    iconePerfilContainer: {
        position: 'absolute',
        top: 40,
        right: 8,
        borderRadius: 250,
        overflow: 'hidden',
        width: 40,
        height: 40,
    },
    iconePerfil: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});