import React from "react";

export default function PageBottom( todos, setTodos ) {

    //this is the counter that should show the count of to-dos left-not working yet but also not breaking anything
    const counter = () => {
        setCount(todos.filter(todos => todos.done == true)).length;
    }

    const deleteHandler = () => {
        setTodos(todos.filter(todo => todo.id !== todos.id))
    }
    

    // the counter and button that show at the bottom of the screen
    return(
        <div className='bottom'>
            <div className="counter">coming soon</div>
            <button className="clearAll" onClick={() => deleteHandler(todos)}>Clear All</button>
        </div>
    )
    
};