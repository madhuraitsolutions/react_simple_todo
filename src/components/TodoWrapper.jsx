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
        id: uuidv4(), // generate a unique id
        task: todo, // task is the value passed from TodoForm
        completed: false, // initial value is false
        isEditing: false // initial value is false
      }
    ])
    console.log(todos) //
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTask} />
      {/* <Todo /> */}
      {/* This code is using the map function to iterate over an array called todos. For each element in the todos array, it creates a <Todo> component passing down the current todo object as a prop and a unique key attribute generated from the index.So, for each todo in the todos array, it generates a <Todo> component with the corresponding todo object passed as a prop. The key attribute is used by React to efficiently manage and update the list of components, ensuring proper rendering and performance. */}
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
      ))}
    </div>
  )
}
