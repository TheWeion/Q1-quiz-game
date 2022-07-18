const questionsReducer = (state = [], action) => {
    switch(action.type) {
        case "SET_QUESTIONS":
            state = action.payload;
            return state;
        default:
            return state;
    }
};
export default questionsReducer;