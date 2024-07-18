// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Number from "./redux/reducers/numberReducer";
import MusCo from "./MusCo redux filled.png";

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto mt-24 text-center">
        <img
          src={MusCo}
          alt="logo"
          className="w-40 mx-auto mt-24 rounded-full"
        />
        <h1 className="container m-auto text-2xl font-semibold text-center text-violet-700">
          Practice Redux with{" "}
          <span className="font-extrabold text-violet-900">MusCo</span>
        </h1>
        <div className="relative inline-block mt-8">
          <Number />
          <h5 className="absolute bottom-0 right-0 mb-2 mr-2 font-semibold text-violet-700">
            <span className="font-normal">by</span>
            <span className="font-bold text-violet-900">Mus</span>tafa
            <span className="font-bold text-violet-900">Co</span>skuncelebi
          </h5>
        </div>
      </div>
    </Provider>
  );
}

export default App;
