// actionType.js
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
export const RESET = "RESET";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const incrementByValue = (value) => ({
  type: INCREMENT_BY_VALUE,
  payload: value,
});
export const reset = () => ({ type: RESET });
