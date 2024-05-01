import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Todo = ({todo, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p className={`${todo.completed ? 'completed' : 'incompleted'}`} onClick={() => toggleComplete(todo.id)}>{todo.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(todo.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  )
}
