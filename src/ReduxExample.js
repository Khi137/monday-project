// src/ReduxExample.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ReduxExample = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>Redux Example</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default ReduxExample;
