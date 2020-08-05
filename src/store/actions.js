export const NUMBER = 'NUMBER';
export const CLEAR = 'CLEAR';
export const DEL = 'DEL';
export const EQUAL = 'EQUAL';

export const number = (num) => {
  return {type: NUMBER, payload: num};
};
export const clear = () => {
  return {type: CLEAR};
};
export const del = () => {
  return {type: DEL};
};
export const equal = (result) => {
  return {type: EQUAL, payload: result};
};
