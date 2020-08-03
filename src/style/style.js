import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  resultWrapper: {
    flex: 1,
    backgroundColor: '#322f3d',
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
    backgroundColor: '#f7c5a8',
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
