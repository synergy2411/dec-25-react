import { useReducer } from "react";

import classes from "./UseReducerDemo.module.css";

const initialState = {
  counter: 0,
  result: [],
};

function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return {
      ...state, // {counter : 0, result : []}
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  } else if (action.type === "SUBTRACT_COUNTER") {
    return {
      ...state,
      counter: state.counter - action.payload,
    };
  } else if (action.type === "STORE_RESULT") {
    return {
      ...state,
      result: [action.payload, ...state.result],
    };
  } else if (action.type === "DELETE_RESULT") {
    return {
      ...state,
      result: state.result.filter((_, i) => i !== action.payload),
    };
  }
  return state;
}

function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>UseReducer Demo Component</h1>
      <h2>Counter : {state.counter}</h2>
      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increase
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrease
        </button>

        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: "ADD_COUNTER", payload: 10 })}
        >
          Add (10)
        </button>

        <button
          className="btn btn-warning"
          onClick={() => dispatch({ type: "SUBTRACT_COUNTER", payload: 5 })}
        >
          Subtract (5)
        </button>

        <hr />
      </div>

      <hr />

      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={() =>
            dispatch({ type: "STORE_RESULT", payload: state.counter })
          }
        >
          Store Result
        </button>
      </div>

      <ul className="list-group">
        {state.result.map((val, index) => (
          <li
            key={index}
            className={`list-group-item ${classes.clickable}`}
            onClick={() => dispatch({ type: "DELETE_RESULT", payload: index })}
          >
            {val}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UseReducerDemo;
