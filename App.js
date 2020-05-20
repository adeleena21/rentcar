import React from 'react';
import {View} from 'react-native';
import Header from './src/Header';
import FotoBar from './src/FotoBar';

const App = () => {
    return (
      <View>
        <Header headerText= {'Rental Mobil Jakarta'} />
        <FotoBar/>
      </View>
    );
  };

export default App;