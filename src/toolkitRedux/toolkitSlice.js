import { createSlice } from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
  name: 'toolkitReducer',
  initialState: {
    count: 0,
    todos: ['install redux', 'install redux-thunk', 'install redux-devtools-extension'],
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1
    },
    decrement(state) {
      state.count = state.count - 1
    },
    addTodo(state, action) {
      state.todos.push(action.payload)
    },
    removeLastTodo(state) {
      state.todos.pop()
    }
  }
})

export default toolkitSlice.reducer;
export const { increment, decrement, addTodo, removeLastTodo} = toolkitSlice.actions;