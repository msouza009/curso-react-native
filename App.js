import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {

  render() {

    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>

        <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{width: 50, height: 50,  backgroundColor: 'yellow'}}></View>
      </View>
    );
  }
}

export default App;