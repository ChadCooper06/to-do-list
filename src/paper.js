import React, { useState } from "react";
import "./App.css";


export default function Paper() { input, setInput, todos, setTodos }) => {
	
    const handleInput = (e) => {
            //console.log(e.target.value)
        setInput(e.target.value);
        }
    
    const handleSubmit = (e) => {
        e.preventDefault();
            //console.log(e.target.value);
        setInput(e.target.value);
        setTodos([
            ...todos,
            {
                text: input,
                completed: false,
                id: Math.floor(newDate().valueOf())
            }
        ]);
        setInput('');
    };
    
    return (
        <div>
            <h2 className= 'title'>To-Do List</h2>
                <input
                    type='text'
                    id='userInput'
                    placeholder='Add Task'
                    value={input}
                    name='text'
                    className='todo-input'
                    onChange={handleInput}
                />
                <button className='addBtn' onClick={handleSubmit}>Add</button>
        </div>
    );
};
    

    return(
        <div className="toDoPage">
            <h1 className="title">To Do List</h1>
            <div className="inputDiv">
                <input className="inputBox" value={userInput} type='text' onSubmit={handleChange} placeholder="Enter a Task"></input>
                
            </div>
                    {/* this div below will be a child that is imported that is made up of other children that all have 
                    onclicks and buttons as well as a label that is the prop of the input value */}
            <div className="tasks">
                <ul>
                    <li>create my app</li>
                    <li>make it work</li>
                    <li>try not to break it</li>
                </ul>
            </div>
            <button className="all">All</button>
            <button className="active">Active</button>
            <button className="done">Done</button>
            
        </div>
    )
}

