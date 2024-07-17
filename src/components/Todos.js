import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleTodo,
  updateTodo,
} from "../features/todos/todosSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo({ id: todo.id }))}
            />
            {todo.text}
            <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>
              Delete
            </button>
            <button
              onClick={() =>
                dispatch(updateTodo({ id: todo.id, text: "Updated Text" }))
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(addTodo("New Todo"))}>Add Todo</button>
    </>
  );
}
