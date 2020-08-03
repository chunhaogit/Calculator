import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Nums from './src/containers/Nums';
import Arithmetic from './src/containers/Arithmetic';
import Result from './src/containers/Result';
import styles from './src/style/style';

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Result />
      <View style={styles.row}>
        <Nums />
        <Arithmetic />
      </View>
    </SafeAreaView>
  );
};

export default App;
