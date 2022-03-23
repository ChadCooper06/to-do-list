import React from "react";
import "./App.css";


export default function Paper({ input, setInput, todos, setTodos }) {
	
    const handleInput = (e) => {
            console.log(e.target.value)
        setInput(e.target.value);
        }
    
    const handleSubmit = (e) => {
            console.log(e.target.value);
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
                <div>
                    <button className="all">All</button>
                    <button className="active">Active</button>
                    <button className="done">Done</button>
                </div>
        </div>
    );
};

     


