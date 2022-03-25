import React from 'react';
import {FaTimes} from 'react-icons/fa';


export default function Todos ({ text, todo, todos, setTodos }) {
    
    //activates when the checkbox is clicked
    const checkHandler = () => {
        (todo.done === false) ? (todo.done === true) : (todo.done === false); 
    }

    //activates when my X icon is clicked and deletes the to-do
    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }
    
    return(
        <div className='list-container'>
            <div className='list'>
                <input type='checkbox' 
                    className='check' 
                    onClick={checkHandler} 
                    defaultChecked={false} 
                />
                <>
                {text}
                </>
                <FaTimes 
                    type='button'
                    className='delete'
                    style={{justifyContent: 'space-between'}} 
                    onClick={() => deleteHandler(todos)} 
                />
            </div>
        </div>
    )
}
