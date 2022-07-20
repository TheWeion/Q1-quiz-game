import React from 'react'
import UserScores from '../Database';

const Profiles = () => {
    const HighestToLowest = [...UserScores].sort((a,b)=>b.score-a.score)

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