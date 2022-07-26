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

export const createRoom = (object) => {
    return {
        type: "CREATE_ROOM",
        payload: object
    }
};

export const setInfo = (object) => {
    return {
        type: "SET_INFO",
        payload: object
    }
};