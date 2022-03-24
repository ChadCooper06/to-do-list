import React from "react";
import "./App.css";


export default function Paper({ input, setInput, todos, setTodos }) {
	
    const onInput = (e) => {
        
        if(!text) {
            alert('Please add a task');
            return;
        }
            //console.log(e.target.value)
        setInput(e.target.value);
        }
    
    const onSubmit = (e) => {
        
        //console.log(e.target.value);
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
            <input
                type='text'
                id='userInput'
                placeholder='Add Task'
                value={input}
                name='text'
                className='input'
                onChange={onInput}
            />
            <button className='addBtn' onClick={onSubmit}>Add</button>
            <div className="selectors">
                <button className="all">All</button>
                <button className="active">Active</button>
                <button className="done">Done</button>
            </div>
        </div>
    );
};


     


