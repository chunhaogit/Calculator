import {combineReducers, createStore} from 'redux';
import CalculatorReducer from './reducer';

const rootReducer = combineReducers({
  calculator: CalculatorReducer,
});

export default createStore(rootReducer);
