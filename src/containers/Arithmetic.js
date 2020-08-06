import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {number, equal, clearEntry} from '../store/actions';
import styles from '../style/style';

const arithmeticPads = ['÷', 'x', '-', '+', '='];

const Arithmetic = () => {
  const dispatch = useDispatch();
  const calculator = useSelector((state) => state.calculator);
  const sequence = calculator.sequence;

  const equalFunc = () => {
    const arr = [];
    let result = 0;
    let newSequence = sequence;
    let newVal = 0;

    while (newSequence.length > 0) {
      // 判斷小數點前是否有零
      if (newSequence[0] === '.') {
        let num = parseFloat(newSequence);
        arr.push(num);
        newSequence = newSequence.substring((num + '').length - 1);
      } else {
        let num = parseFloat(newSequence);
        arr.push(num);
        newSequence = newSequence.substring((num + '').length);
      }
      if (newSequence[0]) {
        arr.push(newSequence[0]);
        newSequence = newSequence.substring(1);
      }
    }

    while (arr.includes('x') || arr.includes('÷')) {
      arr.forEach((item, idx) => {
        if (item === 'x') {
          newVal = arr[idx - 1] * arr[idx + 1];
          arr.splice(idx - 1, 3, newVal);
        } else if (item === '÷') {
          newVal = arr[idx - 1] / arr[idx + 1];
          arr.splice(idx - 1, 3, newVal);
        }
      });
    }
    while (arr.includes('+') || arr.includes('-')) {
      arr.forEach((item, idx) => {
        if (item === '+') {
          newVal = arr[idx - 1] + arr[idx + 1];
          arr.splice(idx - 1, 3, newVal);
        } else if (item === '-') {
          newVal = arr[idx - 1] - arr[idx + 1];
          arr.splice(idx - 1, 3, newVal);
        }
      });
    }

    result = parseFloat(arr[0].toFixed(12));
    return result;
  };

  const handlePress = (arithmetic) => {
    const lastString = sequence.charAt(sequence.length - 1);
    if (
      (sequence.length === 0 && arithmetic !== '-') ||
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
      return dispatch(equal(equalFunc()));
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
