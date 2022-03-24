import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./button";
import { useState } from "react";


export default function Paper({ input, setInput, todos, setTodos }) {
	
    const handleSubmit = (e) => {
        e.preventDefault();
        let newState = todos;
        let id = Date.now();
        newState.push({text: input, id: id, status:'active'})
        setTodos([...newState])
    }
    const allTodos = (e) => {
        setTodos(todos)
     }
       
    const onInput = (e) => {
        setInput(e.target.value);
        }
    
    const onClick = (e) => {
        setInput(e.target.value);
        setTodos([
            ...todos,
            {
                text: input,
                completed: false,
                id: Math.floor(Date.now())
            }
        ]);
        setInput('');
    };

    const [input, setInput] = useState()
    
    return (
        <>
        <div className="paper">
            <h2 className= 'title'>To-Do List</h2>
            <div className='add-task' onSubmit={handleSubmit}>
                <input onChange={e => setInput(e.target.input)} placeholder="Add a task" />
                <Button text='Add Me!' onClick={onClick} />
            </div>
            
            <div className="selectors">
                <Button color='green' text='All' onClick={allTodos} />
                <Button color='green' text='active' onClick={activeTodos} />
                <Button color='green' text='done' onClick={completed} />
            </div>
        </div>
        </>
    )
}
   
    
    // return (
    //     <div className="paper">
    //         <h2 className= 'title'>To-Do List</h2>
    //         <div className='add-task'>
    //         <input
    //             type='text'
    //             id='userInput'
    //             placeholder='Add Task'
    //             value={input}
    //             name='text'
    //             className='input'
    //             onChange={onInput}
    //         />

            {/* <Button text='Add Me!' onClick={onClick} /> */}
            
    //     </div>
    //         <div className="selectors">
    //             <Button color='green' text='All' onClick={allTodos} />
    //             <Button color='green' text='active' onClick={onClick} />
    //             <Button color='green' text='done' onClick={onClick} />
    //         </div>
    //     </div>
    // );
//};


     


