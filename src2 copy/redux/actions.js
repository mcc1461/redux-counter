import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from "./actionTypes";

const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});

export {
  addTodo,
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
  filterTodos,
  markAllCompleted,
  updateSearchTerm,
};
