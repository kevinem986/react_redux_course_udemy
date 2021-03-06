import React, { useReducer } from "react";
import { Button, ButtonGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  counter: 0
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

const Counter = () => {
  const [state1, dispatch1] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline>
          Counter1: {state1.counter}
        </Button>
        <Button color="primary" outline>
          Counter2: {state2.counter}
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={() => dispatch1({ type: "increment", payload: 1 })}>
          Increment
        </Button>
        <Button color="dark" onClick={() => dispatch1({ type: "decrement", payload: 1 })}>
          Decrement
        </Button>
        <Button color="danger" onClick={() => dispatch1({ type: "reset" })}>
          Reset
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={() => dispatch2({ type: "increment", payload: 1 })}>
          Increment 2
        </Button>
        <Button color="dark" onClick={() => dispatch2({ type: "decrement", payload: 1 })}>
          Decrement 2
        </Button>
        <Button color="danger" onClick={() => dispatch2({ type: "reset" })}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
