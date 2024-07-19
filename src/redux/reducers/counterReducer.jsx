// counterReducer.jsx
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
  reset,
} from "../slices/counterSlice";
import { useState, useEffect } from "react";

function Counter() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter.number);

  useEffect(() => {
    const showcase = document.querySelector("#showcase");
    if (number < 5) {
      showcase.style.visibility = "visible";
    } else {
      showcase.style.visibility = "hidden";
    }
  }, [number]);

  return (
    <div
      className="container p-5 mx-auto mt-20 text-center bg-green-100 rounded-md shadow-md"
      style={{ width: "500px" }}
    >
      <h1 className="mb-3 text-3xl font-bold mt-7 text-violet-700">Counter</h1>
      <p className="text-5xl text-violet-900">{number}</p>
      <div
        className="flex mx-8 space-x-5"
        style={{ justifyContent: "space-around" }}
      >
        <button
          onClick={() => dispatch(increment())}
          className="w-40 h-10 p-2 mt-5 rounded-md outline-1 outline-violet-500 outline text-violet-900"
          style={{ backgroundColor: "#c2ff72" }}
        >
          Increment by 5
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="w-40 h-10 p-2 mt-5 rounded-md outline-1 outline-violet-500 outline text-violet-900"
          style={
            number < 5
              ? { backgroundColor: "transparent" }
              : { backgroundColor: "#c2ff72" }
          }
          disabled={number < 5}
        >
          Decrement by 5
        </button>
      </div>
      <div
        className="flex mx-8 mt-5 space-x-3 mb-7"
        style={{ justifyContent: "space-around", alignItems: "center" }}
      >
        <div className="p-5 space-x-5 rounded-md outline outline-1 outline-violet-500">
          <input
            className="w-40 h-10 pl-2 rounded-md outline outline-1 outline-violet-500 text-violet-900"
            onChange={(e) => {
              let newValue = e.target.value.trim();
              if (newValue === "") {
                newValue = "";
                reset();
              }
              // Check the trimmed value consists only of digits
              if (/^\d*$/.test(newValue)) {
                setValue(newValue);
              }
            }}
            value={value}
            placeholder="Enter Value"
          />
          <button
            onClick={() => {
              dispatch(incrementByValue(Number(value)));
              setValue("");
            }}
            className="w-40 h-10 p-2 rounded-md outline-1 outline-violet-500 outline text-violet-900"
            style={{ backgroundColor: "#c2ff72" }}
          >
            Add this Value
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(reset());
          setValue("");
        }}
        className="w-20 h-10 p-2 text-white rounded-md outline-1 outline-violet-500 outline mb-7 bg-violet-900"
      >
        Reset
      </button>
      <h3
        className="text-violet-400"
        id="showcase"
        style={{ visibility: "hidden", marginBottom: "100px" }}
      >
        Counter cannot be less than 0
      </h3>
    </div>
  );
}

export default Counter;
