import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styles from '../style/style';

const Result = () => {
  const calculator = useSelector((state) => state.calculator);
  return (
    <View style={styles.resultWrapper}>
      <Text style={styles.calculatorText}>{calculator.sequence}</Text>
      <View style={styles.result}>
        <Text style={styles.resultText}>{calculator.result}</Text>
      </View>
    </View>
  );
};

export default Result;
