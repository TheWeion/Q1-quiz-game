import React from 'react';
import { useSelector } from "react-redux";
import QuestionItem from '../QuestionItem';

const QuestionList = () => {
    const questions = useSelector(state => state.questionsReducer);

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