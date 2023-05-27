import React, { useState } from 'react'
import './Header.css'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const [inputValue,setInputValue] = useState('')
  const handleChange = (e) =>setInputValue(e.target.value)
  const handleKeyDown = (e) =>{
    if(e.keyCode ===13 && inputValue){
      const trimmedText = inputValue.trim()
      dispatch({
        type:'todos/addTodo',
        payload:{
          id:7,title:trimmedText,completed:false
        }
      })
      setInputValue('')
    }
  }
  return (
    <div className='header'>
    <div className='title'>Whats to need to be done?</div>
    <div className='remain-todos'>Remaining todos: (3)</div>
    <input  type="text" value={inputValue} placeholder='Write Somthing...' onKeyDown={handleKeyDown} onChange={handleChange}/>
    </div>

  )
}

export default Header