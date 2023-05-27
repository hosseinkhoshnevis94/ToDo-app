import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'
import { useSelector } from 'react-redux'
import './ToDoList.css'

const ToDoList = () => {
const todos = useSelector(state=>state.todos.entities)
  return (
    <ul>{
      todos.map(todo=><ToDoItem completed={todo.completed} id={todo.id} todoId={todo.id} title={todo.title}></ToDoItem>)}
      </ul>
  )
}

export default ToDoList