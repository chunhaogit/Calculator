import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import Nums from './src/containers/Nums';
import Arithmetic from './src/containers/Arithmetic';
import Result from './src/containers/Result';
import styles from './src/style/style';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.wrapper}>
        <Result />
        <View style={styles.row}>
          <Nums />
          <Arithmetic />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
