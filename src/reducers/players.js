const playerList = [
    // id = plyayer ID
    // lap/question ID, first question ID is 1
    // timer = seconds in total
    // drs = skip 1 lap/question
    // pit = get extra time without being counted in timer
    {
        "id": 1,
        "name": "Player 1",
        "nationality": "GBR",
        "lap": 1, 
        "timer": 0,
        "drs_used": false,
        "pit_entered": false,
        "is_bot": false
    },
    {
        "id": 2,
        "name": "Player 2",
        "nationality": "GBR",
        "lap": 1,
        "timer": 0,
        "drs_used": false,
        "pit_entered": false,
        "is_bot": false
    },
    {
        "id": 3,
        "name": "Player 3",
        "nationality": "GBR",
        "lap": 1,
        "timer": 0,
        "drs_used": false,
        "pit_entered": false,
        "is_bot": false
    },
    {
        "id": 4,
        "name": "Player 4",
        "nationality": "GBR",
        "lap": 1,
        "timer": 0,
        "drs_used": false,
        "pit_entered": false,
        "is_bot": false
    }
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
        default:
            return state;
    }
};
export default playersReducer;