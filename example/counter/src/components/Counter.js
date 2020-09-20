import React from 'react'
import { useGlobalState } from "kladi";

import '../App.css'
const Counter = (props) => {
  
    let [count, setCount] = useGlobalState("count", 0);
    return (
      <div>
        <h1>{count}</h1>
        <button
        onClick={() => {
          setCount(count - 1);
        }}
        >-</button>
        <button
        onClick={() => {
          setCount(count + 1);
        }}
        >+</button>
      </div>
    )
  
}
export default Counter;