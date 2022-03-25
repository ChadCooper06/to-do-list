import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./button";


export default function Paper({ input, setInput, todos, setTodos }) {
	
   
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
    
    return (
        <div className="paper">
            <h2 className= 'title'>To-Do List</h2>
            <div className='add-task'>
            <input
                type='text'
                id='userInput'
                placeholder='Add Task'
                value={input}
                name='text'
                className='input'
                onChange={onInput}
            />
            
            <Button text='Add Me!' onClick={onClick} />
            
        </div>
            <div className="selectors">
                <Button color='green' text='All' onClick={onClick} />
                <Button color='green' text='Active' onClick={onClick} />
                <Button color='green' text='Done' onClick={onClick} />
            </div>
        </div>
    );
};


     


