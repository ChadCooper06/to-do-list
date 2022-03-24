import React, { useState, useEffect } from "react";
import Button from "./button";

export default function PageBottom() {

    // const [counter, setCounter] = useState(0);
    // const onClick = (e) => {

    // }
    // // const counterChange1 = {handleSubmit} => {
    // //     setCounter(counter + 1);
    // // }
    // // const counterChange2 = (e) => {
    // //     setCounter(counter - 1);
    // // }

    // useEffect((onClick) => {
    //     function counterIncrement() {
    //         setCounter(counter + 1);
    //     }

    //     counterIncrement();
    // });

    return(
        <div className='bottom'>
            <div className="counter">Numbers</div>
            <Button className="clearAll" text='Erase' />
        </div>
    )
    
};

//npm install react icons