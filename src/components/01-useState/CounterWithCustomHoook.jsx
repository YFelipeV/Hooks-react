
import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import "./counter.css"

export const CounterWithCustomHoook = () => {

   const{state,increment,decrement,reset}=useCounter()

  return ( 
    <>
    <h1>Counter Whith Hook {state}</h1>
    <hr />

    <button
        className="btn btn-primary mx-2"
        onClick={() =>increment(5) }
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => decrement(2)}
      >
        -1
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={reset}
      >
        Reset
      </button>
    </>
  )
}
