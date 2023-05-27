import React from 'react'
import Header from '../Header/Header'
import Filters from '../Filters/Filters'
import ToDoList from '../ToDos/ToDoList/ToDoList'
import './Container.css'

const Container = () => {
  return (
    <div className='container'>
        <Header></Header>
        <Filters></Filters>
        <ToDoList></ToDoList>
    </div>
  )
}

export default Container