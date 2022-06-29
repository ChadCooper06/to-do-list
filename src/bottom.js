import React from "react";

export default function PageBottom( todos, setTodos, id ) {

    //this is the counter that should show the count of to-dos left-not working yet but also not breaking anything
    // const counter = () => {
    //     setCount(todos.filter(todos => todos.done === true)).length;
    // }
    //deletes everything in the list-doesn't break the app so leaving here to complete later
    const deleteHandler = () => {
        setTodos(todos.forEach(todo => todo.id !== id));
        return(
            todos = ''
        )
    }
    

    // the counter and button that show at the bottom of the screen
    return(
        <div className='bottom'>
            {/* <div className="counter">coming soon</div> */}
            <button className="clearAll" onClick={() => deleteHandler(todos)}>Clear All</button>
        </div>
    )
    
};