import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native'


export default function App(){
  return(
    <View style={styles.container}>
      
      <Text>descobrir como mudar o fundo vai direto assim?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',

  background:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',    
    width: '100%',
    height: '100%',
  }
}})