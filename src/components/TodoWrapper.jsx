import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]); // initial value is an empty array
  const addTask = (todo) => {
    setTodos([
      ...todos, // spread operator
      {
        id : uuidv4(), // generate a unique id
        task : todo, // task is the value passed from TodoForm
        completed: false, // initial value is false
        isEditing: false // initial value is false
      }
    ])
    console.log(todos) //
  }
  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo={addTask}/> 
        <Todo />
    </div>
  )
}
