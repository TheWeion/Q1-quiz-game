export const setQuestions = (questions) => {
    return {
        type: "SET_QUESTIONS",
        payload: questions
    }
};

export const updatePlayer = (player) => {
    return {
        type: "UPDATE_PLAYER",
        payload: player
    }
};

export const createSinglePlay = (playerName) => {
    return {
        type: "CREATE_SINGLE_PLAY",
        payload: playerName
    }
};

export const createMultiPlay = () => {
    return {
        type: "CREATE_MULTI_PLAY",
        payload: null
    }
};

export const setPlayerId = (playerId) => {
    return {
        type: "SET_PLAYER_ID",
        payload: playerId
    }
};

export const setRoomId = (roomId) => {
    return {
        type: "SET_ROOM_ID",
        payload: roomId
    }
};

export const setMultiPlay = (isMultiPlay) => {
    return {
        type: "SET_MULTI_PLAY",
        payload: isMultiPlay
    }
};