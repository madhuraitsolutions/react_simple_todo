import React from 'react'

export const TodoForm = () => {
  //Declare a new state variable, which we'll call "value"
  // const [value, setValue] = React.useState('Hai'); 
  const [value, setValue] = React.useState(''); 


  return (
    <form className='TodoForm'>
      {/*1 <input type='text' className='todo-input' value={value} placeholder='What is the task today?'/> */}
      {/*2 <input type='text' className='todo-input' value={value} placeholder='What is the task today?' onChange={(e) => console.log(e.target.value)}/> */}
      <input type='text' className='todo-input' value={value} placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
