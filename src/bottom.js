import React from "react";

export default function PageBottom() {

    const counter = () => {
        setCount(todos.filter(todos => todos.done == true)).length;
    }


    return(
        <div className='bottom'>
            <div className="counter">Items left to do</div>
            <button className="clearAll">Clear All</button>
        </div>
    )
    
};