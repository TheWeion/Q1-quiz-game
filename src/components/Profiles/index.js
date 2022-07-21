import React from 'react'
import UserScores from '../Database';
import './style.css';

const Profiles = () => {
    const HighestToLowest = [...UserScores].sort((a,b)=>b.score-a.score)

    return (
        <div className='user-container'>
            {HighestToLowest.map((user, index) => (
                <div className='users' key={index}>
                    <p className='name1'>{user.name}</p>
                    <p className='score1'>{user.score}</p>                  
                </div>          
            ))}
        </div>
    )
}

export default Profiles;