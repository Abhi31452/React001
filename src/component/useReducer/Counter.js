import React, { useReducer, useState } from 'react'
import CounterReducer, { initialState } from './CounterReducer'

const Counter = () => {
  const [state, dispatch] = useReducer(CounterReducer, initialState)
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => {
    dispatch({ type: "increment" })
  }

  const handleDecrement = () => {
    dispatch({ type: "decrement" })
  }
  const handleIncrementByAmount =()=>{
    dispatch({type : "incrementByAmount" , payload : Number(inputValue)} )
    setInputValue(0)
  }
  const handleDecrementByAmount =()=>{
    dispatch({type : "decrementByAmount" , payload : Number(inputValue)} )
    setInputValue(0)
  }


  return (
    <div>
      <h1> Count : {state.count} </h1>
      <button onClick={handleIncrement} style={{ padding : "8px" , height :"40px" , width :"100px"}}> Increment </button>
      <button onClick={handleDecrement} style={{ padding : "8px" , height :"40px" , width :"100px"}}>Decrement- </button>
      <br></br>

      <input type='number' value={inputValue} onChange={e => setInputValue(e.target.value)} style={{ padding : "8px" , height :"20px" , width :"100px" , display :"block" ,margin :"10px"}}></input>
    
      <button onClick={handleIncrementByAmount } style={{ padding : "8px" , height :"40px" , width :"100px" }}> Add </button>
      <button onClick={handleDecrementByAmount}style={{ padding : "8px" , height :"40px" , width :"100px"}}> Subtract </button>
    </div>
  )
}

export default Counter
