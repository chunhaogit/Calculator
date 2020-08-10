import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {number, clear, clearEntry, signChanger} from '../store/actions';
import {signChangerFunc} from '../utils/calculator';
import styles from '../style/style';

const numsPad = [
  {nums: ['CE', 'C', '+/-']},
  {nums: [7, 8, 9]},
  {nums: [4, 5, 6]},
  {nums: [1, 2, 3]},
  {nums: [0, '.']},
];

const Nums = () => {
  const calculator = useSelector((state) => state.calculator);
  const dispatch = useDispatch();
  const sequence = calculator.sequence;

  const handlePress = (num) => {
    if (num === 'CE') {
      return dispatch(clearEntry());
    }
    if (num === 'C') {
      return dispatch(clear());
    }
    if (num === '.' && sequence.charAt(sequence.length - 1) === '.') {
      return;
    }
    if (num === '+/-') {
      if (
        sequence.length === 0 ||
        isNaN(sequence.charAt(sequence.length - 1))
      ) {
        return;
      }
      return dispatch(signChanger(signChangerFunc(sequence)));
    }
    return dispatch(number(num));
  };

  return (
    <View style={styles.numsWrapper}>
      {numsPad.map(({nums}, idx) => (
        <View key={idx} style={styles.numsRow}>
          {nums.map((num) => {
            return (
              <TouchableOpacity
                key={num}
                style={[styles.symbolWrapper, num === 0 && styles.zero]}
                onPress={() => handlePress(num)}>
                <Text style={styles.numsText}>{num}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
};

export default Nums;
