import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updatePlayer } from "../../actions";
import {useDispatch } from "react-redux";

const Question = ({playerId, players, questions}) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const targetPlayer = players.filter((cur)=>cur.id===playerId)[0];

    const setEnteredPit = () => {
        let player = targetPlayer;
        player.pit_entered = true;
        dispatch(updatePlayer(player));
    };

    const moveToNextLap = () => {
        let player = targetPlayer;
        if ((targetPlayer.lap + 1) !== questions.length) {
            player.lap = player.lap + 1;
            dispatch(updatePlayer(player));
        } else {
            alert('Finish');
            player.timer_start = false;
            dispatch(updatePlayer(player));
            navigate('/gameover');
        }
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
        renderQuestionHTML(false);
    };

    const handleIncorrectAnswer = () => {
        alert("Ouch, incorrect");
        applyPenalty(5.0);
        renderQuestionHTML(false);
    };

    const handleDrs = () => {
        // If not the 1st or the last lap
        if ((targetPlayer.lap + 1) !== 1 && (targetPlayer.lap + 1) !== questions.length) {
            if (!targetPlayer.drs_used) {
                alert("DRS opened");
                setDrsUsed();
                moveToNextLap();
                renderQuestionHTML(false);
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
            renderQuestionHTML(true);
        } else {
            alert("Oops, no more pit stop");
        }
    };

    const handleStartTimer = () => {
        let player = targetPlayer;
        player.timer = 0.0;
        player.timer_start = true;
        dispatch(updatePlayer(player));
        renderQuestionHTML(false);
    };

    const renderQuestionHTML = (elimilateIncorrectAnswers) => {
        let html;
        let curQuestion = questions[targetPlayer.lap];
        if (curQuestion !== undefined && curQuestion !== null) {
            if (curQuestion !== undefined && curQuestion !== null) {
                
                html = `
                    <h1>Lap: ${ (targetPlayer.lap + 1) } </h1>
                    <h1>Timer: ${ (targetPlayer.timer) }s </h1>
                    <h1>Timer start: ${ (targetPlayer.timer_start) } </h1>
                    <br />`;
                
                let list = [];
                if (!targetPlayer.timer_start) {
                    html = html + `<h2>Get ready?</h2>`;
                    html = html + `<button id="start_button">I'm ready</button><br></br>`;
                } else {
                    html = html + `
                        <h1>${ curQuestion.category }</h1>
                        <h3>${ curQuestion.question }</h3>`;
                    let correct = curQuestion.correct_answer;
                    list = curQuestion.incorrect_answers;
                    if (elimilateIncorrectAnswers) {
                        list = [];
                        list[0] = curQuestion.incorrect_answers[0];
                    }
                    const positionInsertCorrectAnswer = Math.round(Math.random()*(curQuestion.incorrect_answers.length + 1));
                    if (!list.includes(correct)) {
                        list.splice(positionInsertCorrectAnswer, 0, correct);
                    }
                    list.map((cur, index)=>{
                        html = html + `<button id="button_${ index }">${ cur }</button><br></br>`;
                    });
                    html = html + `
                        <button id="drs_button">Open RDS</button><p>*Skip 1 question</p><br></br>
                        <button id="pit_button">Enter Pit</button><p>*Eliminate 2 incorrect answers</p>`;
                }
                const questionDiv = document.getElementById("question_content");
                if (questionDiv !== undefined && questionDiv != null) {
                    questionDiv.innerHTML = html;
                    
                }
                const startButton = document.getElementById("start_button");
                if (startButton !== undefined && startButton !== null) {
                    startButton.addEventListener('click', ()=>{
                        handleStartTimer();
                    });
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
                const drsButton = document.getElementById("drs_button");
                if (drsButton !== undefined && drsButton !== null) {
                    drsButton.addEventListener('click', ()=>{
                        handleDrs();
                    });
                }
                const pitButton = document.getElementById("pit_button");
                if (pitButton !== undefined && pitButton !== null) {
                    pitButton.addEventListener('click', ()=>{
                        handlePit();
                    });
                }
            }
        }
    };

    useEffect(()=>{
        renderQuestionHTML(false);
    }, [players]);

    return (
        <>
            <div id="question_content">
                { renderQuestionHTML(false) }    
            </div>
        </>
    );
};

export default Question;