import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from "../redux/actions";
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { todo } from "../redux/reducers/todoSlice";

// import { FiEdit } from 'react-icons/fi';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col justify-between gap-4 py-2 border-b-2 sm:flex-row sm:items-center">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}.</span>
        <span
          className={`mr-4 ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="ml-8 space-x-3">
        <button
          className="px-1 py-1 mr-2 text-sm text-white bg-blue-500 rounded sm:px-2"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          className="px-1 py-1 mr-2 text-sm text-white bg-red-500 rounded sm:px-2"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            className="px-1 py-1 text-sm text-white bg-green-500 rounded sm:px-2"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="px-1 py-1 text-sm text-white bg-yellow-500 rounded sm:px-2"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
