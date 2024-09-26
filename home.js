import React from 'react';
import { View, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <ImageBackground 
      source={require('./src/assets/fundo.png')} 
      style={styles.background} 
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.icon}>
          <Icon name="bars" size={24} style={styles.iconColor} /> 
          </TouchableOpacity>


        <TextInput 
          style={styles.searchInput} 
          placeholder="Pesquisar..."
          placeholderTextColor="#999"
        />
        
        <TouchableOpacity style={styles.icon}>
          <Icon name="shopping-cart" size={24} style={styles.iconColor} /> 
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  icon: {
    padding: 10,
  },
  iconColor: {
    color: '#000', // Define a cor preta para os ícones
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
});

export default Home;
