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

  const somarNois = (valor) => {
  setNumero(numero + valor);
};

const somarEles = (valor) => {
  setNumero2(numero2 + valor);
};



  return (
    <View style={styles.container}>
      
      <Image source={require('./assets/logounipar.png')} 
        style={styles.logo}/> 
      
      <Text style={styles.textoUm}>Contador Truco </Text>
      <Text> NOIS </Text>
      <Text>{numero}</Text>
      <View style={styles.containerBotoes}>
        <Button title="+" color={"#33ff00"} onPress={aumentarNumero} />
        <Button title="-" color={"#ff0000"} onPress={diminuirNumero} />
      </View>

      <View style={styles.containerTruco}>
        <Button title="Truco" color="#222" onPress={() => somarNois(3)} />
        <Button title="6" color="#222" onPress={() => somarNois(6)} />
        <Button title="9" color="#222" onPress={() => somarNois(9)} />
        <Button title="12" color="#222" onPress={() => somarNois(12)} />
      </View>

      <View style={styles.divisor} />

      <Text> ELES </Text>
      <Text>{numero2}</Text>
      <View style={styles.containerBotoes}>
        <Button title="+" color={"#33ff00"} onPress={aumentarNumero2} />
        <Button title="-" color={"#ff0000"} onPress={diminuirNumero2} />
      </View>


      <View style={styles.containerTruco}>
        <Button title="Truco" color="#222" onPress={() => somarEles(3)} />
        <Button title="6" color="#222" onPress={() => somarEles(6)} />
        <Button title="9" color="#222" onPress={() => somarEles(9)} />
        <Button title="12" color="#222" onPress={() => somarEles(12)} />
      </View>

      <StatusBar style="auto" />  
      

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: 220,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width:300,
    height:200,
    resizeMode: 'contain',
    marginTop: -200,
  },
  textoUm:{
    fontSize:35,
    paddingTop:'5%'
  },
  containerBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '20%',
  },
  containerTruco: {
    flexDirection: 'collum',
    justifyContent: 'space-between',
    width: '20%',
    marginBottom: 20,
  },
  divisor: {
    height: 1,
    backgroundColor: '#ccc',
    width: '80%',
    marginVertical: 15,
  }
});
