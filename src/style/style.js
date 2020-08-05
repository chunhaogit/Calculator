import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  resultWrapper: {
    flex: 1,
    padding: 12,
    backgroundColor: '#322f3d',
  },
  result: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  calculatorText: {
    flex: 1,
    color: '#838383',
    textAlign: 'right',
  },
  resultText: {
    color: '#fff',
    fontSize: 40,
  },
  symbolWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numsWrapper: {
    flex: 3,
    backgroundColor: '#fff',
  },
  numsRow: {
    flex: 1,
    flexDirection: 'row',
  },
  numsText: {
    color: '#1b1c25',
  },
  arithmeticWrapper: {
    flex: 1,
    backgroundColor: '#596e79',
  },
  arithmeticText: {
    // color: '#322f3d',
    color: '#fff',
    fontSize: 16,
  },
  row: {
    flex: 2,
    flexDirection: 'row',
  },
});

export default styles;
