import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <div className='Todo'>
      <p className={`${todo.completed ? 'completed' : 'incompleted'}`} onClick={() => toggleComplete(todo.id)}>{todo.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  )
}
