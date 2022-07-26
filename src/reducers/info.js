const info = {
    playerId: -1,
    roomId: -1,
    multiPlay: false
};

const infoReducer = (state = info, action) => {
    switch(action.type) {
        case "SET_INFO":
            state = action.payload;
            return state;
        default:
            return state;
    }
};
export default infoReducer;