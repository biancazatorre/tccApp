import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';  
import { useState } from 'react';

// Criando o Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  const [size, setSize] = useState(10);

  // Componente da tela principal
  function MainScreen({ navigation }) {
    function enterApp() {
      navigation.navigate('Home');  // Navega para a página "Home"
    }

    return (
      <ImageBackground 
        source={require('./src/assets/fundo.png')}  // Caminho da sua imagem de fundo
        style={styles.background}   // Estilo para cobrir a tela toda
      > 
        <View style={styles.container}>
          <Image 
            source={require("./src/assets/logo.png")}
            style={styles.logo}
          />

          <TouchableOpacity style={styles.button} onPress={enterApp}>
            <Text style={styles.buttonText}>Vem conhecer</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Tela principal */}
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        {/* Página Home */}
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,    // A imagem de fundo ocupa toda a tela
    resizeMode: 'cover',  // A imagem cobre toda a área
  },
  
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    marginBottom: 60,
    width: 300,   // Defina a largura da imagem
    height: 300,  // Defina a altura da imagem
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: "#E359EC",
    width: "40%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  }
});
