import React from 'react'
import {GrClose} from 'react-icons/gr'
import './ToDoItem.css'
import { useDispatch } from 'react-redux'

const colorOptions = ['green','red','blue']

const ToDoItem = ({title,todoId,completed}) => {
  const dispatch = useDispatch()
  
  const handleCompleteTdod = ()=>{
    dispatch({
      type:'todos/toggleTodo',
      payload:todoId
    })
  }
  const handleDeleteTodo = ()=>{
    dispatch({
      type:'todos/deleteTodo',
      payload:todoId
    })
  }
  return (
    <li className='todo-item-container'>
      <div className='todo-item-left'>
        <label htmlFor={todoId} className="checkmark-container">
        <input id={todoId} type="checkbox" checked={completed} onClick={handleCompleteTdod}/>
        {title}
        </label>
      </div>
      <div className='todo-item-right'>
      <select name="" id="">
        {colorOptions.map(option => <option value={option}>{option}</option>)}
      </select>
        <GrClose onClick={handleDeleteTodo} className='close-btn'></GrClose>
      </div>
      </li>
  )
}

export default ToDoItem