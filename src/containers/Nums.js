import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {number, equal} from '../store/actions';
import styles from '../style/style';

const numsPad = [
  {nums: [7, 8, 9]},
  {nums: [4, 5, 6]},
  {nums: [1, 2, 3]},
  {nums: ['.', 0, '=']},
];

const Nums = () => {
  const dispatch = useDispatch();
  const calculator = useSelector((state) => state.calculator);

  const equalFunc = () => {
    const sequence = calculator.sequence;
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

    while (arr.length > 2) {
      if (arr.includes('x') || arr.includes('÷')) {
        arr.forEach((item, idx) => {
          if (item === 'x') {
            newVal = arr[idx - 1] * arr[idx + 1];
            arr.splice(idx - 1, 3, newVal);
          }
          if (item === '÷') {
            newVal = arr[idx - 1] / arr[idx + 1];
            arr.splice(idx - 1, 3, newVal);
          }
        });
      }
      arr.forEach((item, idx) => {
        if (item === '+') {
          newVal = arr[idx - 1] + arr[idx + 1];
          arr.splice(idx - 1, 3, newVal);
        }
        if (item === '-') {
          newVal = arr[idx - 1] - arr[idx + 1];
          arr.splice(idx - 1, 3, newVal);
        }
      });
    }
    result = parseFloat(arr[0].toFixed(14));
    return result;
  };

  const handlePress = (num) => {
    if (num === '=') {
      return dispatch(equal(equalFunc()));
    } else {
      return dispatch(number(num));
    }
  };

  return (
    <View style={styles.numsWrapper}>
      {numsPad.map(({nums}, idx) => (
        <View key={idx} style={styles.numsRow}>
          {nums.map((num) => {
            return (
              <TouchableOpacity
                key={num}
                style={styles.symbolWrapper}
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
