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