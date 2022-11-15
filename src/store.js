import { createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// ---------------- redux -----------------
// constant
// const ADD = "ADD";
// const DELETE = "DELETE";

// action creators
// const addToDo = text => {
//   return {
//     type: ADD,
//     text
//   };
// };

// const deleteToDo = id => {
//   return {
//     type: DELETE,
//     id: parseInt(id)
//   };
// };

// ---------------- redux toolkit -----------------
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo:
//       return state.filter(toDo => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// -------- createReducer --------
// const reducer = createReducer([], {
//   [addToDo] : (state, action) => {
//     state.push({text: action.payload, id: Date.now() });
//   },
//   [deleteToDo] : (state, action) =>
//     state.filter(toDo => toDo.id !== action.payload)
// });

// const store = createStore(reducer);


const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add:(state, action) => {
      state.push({text: action.payload, id: Date.now() });
    },
    remove:(state, action) =>
      state.filter(toDo => toDo.id !== action.payload)
  }
});

// const store = configureStore({ reducer });

// export const actionCreators = {
//     addToDo,
//     deleteToDo
// };

export const { add, remove } = toDos.actions;
export default configureStore({ reducer: toDos.reducer });