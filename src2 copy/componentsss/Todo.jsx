import React from "react";
import TodoList from "../components/TodoList";

const Todo = () => {
  return (
    <>
      <div className="p-4 mx-auto bg-gray-100 rounded max-w-4x1 sm:mt-8 ">
        <div className="mt-3 mb-6 font-bold text-center uppercase text-2x1">
          Todo App
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default Todo;
