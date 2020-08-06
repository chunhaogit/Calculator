export const NUMBER = 'NUMBER';
export const CLEAR = 'CLEAR';
export const CLEARENTRY = 'CLEARENTRY';
export const EQUAL = 'EQUAL';
export const PERCENTAGE = 'PERCENTAGE';

export const number = (num) => {
  return {type: NUMBER, payload: num};
};
export const clear = () => {
  return {type: CLEAR};
};
export const clearEntry = () => {
  return {type: CLEARENTRY};
};
export const equal = (result) => {
  return {type: EQUAL, payload: result};
};
export const percentage = () => {
  return {type: PERCENTAGE};
};
