import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import QuestionItem from '../QuestionItem';

const QuestionList = () => {
    const questions = useSelector(state => state.questionsReducer);
    const dispatch = useDispatch();

    const renderHTML = () => {
        if (questions !== undefined && questions !== null) {
            return (
                <>
                    { questions.map((cur)=><QuestionItem item={cur} />)}
                </>
            );
        }
        return (<></>);
    };
    return renderHTML();
};

export default QuestionList;