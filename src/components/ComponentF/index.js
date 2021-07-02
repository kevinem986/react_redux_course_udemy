import React, { useContext } from "react";
import { Button, ButtonGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CounterContext } from "../../App";

const ComponentF = () => {
  const counterContext = useContext(CounterContext);
  console.log(counterContext);
  const { counter, dispatch } = counterContext;

  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline>
          ComponentD Counter: {counter}
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button
          color="dark"
          onClick={() => dispatch({ type: "increment", payload: 1 })}
        >
          Increment
        </Button>
        <Button
          color="dark"
          onClick={() => dispatch({ type: "decrement", payload: 1 })}
        >
          Decrement
        </Button>
        <Button color="danger" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ComponentF;
