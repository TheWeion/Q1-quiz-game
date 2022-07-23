const playerList = [
    /*
    > Each correct answer complete 1 lap
    > Each wrong attempt(*) get 5 seconds penalty
    > You can open DRS once. (to skip 1 question)
    > You cannot use DRS in 1st or last lap
    > You can enter the pit and get support once (Only left with 2 answers) (but will spend 10 seconds)
    > 1st place get 25 points
    > 2nd place get 19 points
    > 3rd place get 15 points
    > 4th place get 10 points
    */
    {
        "id": 0,
        "name": "Player 1",
        "lap": 0, 
        "timer": 0,
        "penalty": 0,
        "drs_used": false,
        "pit_entered": false,
        "finish": false,
        "is_ready": false
    },
    {
        "id": 1,
        "name": "Player 2",
        "lap": 0,
        "timer": 0,
        "penalty": 0,
        "drs_used": false,
        "pit_entered": false,
        "finish": false,
        "is_ready": false
    }/*,
    {
        "id": 2,
        "name": "Player 3",
        "lap": 0,
        "timer": 0,
        "penalty": 0,
        "drs_used": false,
        "pit_entered": false,
        "finish": false,
        "is_ready": false
    },
    {
        "id": 3,
        "name": "Player 4",
        "lap": 0,
        "timer": 0,
        "penalty": 0,
        "drs_used": false,
        "pit_entered": false,
        "finish": false,
        "is_ready": false
    }*/
];

const playersReducer = (state = playerList, action) => {
    switch(action.type) {
        case "UPDATE_PLAYER":
            state.map((cur, index)=>{
                if (cur.id === action.payload.id) {
                    state[index] = action.payload;
                }
            });
            return state;
        case "CREATE_SINGLE_PLAY":
            state = [];
            state[0] = {
                "id": 0,
                "name": action.payload,
                "lap": 0, 
                "timer": 0,
                "penalty": 0,
                "drs_used": false,
                "pit_entered": false,
                "finish": false,
                "is_ready": false
            };
            return state;
            case "CREATE_MULTI_PLAY":
                state = playerList;
                return state;
        default:
            return state;
    }
};
export default playersReducer;