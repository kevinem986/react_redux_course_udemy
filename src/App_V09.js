import React, { useReducer, createContext } from "react";
import "./assets/css/custom.css";
import ComponentD from "./components/ComponentD";

export const CounterContext = createContext();
const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload };
    case "decrement":
      return { ...state, counter: state.counter - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ counter: state.counter, dispatch }}>
      <div className="App">
        App JS Counter: {state.counter}
        <ComponentD />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
