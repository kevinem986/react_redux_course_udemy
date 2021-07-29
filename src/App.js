import React, { useEffect, useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import "./assets/css/custom.css";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        loading: false,
        error: "",
        todos: action.payload,
      };
    case "SET_ERROR":
      return {
        loading: false,
        error: "There are some errors.",
        todos: [],
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "SET_DATA", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "SET_ERROR" });
      });
  }, []);

  let listMarkup = (
    <ListGroup>
       {state.todos.map(todo => <ListGroupItem key={todo.id}>{todo.title} {todo.completed ? (<Badge color='success'>Completed</Badge>) : (<Badge color="danger">Incomplete</Badge>)}</ListGroupItem>)}
    </ListGroup>
  )

  return <div className="App">
    {state.loading ? "Loading" : (state.error ? state.error : listMarkup)}
  </div>;
}

export default App;
