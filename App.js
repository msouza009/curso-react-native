import React, { Component } from 'react';
import { View, Text , Image } from 'react-native';

class App extends Component {
  render() {

    let nome = 'Dou UM HELP!';
    let img = 'https://bandalheira.cdn.magazord.com.br/img/2022/05/produto/6762/plc-0509-placa-decorativa-bmw-logo-2.jpg?ims=fit-in/1300x1200'


    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu primeiro app</Text>
        <Text style={{ color: 'green', fontSize: 25, margin: 15 }}>Matheus Souza</Text>
        <Image 
          source={{ uri: img }}
          style={{ width: 300, height: 300, alignItems: 'center', }}
        />

      <Text style={{fontSize: 30, color: 'yellow', backgroundColor: 'black', textAlign: 'center'}}> {nome} </Text>

      </View>
    );
  }
}

export default App;