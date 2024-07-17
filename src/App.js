import React from "react";

import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo.js";

function App() {
  return (
    <>
      <h1 className="m-3 text-3xl font-bold text-blue-700 underline">
        Hello mcc1461!{" "}
      </h1>
      <div className="App">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
