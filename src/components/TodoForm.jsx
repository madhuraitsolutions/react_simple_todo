import React from 'react'

export const TodoForm = () => {
  //Declare a new state variable, which we'll call "value"
  const [value, setValue] = React.useState('Hai'); 

  return (
    <form className='TodoForm'>
      <input type='text' className='todo-input' value={value} placeholder='What is the task today?'/>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
