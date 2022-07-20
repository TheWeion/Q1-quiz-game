import React from 'react';
import './style.css'

const Radio = ({message}) => {
    return(
        <>
            <div className='Wrapper'>
                <span className='radioSpan'>Radio</span>
                <h3>{ message }</h3>
            </div>
        </>
    )
}

export default Radio;
