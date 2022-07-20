import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updatePlayer } from "../../actions";
import { useDispatch } from "react-redux";
import Timer from '../Timer';
import Radio from '../Radio';
import { getRadioMessage } from '../Radio/radio';
import './style.css'
import Timeline from '../Timeline';

const Question = ({playerId, players, questions}) => {
    const dispatch = useDispatch();


    const navigate = useNavigate();

    const targetPlayer = players.filter((cur)=>cur.id===playerId)[0];

    const [time, setTime] = useState(0); // Total time elapsed
    const [penalty, setPenalty] = useState(0); // Total penalty time
    const [radioMessage, setRadioMessage] = useState(`"Ready?"`);
    const [startPress, setStartPress] = useState(false);
    const [foundCorrectAnswer, setFoundCorrectAnswer] = useState(false);
    const [clockRunning, setClockRunning] = useState(false);

    const POSITIVE_MESSAGE = `positive`;
    const NEGATIVE_MESSAGE = `negative`;
    const FINISH_MESSAGE = "finish";

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
        if (foundCorrectAnswer) {
            wait(2).then(()=>{
                setFoundCorrectAnswer(false);
                renderQuestionHTML(false);
            });
        }
        if (startPress) {
            setStartPress(false);
            renderQuestionHTML(false);
        }
    }, [clockRunning]);
    
    const wait = async(second) => {
        return new Promise(resolve => setTimeout(resolve, second*1000));
    };

    ////// Handle Actions //////

    const handleStartTimer = () => {
        setClockRunning(true);
        setStartPress(true);
    };

    const handleCorrectAnswer = (cur) => {
        handleCorrectAnswerButtonColorAndMessageBox(cur.id, `Correct`);
        setClockRunning(false);
        setRadioMessage(getRadioMessage(POSITIVE_MESSAGE));
        setFoundCorrectAnswer(true);
        moveToNextLap();
    };

    const handleIncorrectAnswer = (cur) => {
        handleIncorrectAnswerButtonColorAndMessageBox(cur.id, `Incorrect`);
        setRadioMessage(getRadioMessage(NEGATIVE_MESSAGE));
        applyPenalty(5);
        //renderQuestionHTML(false);
    };

    const handleDrs = (cur) => {
        if (!targetPlayer.drs_used) {
            // If not the 1st or the last lap
            if ((targetPlayer.lap + 1) !== 1 && (targetPlayer.lap + 1) !== questions.length) {
                handleCorrectAnswerButtonColorAndMessageBox(cur.id, `Correct`);
                setClockRunning(false);
                setDrsUsed();
                setRadioMessage(`"DRS opened !"`);
                setFoundCorrectAnswer(true);
                moveToNextLap();
            } else {
                let message = `You are not allowed to open DRS in lap: ${(targetPlayer.lap + 1)}`;
                setRadioMessage(`"${message}"`);
                showMessageForSecond(`drs_message`, message, 2);
            }
        } else {
            let message = `No more DRS`;
            setRadioMessage(`"${message}"`);
            showMessageForSecond(`drs_message`, message, 2);
        }        
    };

    const handlePit = () => {
        if (!targetPlayer.pit_entered) {
            setRadioMessage(`"Box box box !"`);
            setEnteredPit();
            applyPenalty(10);
            // Elimilate 2 incorrect answers
            wait(1).then(()=>{
                renderQuestionHTML(true);
            });
        } else {
            let message = `No more Pit stop`;
            setRadioMessage(`"${message}"`);
            showMessageForSecond(`pit_message`, message, 2);
        }
    };

    ////// Handle Redux //////

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
            setRadioMessage(getRadioMessage(FINISH_MESSAGE));
            wait(3).then(()=>{
                navigate('/gameover');
            });
        }
    };

    const applyPenalty = (second) => {
        let player = targetPlayer;
        let newVal = player.penalty + second*1000;
        player.penalty = newVal;
        updatePlayerRedux(player);
    };

    const setDrsUsed = () => {
        let player = targetPlayer;
        player.drs_used = true;
        updatePlayerRedux(player);
    };

    const updatePlayerRedux = (player) => {
        dispatch(updatePlayer(player));
    };

    ////// Handle Button + Message //////

    const handleCorrectAnswerButtonColorAndMessageBox = (index, message) => {
        const curButton = document.getElementById("button_" + index);
        if (curButton !== undefined && curButton != null) {
            curButton.className = `btn btn-success`;
            wait(2).then(()=>{
                curButton.className = `btn btn-primary`;
            });
        }
        showMessageForSecond(`correct_message_` + index, message, 2);
    };

    const handleIncorrectAnswerButtonColorAndMessageBox = (index, message) => {
        const curButton = document.getElementById("button_" + index);
        if (curButton !== undefined && curButton != null) {
            curButton.className = `btn btn-danger`;
            wait(2).then(()=>{
                curButton.className = `btn btn-primary`;
            });
        }
        showMessageForSecond(`incorrect_message_` + index, message, 2);
    };

    const showMessageForSecond = (objectId, message, second) => {
        const targetDiv = document.getElementById(objectId);
        if (targetDiv !== undefined && targetDiv != null) {
            targetDiv.innerHTML = `${message}`;
            wait(second).then(()=>{
                targetDiv.innerHTML = ``;
            });
        }
    };

    ////// HTML //////

    const renderQuestionHTML = (elimilateIncorrectAnswers) => {
        let html;
        let curQuestion = questions[targetPlayer.lap];
        if (curQuestion !== undefined && curQuestion !== null) {
            if (curQuestion !== undefined && curQuestion !== null) {
                
                html = `
                    <div class="row">
                        <div class="col">
                            <h1>Lap: ${ (targetPlayer.lap + 1) } / ${ questions.length } </h1>
                        </div>
                    </div><br></br>`;
                let list = [];
                let correct = {};
                if (!clockRunning) {
                    html = html + `
                        <div class="row">
                            <div class="col">
                                <h2>Ready?</h2>
                                <button id="start_button" class="btn btn-primary">I'm ready</button>
                            </div>
                        </div>`;
                } else {
                    html = html + `
                        <div class="row">
                            <div class="col">
                                <div class="question_category">${ curQuestion.category }</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="question_content">${ curQuestion.question }</div>
                            </div>
                        </div>`;
                    correct = {"correct": true, "value": curQuestion.correct_answer};
                    curQuestion.incorrect_answers.map((cur)=>list.push({"correct": false, "value": cur}));
                    if (elimilateIncorrectAnswers) {
                        list = [];
                        list[0] = {"correct": false, "value": curQuestion.incorrect_answers[0]};
                    }
                    const positionInsertCorrectAnswer = Math.round(Math.random()*(curQuestion.incorrect_answers.length));
                    if (!list.includes(correct)) {
                        list.splice(positionInsertCorrectAnswer, 0, correct);
                    }
                    list.map((cur, index)=>{
                        list[index]['id'] = index;
                        html = html + `
                        <div class="row">
                            <div class="col">
                                <div class="row justify-content-start">
                                    <div class="col-1">
                                        <div class="question_number">${ index + 1 }.</div>
                                    </div>
                                    <div class="col">
                                        <button id="button_${ index }" class="btn btn-primary">${ cur.value }</button>
                                        <div id="correct_message_${ index }" class="correct_message"></div>
                                        <div id="incorrect_message_${ index }" class="incorrect_message"></div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                    });
                    console.log(list);
                    let drsClass = `class="btn btn-danger"`;
                    if (targetPlayer.drs_used) {
                        drsClass = `class="btn btn-secondary"`;
                    }
                    let pitClass = `class="btn btn-warning"`;
                    if (targetPlayer.pit_entered) {
                        pitClass = `class="btn btn-secondary"`;
                    }
                    html = html + `
                        <div class="row">
                            <div class="col">
                                <div class="row">
                                    <div class="col">
                                        <button id="button_drs" ${drsClass}>Open RDS</button>
                                        <div id="drs_message" class="incorrect_message no-new-line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                            <div class="row">
                                    <div class="col">
                                        <button id="button_pit" ${pitClass}>Pit Stop</button>
                                        <div id="pit_message" class="incorrect_message no-new-line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br><br/>`;
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
                list.map((cur)=>{
                    const curButton = document.getElementById("button_" + cur.id);
                    if (curButton !== undefined && curButton !== null) {
                        curButton.addEventListener('click', ()=>{
                            if (cur.correct) {
                                handleCorrectAnswer(cur);
                            } else {
                                handleIncorrectAnswer(cur);
                            }
                        });
                    }
                });
                const drsButton = document.getElementById("button_drs");
                if (drsButton !== undefined && drsButton !== null) {
                    drsButton.addEventListener('click', ()=>{
                        handleDrs(correct);
                    });
                }
                const pitButton = document.getElementById("button_pit");
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
            <div class="row">
                <div class="col-10">
                    <div id="question_content"></div>
                </div>
                <div class="col-2">
                    <Radio message={radioMessage} />
                </div>
                <div className='wrapper2'>
                    <Timeline players={players}/>
                </div>
            </div>
            
            
        </>
    );
};

export default Question;