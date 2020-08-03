import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../style/style';

const Arithmetic = () => {
  return (
    <View style={styles.arithmeticWrapper}>
      <TouchableOpacity style={styles.symbolWrapper}>
        <Text style={styles.arithmeticText}>DEL</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.symbolWrapper}>
        <Text style={styles.arithmeticText}>÷</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.symbolWrapper}>
        <Text style={styles.arithmeticText}>x</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.symbolWrapper}>
        <Text style={styles.arithmeticText}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.symbolWrapper}>
        <Text style={styles.arithmeticText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Arithmetic;
