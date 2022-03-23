import React from 'react';

export const Todos = ({ text }) => {


    return(
        <div className='list-container'>
            <li className='list'>
                {text}
            </li>
        
        </div>
    )
}
