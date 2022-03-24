import React, { useState, useEffect } from 'react';
//import { getLocalStorage, setLocalStorage } from './localStorage';
import {FaTimes} from 'react-icons/fa';

export const Todos = ({ text }) => {

    //const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    
   
     const checkHandler = () => {
       todos.completed === false ? (todos.completed = true) :
       (todos.completed = false)
     }

     const deleteHandler = () => {

     }
    
//   useEffect(() => {
//     let data = getLocalStorage();
//     if (data.length > 0) {
//       setTodos(data);
//     } else {
//       getData()
//         .then((data) => {
//           setTodos(data);
//           setLocalStorage(data);
//         })
//     }
//   }, []);

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
