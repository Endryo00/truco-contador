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

  const [numero2, setNumero2] = useState(0)

  const aumentarNumero2 = () => {
    setNumero2(numero2 + 1)
  }
  const diminuirNumero2 = () => {
    setNumero2(numero2 - 1)
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
      <Text> NOIS </Text>
      <Text>{numero}</Text>
      <View style={styles.containerBotoes}>
        <Button title="+" color={"#33ff00"} onPress={aumentarNumero} />
        <Button title="-" color={"#ff0000"} onPress={diminuirNumero} />
      </View>

      <Text> ELES </Text>
      <Text>{numero2}</Text>
      <View style={styles.containerBotoes}>
        <Button title="+" color={"#33ff00"} onPress={aumentarNumero2} />
        <Button title="-" color={"#ff0000"} onPress={diminuirNumero2} />
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
    justifyContent: 'space-between',
    marginTop: 20,
    width: '20%',
  },
});
