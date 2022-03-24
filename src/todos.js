import React, { useState } from 'react';
import {FaTimes} from 'react-icons/fa';

export const Todos = ({ text }) => {

    const [todos, setTodos] = useState([])
   
    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todos.id))
     
     }
       
     const checkHandler = () => {
       todos.completed === false ? (todos.completed = true) :
       (todos.completed = false)
     }

    return(
        <div className='list-container'>
            <div className='list'>
                <input type='checkbox' className='check' onClick={checkHandler}></input>
                {text} 
                <FaTimes 
                style={{justifyContent: 'space-between'}} 
                onClick={() => deleteHandler(todos)} 
                />
            </div>
        
        </div>
    )
}
