import React from "react";

export default function PageBottom() {

    //this is the counter that should show the count of to-dos left
    const counter = () => {
        setCount(todos.filter(todos => todos.done == true)).length;
    }

    // the counter and button that show at the bottom of the screen
    return(
        <div className='bottom'>
            <div className="counter">Items left to do</div>
            <button className="clearAll">Clear All</button>
        </div>
    )
    
};