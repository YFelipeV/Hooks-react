import { useState } from "react";

export const useCounter = (initialState = 1) => {
  const [counter, setstate] = useState(initialState);

  const increment = () => {
    setstate(counter + 1);
  };
  const reset=()=>{
    setstate(initialState)
  }
  const decrement = () => {
    setstate(counter - 1);
  };
  return {
    counter, 
    increment,
    decrement,
    reset
  };
};
