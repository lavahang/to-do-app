"use client"
import React from 'react'
import { useState } from 'react';
const Original = () => {
  const [message, setMessage] = useState('');
  const [update,setupdate]= useState(message)
  const handlechange = (event) => {
    // 👇 "message" stores input field value
    setMessage(event.target.value);
  };
  const handleclick = () => {
    // 👇 "message" to store output
    setupdate(message);
    
  };


  return (
    <>
    <div>
    <h1>Todo app</h1>
    
    <input type="text" value={message} onChange={handlechange}/>

    <button onClick={handleclick} >Add</button>
    <button>Delete</button>

    <div>
    {update}
    </div>




    </div>
    </>
  )
}

export default Original