// Lucas Randal e Gabriel Reis
import React, { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Cadastro({ navigation }) {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const redirecionarLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Image source={require("../assets/logo/logo-syncro.png")} style={styles.logo} />

        <TextInput
          style={styles.campo}
          placeholder="Nome completo"
          placeholderTextColor="#555"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
        />

        <TextInput
          style={styles.campo}
          placeholder="E-mail"
          placeholderTextColor="#555"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.campo}
          placeholder="Senha"
          placeholderTextColor="#555"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <Pressable style={styles.botao} onPress={redirecionarLogin}>
          <Text style={styles.textoBotao}>Criar conta</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 60,
  },
  logo: {
    width: 320,
    height: 320,
    resizeMode: "contain",
    marginBottom: -60,
    marginTop: 70,
  },
  campo: {
    position: 'relative',
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    marginBottom: 20,
    width: 300,
    height: 40,
    paddingLeft: 10,
    borderRadius: 8,
    shadowColor: "#c1c1c1",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
  },
  botao: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 30,
    marginTop: 10,
    borderColor: '#2ca8b8',
    borderWidth: 2,
  },
  textoBotao: {
    color: "#2ca8b8",
    fontSize: 16,
    fontWeight: "bold",
  },
});
