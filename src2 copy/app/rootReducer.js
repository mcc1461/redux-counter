import { combineReducers } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice"; // Correct path

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
