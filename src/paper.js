import "./App.css";
//import { useState } from "react";
import Button from "./button";



export default function Paper({ input, setInput, todos, setTodos }) {

    //places the value input by user to the text input
    //const [filter, setFilter] = useState('all');
    const inputHandler = (e) => {
        setInput(e.target.value);
    }
    //on clicking enter, this sets my todo to the given input and gives the time as an id
    //used empty string at end to clear input field after entering
    const submitHandler = (e) => {
        if(e.key === 'Enter') {
            setTodos([
                ...todos,
                {
                    text: input,
                    done: false,
                    id: Date.now(),
                }
            ])
            setInput('')
        };
    }

    // const filterTodos = todos;
  
    // if(filter === "active") {
    //    filterTodos = todos.filter((todo) => !todo.done);
    // } else if(filter === "done") {
    //    filterTodos = todos.filter((todo) => todo.done);
    // }

    //draws my input, adds fns to it and draws my buttons below-theyre not working yet
    return (
        <div className="paper">
            <h2 className= 'title'>To-Do List</h2>
            <div className='add-task'>
            <input
                type='text'
                placeholder='Add Task'
                value={input}
                name='text'
                className='input'
                onChange={inputHandler} 
                onKeyDown={submitHandler} />
            </div>
            <div className="status-btns">
                <Button id='all' color='green' text='All' onClick={() => setFilter('all')} />
                <Button id='active' color='green' text='active' onClick={() => setFilter('active')} />
                <Button id='done' color='green' text='done' onClick={() => setFilter('done')} />
            </div>
        </div>
    );
};