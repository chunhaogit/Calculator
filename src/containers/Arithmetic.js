import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {number, del, clear} from '../store/actions';
import styles from '../style/style';

const arithmeticPads = ['CE', 'DEL', '÷', 'x', '-', '+'];

const Arithmetic = () => {
  const dispatch = useDispatch();
  const calculator = useSelector((state) => state.calculator);
  const sequence = calculator.sequence;

  const handlePress = (arithmetic) => {
    if (arithmetic === 'CE') {
      return dispatch(clear());
    }
    if (arithmetic === 'DEL') {
      return dispatch(del());
    } else {
      const lastString = sequence.charAt(sequence.length - 1);
      if (
        lastString === '÷' ||
        lastString === 'x' ||
        lastString === '-' ||
        lastString === '+'
      ) {
        return;
      }
      return dispatch(number(arithmetic));
    }
  };
  return (
    <View style={styles.arithmeticWrapper}>
      {arithmeticPads.map((arithmetic) => (
        <TouchableOpacity
          key={arithmetic}
          style={styles.symbolWrapper}
          onPress={() => handlePress(arithmetic)}>
          <Text style={styles.arithmeticText}>{arithmetic}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Arithmetic;
