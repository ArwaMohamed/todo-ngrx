
export interface Counter {
  n : Number
}
let intialState = {
  n: 0,
};
const INCREAMENT = "increament"
const DECREAMENT = "decreament"
export function counterReducer(state = intialState, action: any) {
  switch (action.type) {
    case INCREAMENT:
      return {
        n : state.n + action.payload
      };
    case DECREAMENT:
      return {
        n : state.n - action.payload
      };
    default:
      return state;
  }
}
