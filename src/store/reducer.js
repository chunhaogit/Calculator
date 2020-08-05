import {NUMBER, CLEAR, DEL, EQUAL} from './actions';

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
    case DEL:
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
    case CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default CalculatorReducer;
