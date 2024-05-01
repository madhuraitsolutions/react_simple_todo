import React from 'react'

export const EditTodoForm = ({editTodo, task }) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' value={value} placeholder='Update task' onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
