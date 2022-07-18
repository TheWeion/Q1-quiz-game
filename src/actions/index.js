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