import {NUMBER, CLEAR, CLEARENTRY, EQUAL, SIGNCHANGER} from './actions';

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
    case CLEAR:
      return {
        ...initialState,
      };
    case SIGNCHANGER:
      return {
        ...state,
        sequence: action.payload,
      };
    case EQUAL:
      return {
        ...state,
        result: action.payload,
        // result: eval(state.sequence),
      };
    default:
      return state;
  }
};

export default CalculatorReducer;
