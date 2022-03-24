import React from 'react';

export const Todos = ({ text }) => {


    return(
        <div className='list-container'>
            <div className='list'>
                <input type='checkbox'></input>
                {text}
            </div>
        
        </div>
    )
}
