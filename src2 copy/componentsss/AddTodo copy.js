import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.event.preventDefault();
    if (todo.trim()) {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };
  return (
    <form>
      <input
        type="text"
        className="px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
        placeholder="Enter a Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" onClick={handleAddTodo}>
        Add Todo
      </button>
    </form>
  );
}
