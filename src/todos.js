import React from 'react';

export const Todos = ({ text }) => {


    return(
        <div className='list-container'>
            <div className='list'>
                {text}
            </div>
        
        </div>
    )
}
