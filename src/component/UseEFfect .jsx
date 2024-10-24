import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const UseEFfect  = () => {

    const [count,setCount]  = useState(0);

    useEffect(()=>{
console.log("use Effect");

    },[count])
    return (
    <div>
        
        <h1> {count} </h1>
        <button  onClick={()=>{ count+1}}> Increment </button>
      
    </div>
  )
}

export default UseEFfect 
