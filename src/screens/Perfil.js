// Lucas Randal e Gabriel Reis
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

export default function Perfil({ navigation }) {
    const redirecionarMapa = () => {
        navigation.navigate("Mapa")
      };

    return (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.barraTopo}>
            <Pressable style={styles.voltarBotao} onPress={redirecionarMapa}>
              <Text style={styles.voltarTexto}>Voltar</Text>
            </Pressable>
          </View>
    
          <Text style={styles.titulo}>Perfil</Text>

          <Image source={require("../assets/imagens-gerais/default-profile.jpg")} style={styles.avatar} />
    
          <Pressable style={styles.fotoBotao}>
            <Text style={styles.fotoTexto}>Alterar Foto</Text>
          </Pressable>
    
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input} value="sesi@gmail.com"/>
    
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            value="707070"
            
          />
    
          <Pressable style={styles.destionosBotao} >
            <Text style={styles.destionosTexto}>Últimos destionos</Text>
          </Pressable>
    
          <Image
            style={styles.logo}
            source={require("../assets/logo/logo-syncro.png")}
          />
        </ScrollView>
      );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  barraTopo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3e3e3e",
    marginBottom: 20,
    marginTop: 30,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginBottom: 20,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3e3e3e",
    alignSelf: "flex-start",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f8f8f8",
    fontSize: 16,
    color: "#555",
  },
  voltarBotao: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    width: 100,
    alignItems: "center",
    borderColor: '#2ca8b8',
    borderWidth: 2,
  },
  voltarTexto: {
    color: "#2ca8b8",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  fotoBotao: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 15,
    width: 130,
    alignItems: "center",
    borderColor: '#2ca8b8',
    borderWidth: 2,
  },
  fotoTexto: {
    color: "#2ca8b8",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  destionosBotao: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 15,
    width: 200,
    alignItems: "center",
    borderColor: '#2ca8b8',
    borderWidth: 2,
  },
  destionosTexto: {
    color: "#2ca8b8",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  logo: {
    width: 300,
    height: 100,
  },
});
