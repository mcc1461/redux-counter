// FilterButtons.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from "../redux/actions";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div className="flex items-center space-x-4">
      <select
        className="px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      <button
        className="px-2 py-1 ml-2 text-sm text-white bg-purple-500 rounded"
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButtons;
