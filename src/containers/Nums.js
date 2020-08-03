import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../style/style';

const Nums = () => {
  return (
    <View style={styles.numsWrapper}>
      <View style={styles.numsRow}>
        <TouchableOpacity style={styles.symbolWrapper}>
          <Text style={styles.numsText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.symbolWrapper}>
          <Text style={styles.numsText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.symbolWrapper}>
          <Text style={styles.numsText}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numsRow}>
        <TouchableOpacity style={styles.symbolWrapper}>
          <Text style={styles.numsText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.symbolWrapper}>
          <Text style={styles.numsText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.symbolWrapper}>
          <Text style={styles.numsText}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numsRow}>
        <TouchableOpacity style={styles.symbolWrapper}>
          <Text style={styles.numsText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.symbolWrapper}>
          <Text style={styles.numsText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.symbolWrapper}>
          <Text style={styles.numsText}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numsRow}>
        <TouchableOpacity style={styles.symbolWrapper}>
          <Text style={styles.numsText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.symbolWrapper}>
          <Text style={styles.numsText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.symbolWrapper}>
          <Text style={styles.numsText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Nums;
