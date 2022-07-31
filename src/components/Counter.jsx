import React, { useContext } from "react";
import { CounterContext } from "../context/Counter";

const Counter = () => {
  const CounterState = useContext(CounterContext);
  return (
    <div
      className="shadow-lg p-3 mb-5 bg-body rounded mx-auto text-center"
      style={{ width: "40rem" }}
    >
      <h1>{CounterState.count}</h1>
      <button
        className="btn btn-primary"
        onClick={() => CounterState.setCount(CounterState.count + 1)}
      >
        Increment
      </button>
      <button
        className="ms-4 btn btn-primary"
        onClick={() => CounterState.setCount(CounterState.count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
