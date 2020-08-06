import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#222831',
  },
  resultWrapper: {
    flex: 1,
    padding: 12,
    backgroundColor: '#222831',
  },
  result: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  calculatorText: {
    flex: 1,
    fontSize: 20,
    color: '#5e6073',
    textAlign: 'right',
  },
  resultText: {
    color: '#fff',
    fontSize: 50,
  },
  symbolWrapper: {
    flex: 1,
    margin: 2,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5d5d5d',
  },
  zero: {
    flex: 2,
    paddingHorizontal: 1,
  },
  numsWrapper: {
    flex: 3,
  },
  numsRow: {
    flex: 1,
    flexDirection: 'row',
  },
  numsText: {
    fontSize: 18,
    color: '#eae9e9',
  },
  arithmeticWrapper: {
    flex: 1,
  },
  arithmeticText: {
    color: '#eae9e9',
    fontSize: 18,
  },
  arithmetic: {
    backgroundColor: '#505050',
  },
  row: {
    flex: 2,
    flexDirection: 'row',
  },
});

export default styles;
