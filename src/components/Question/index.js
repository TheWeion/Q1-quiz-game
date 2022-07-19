import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updatePlayer } from "../../actions";
import { useDispatch } from "react-redux";
import Timer from '../Timer';

const Question = ({playerId, players, questions}) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const targetPlayer = players.filter((cur)=>cur.id===playerId)[0];

    const [time, setTime] = useState(0);
    const [penalty, setPenalty] = useState(0);
    const [clockRunning, setClockRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (clockRunning) {
            interval = setInterval(()=>{
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
            if (time !== targetPlayer.timer) {
                let player = targetPlayer;
                player.timer = time;
                updatePlayerRedux(player);
                setTime(player.timer);
                setPenalty(player.penalty);
            }
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [clockRunning]);

    useEffect(()=>{
        renderQuestionHTML(false);
    }, [clockRunning]);

    const setEnteredPit = () => {
        let player = targetPlayer;
        player.pit_entered = true;
        updatePlayerRedux(player);
    };

    const moveToNextLap = () => {
        let player = targetPlayer;
        if ((targetPlayer.lap + 1) !== questions.length) {
            player.lap = player.lap + 1;
            updatePlayerRedux(player);
        } else {
            alert('Finish');
            navigate('/gameover');
        }
    };

    const applyPenalty = (second) => {
        let player = targetPlayer;
        let newVal = player.penalty + second;
        player.penalty = newVal;
        updatePlayerRedux(player);
    };

    const setDrsUsed = () => {
        let player = targetPlayer;
        player.drs_used = true;
        updatePlayerRedux(player);
    };

    const handleCorrectAnswer = () => {
        setClockRunning(false);
        alert("Correct");
        moveToNextLap();
    };

    const handleIncorrectAnswer = () => {
        alert("Ouch, incorrect");
        applyPenalty(5000);
        renderQuestionHTML(false);
    };

    const handleDrs = () => {
        if (!targetPlayer.drs_used) {
            // If not the 1st or the last lap
            if ((targetPlayer.lap + 1) !== 1 && (targetPlayer.lap + 1) !== questions.length) {
                setClockRunning(false);
                setDrsUsed();
                alert("DRS opened");
                moveToNextLap();
            } else {
                alert("You are not allowed to open DRS in lap: " + (targetPlayer.lap + 1));
            }
        } else {
            alert("Ouch, no more DRS");
        }        
    };

    const handlePit = () => {
        if (!targetPlayer.pit_entered) {
            alert("Box box");
            setEnteredPit();
            applyPenalty(10000);
            // Elimilate 2 incorrect answers
            renderQuestionHTML(true);
        } else {
            alert("Oops, no more pit stop");
        }
    };

    const handleStartTimer = () => {
        setClockRunning(true);
    };

    const updatePlayerRedux = (player) => {
        dispatch(updatePlayer(player));
    };

    const renderQuestionHTML = (elimilateIncorrectAnswers) => {
        let html;
        let curQuestion = questions[targetPlayer.lap];
        if (curQuestion !== undefined && curQuestion !== null) {
            if (curQuestion !== undefined && curQuestion !== null) {
                
                html = `<h1>Lap: ${ (targetPlayer.lap + 1) } </h1><br></br>`;
                let list = [];
                if (!clockRunning) {
                    html = html + `<h2>Ready?</h2>`;
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
            <h1>Timer: <Timer time={time + penalty} /></h1>
            <div id="question_content">    
            </div>
        </>
    );
};

export default Question;