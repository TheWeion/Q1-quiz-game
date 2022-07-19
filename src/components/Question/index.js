import React, { useEffect } from 'react';
import { updatePlayer } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const Question = ({playerId}) => {
    const players = useSelector(state => state.playersReducer);
    const questions = useSelector(state => state.questionsReducer);
    const dispatch = useDispatch();

    const targetPlayer = players.filter((cur)=>cur.id===playerId)[0];

    const setEnteredPit = () => {
        let player = targetPlayer;
        player.pit_entered = true;
        dispatch(updatePlayer(player));
    };

    const moveToNextLap = () => {
        let player = targetPlayer;
        player.lap = player.lap + 1;
        dispatch(updatePlayer(player));
    };

    const applyPenalty = (second) => {
        let player = targetPlayer;
        player.timer = player.timer + second;
        dispatch(updatePlayer(player));
    };

    const setDrsUsed = () => {
        let player = targetPlayer;
        player.drs_used = true;
        dispatch(updatePlayer(player));
    };

    const handleCorrectAnswer = () => {
        alert("Correct");
        moveToNextLap();
        renderQuestionHTML();
    };

    const handleIncorrectAnswer = () => {
        alert("Ouch, incorrect");
        applyPenalty(5.0);
    };

    const handleDrs = () => {
        // If not the 1st or the last lap
        if ((targetPlayer.lap + 1) !== 1 && (targetPlayer.lap + 1) !== questions.length) {
            if (!targetPlayer.drs_used) {
                alert("DRS");
                setDrsUsed();
                moveToNextLap();
                renderQuestionHTML();
            } else {
                alert("Ouch, no more DRS");
            }
        } else {
            alert("You are not allowed to open DRS in lap: " + (targetPlayer.lap + 1));
        }        
    };

    const handlePit = () => {
        if (!targetPlayer.pit_entered) {
            alert("Box box");
            setEnteredPit();
            applyPenalty(10.0);
            // Elimilate 2 answers
        } else {
            alert("Oops, no more pit stop");
        }
    };

    const renderQuestionHTML = () => {
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
                                handleCorrectAnswer();
                            } else {
                                handleIncorrectAnswer();
                            }
                        });
                    }
                });
            }
        }
    };

    useEffect(()=>{
        renderQuestionHTML();
    }, [players]);

    return (
        <>
            <div id="question_content">
                { renderQuestionHTML() }    
            </div>
            <button onClick={()=>handleDrs()}>Open RDS</button><p>*Skip 1 question</p><br />
            <button onClick={()=>handlePit()}>Enter Pit</button><p>*Eliminate 2 incorrect answers</p>
        </>
    );
};

export default Question;