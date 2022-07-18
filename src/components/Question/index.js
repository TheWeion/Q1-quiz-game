import React, { useEffect } from 'react';
import { updatePlayer } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const Question = ({playerId}) => {
    const players = useSelector(state => state.playersReducer);
    const questions = useSelector(state => state.questionsReducer);
    const dispatch = useDispatch();

    const targetPlayer = players.filter((cur)=>cur.id===playerId)[0];

    const nextQuestion = () => {
        let player = targetPlayer;
        player.lap = player.lap + 1;
        dispatch(updatePlayer(player));
        renderHTML();
    };

    const renderHTML = () => {
        let html;
        let curQuestion = questions[targetPlayer.lap];
        if (curQuestion !== undefined && curQuestion !== null) {
            if (curQuestion !== undefined && curQuestion !== null) {
                
                html = `
                    <h1>${ curQuestion.category }</h1>
                    <h3>${ curQuestion.question }</h3>
                    <ul>`;
                        let correct = curQuestion.correct_answer;
                        let list = curQuestion.incorrect_answers;
                        const positionInsertCorrectAnswer = Math.round(Math.random()*(curQuestion.incorrect_answers.length + 1));
                        if (!list.includes(correct)) {
                            list.splice(positionInsertCorrectAnswer, 0, correct);
                        }
                        list.map((cur, index)=>{
                            html = html + `<li key=${ index }><button id="button_${ index }">${ cur }</button></li>`;
                        });
                html = html + `</ul>`;
                const questionDiv = document.getElementById("question_content");
                if (questionDiv !== undefined && questionDiv != null) {
                    questionDiv.innerHTML = html;
                    
                }
                list.map((cur, index)=>{
                    const curButton = document.getElementById("button_" + index);
                    if (curButton !== undefined && curButton !== null) {
                        curButton.addEventListener('click', ()=>{
                            if (cur === curQuestion.correct_answer) {
                                alert("Correct");
                                nextQuestion();
                            } else {
                                alert("Incorrect");
                            }
                        });
                    }
                });
            }
        }
    };

    useEffect(()=>{
        renderHTML();
    }, [players]);

    return (
        <>
            <div id="question_content">
                { renderHTML() }    
            </div>
        </>
    );
};

export default Question;