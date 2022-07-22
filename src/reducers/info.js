const info = {
    playerId: -1,
    roomId: -1,
    multiPlay: false
};

const infoReducer = (state = info, action) => {
    switch(action.type) {
        case "SET_PLAYER_ID":
            state.playerId = action.payload;
            return state;
        case "SET_ROOM_ID":
            state.roomId = action.payload;
            return state;
        case "SET_MULTI_PLAY":
            state.multiPlay = action.payload;
            return state;
        default:
            return state;
    }
};
export default infoReducer;