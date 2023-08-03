import { createAction, createReducer } from "@reduxjs/toolkit"


const initialState = {
  count: 0,
  todos: ['install redux', 'install redux-thunk', 'install redux-devtools-extension'],
}

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');

export default createReducer({
  [increment]: function (state) {
    state.count = state.count + 1;
  },

  [decrement]: function (state) {
    state.count = state.count - 1;
  }
})

console.log(decrement);