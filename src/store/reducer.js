import {NUMBER, CLEAR, CLEARENTRY, EQUAL, PERCENTAGE} from './actions';

const initialState = {
  sequence: '',
  result: 0,
};

const CalculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER:
      return {
        ...state,
        sequence: state.sequence + action.payload,
      };
    case CLEARENTRY:
      return {
        ...state,
        sequence: state.sequence.slice(0, state.sequence.length - 1),
      };
    case EQUAL:
      return {
        ...state,
        result: action.payload,
        // result: eval(state.sequence),
      };
    case PERCENTAGE:
      return {
        ...state,
        result: parseFloat((state.result * 0.01).toFixed(12)),
      };
    case CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default CalculatorReducer;
