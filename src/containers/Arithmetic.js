import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {number, equal, clearEntry} from '../store/actions';
import {equalFunc} from '../utils/calculator';
import styles from '../style/style';

const arithmeticPads = ['÷', 'x', '-', '+', '='];

const Arithmetic = () => {
  const dispatch = useDispatch();
  const calculator = useSelector((state) => state.calculator);
  const sequence = calculator.sequence;

  const handlePress = (arithmetic) => {
    const lastString = sequence.charAt(sequence.length - 1);
    if (
      sequence.length === 0 ||
      (lastString === '÷' && arithmetic === '=') ||
      (lastString === 'x' && arithmetic === '=') ||
      (lastString === '-' && arithmetic === '=') ||
      (lastString === '+' && arithmetic === '=')
    ) {
      return;
    }
    if (
      lastString === '÷' ||
      lastString === 'x' ||
      lastString === '-' ||
      lastString === '+'
    ) {
      dispatch(clearEntry());
      return dispatch(number(arithmetic));
    }
    if (arithmetic === '=') {
      return dispatch(equal(equalFunc(sequence)));
    }
    return dispatch(number(arithmetic));
  };
  return (
    <View style={styles.arithmeticWrapper}>
      {arithmeticPads.map((arithmetic) => (
        <TouchableOpacity
          key={arithmetic}
          style={[styles.symbolWrapper, styles.arithmetic]}
          onPress={() => handlePress(arithmetic)}>
          <Text style={styles.arithmeticText}>{arithmetic}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Arithmetic;
