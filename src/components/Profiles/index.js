import React from 'react'
import HighestToLowest from '../Database';

const Profiles = () => {
    return (
        <div className='users'>
            {HighestToLowest.map((user, index) => (
                <div key={index}>
                    <p>{user.name}</p>
                    <p>{user.score}</p>                  
                </div>          
            ))}
        </div>
    )
}

export default Profiles;