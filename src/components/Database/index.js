const UserScores = [
        
    {
        id: 1,
        name: "Aleks",
        score: 30000
    },
    {
        id: 2,
        name: "Wing",
        score: 29000
    },
    {
        id: 3,
        name: "Terry",
        score: 27000
    },
    {
        id: 4,
        name: "Daks",
        score: 22000
    },
    {
        id: 5,
        name: "Paul",
        score: 23000
    },
    {
        id: 6,
        name: "Mitsy",
        score: 24000
    },
]

const HighestToLowest = [...UserScores].sort((a,b)=>b.score-a.score)

export default HighestToLowest;