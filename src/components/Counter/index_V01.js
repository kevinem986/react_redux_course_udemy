import React, { useReducer } from "react";
import { Button, ButtonGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  counter1: 0,
  counter2: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter1: state.counter1 + action.payload };
    case "decrement":
      return { ...state, counter1: state.counter1 - action.payload };
    case "increment2":
      return { ...state, counter2: state.counter2 + 1 };
    case "decrement2":
      return { ...state, counter2: state.counter2 - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline>
          Counter1: {count.counter1}
        </Button>
        <Button color="primary" outline>
          Counter2: {count.counter2}
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={() => dispatch({ type: "increment", payload: 1 })}>
          Increment
        </Button>
        <Button color="dark" onClick={() => dispatch({ type: "decrement", payload: 1 })}>
          Decrement
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={() => dispatch({ type: "increment", payload: 5 })}>
          Increment 5
        </Button>
        <Button color="dark" onClick={() => dispatch({ type: "decrement", payload: 5 })}>
          Decrement 5
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={() => dispatch({ type: "increment2" })}>
          Increment 2
        </Button>
        <Button color="dark" onClick={() => dispatch({ type: "decrement2" })}>
          Decrement 2
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="danger" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
