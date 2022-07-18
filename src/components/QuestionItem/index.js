import React from 'react';

const QuestionItem = ({item}) => {

    const renderHTML = () => {
        if (item !== undefined && item !== null) {
            return (
                <>
                    <h1>{ item.category }</h1>
                    <h3>{ item.question }</h3>
    
                    <p>{ item.correct_answer }</p>
                    { item.incorrect_answers.map((cur)=><p>{ cur }</p>)}
                </>
            )
        }
        return (<></>);
    };
    return renderHTML();
};

export default QuestionItem;