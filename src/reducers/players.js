const playersReducer = (state = [], action) => {
    switch(action.type) {
        case "UPDATE_PLAYER":
            state.map((cur, index)=>{ // eslint-disable-line array-callback-return
                if (cur.id === action.payload.id) {
                    state[index] = action.payload;
                }
            });
            return state;
        case "CREATE_ROOM":
            state = [];
            let roomSize = action.payload.size;
            for (let ind = 0; ind < roomSize; ind++) {
                state[ind] = {
                    "id": ind,
                    "name": 'default player name',
                    "lap": 0, 
                    "timer": 0,
                    "penalty": 0,
                    "drs_used": false,
                    "pit_entered": false,
                    "finish": false,
                    "is_ready": false
                };
            }
            return state;
        default:
            return state;
    }
};
export default playersReducer;