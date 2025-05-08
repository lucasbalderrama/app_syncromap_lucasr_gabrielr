//Lucas Randal e Gabriel Reis
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const fazerLogin = () => {
        if (!email.includes('@')) {
            alert("Você não inseriu um email válido!");
            return;
        }

        if (password === '707070' && email === 'sesi@gmail.com') {
            navigation.navigate('Mapa');
        } else {
            Alert.alert("Atenção" , "Email ou senha inválidos!");
        }
    }

    const redirecionarCadastro = () => {
        navigation.navigate("Cadastro")
    }

    return (
        <>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo/logo-syncro.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                />
                <TouchableOpacity style={styles.button} onPress={fazerLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textCadastro}>
                <TouchableOpacity onPress={redirecionarCadastro}>
                    <Text style={styles.linkCadastro}>
                        Não tem uma conta? <Text style={styles.linkDestacado}>Cadastre-se</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginBottom: -50,
        marginTop: 50,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 20,
        width: 300,
        paddingLeft: 10,
        borderRadius: 8,
        zIndex: 10,
        shadowColor: "#c1c1c1",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.8,
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
        marginBottom: 50,
        marginTop: 20,
        shadowColor: "#2ca8b8",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.8,
        borderColor: '#2ca8b8',
        borderWidth: 2,
    },
    buttonText: {
        color: '#2ca8b8',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textCadastro: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: 30,
        marginBottom: 40,
    },

    linkCadastro: {
        fontSize: 16,
        color: '#000',
    },

    linkDestacado: {
        color: '#2c2dd7',
        textDecorationLine: 'underline',
    },
});

export default Login;