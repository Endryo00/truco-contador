import { StatusBar } from "expo-status-bar";
import { useState } from 'react'
import { Button, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native"

export default function App() {
  
  const [numero, setNumero] = useState(0)

  const aumentarNumero = () => {
    setNumero(numero + 1)
  }
  const diminuirNumero = () => {
    setNumero(numero - 1)
  }


  return (
    <View style={styles.container}>
      
      <Image source={require('./assets/logounipar.png')} 
        style={{
          width: 400,   
          height: 200,    
          resizeMode: 'contain', 
          position: 'absolute', 
          top: 50,
        }}
      /> 
      
      <Text style={styles.textoUm}>Contador Truco </Text>
      <Text>{numero}</Text>
      <View style={styles.containerBotoes}>
        <Button title="+" color={"#33ff00"} onPress={aumentarNumero} />
        <Button title="-" color={"#ff0000"} onPress={diminuirNumero} />
      </View>
      <StatusBar style="auto" />  
      

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  textoUm:{
    fontSize:35,
    marginTop:-200
  },
  containerBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Cria um espaço entre eles
    marginTop: 20, // Distância entre o número e os botões
    width: '20%', // Define uma largura para o grupo de botões não ficar grudado
  },
});
