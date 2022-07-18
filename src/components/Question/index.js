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

    const prevQuestion = () => {
        let player = targetPlayer;
        player.lap = player.lap - 1;
        dispatch(updatePlayer(player));
        renderHTML();
    };

    const renderHTML = () => {
        console.log(targetPlayer)
        let html;
        let curQuestion = questions[targetPlayer.lap - 1];
        if (curQuestion !== undefined && curQuestion !== null) {
            if (curQuestion !== undefined && curQuestion !== null) {
                html = `
                <h1>${ curQuestion.category }</h1>
                <h3>${ curQuestion.question }</h3>

                <ul>
                    <li key=${ Math.round(Math.random()*1000) }>${ curQuestion.correct_answer }</li>`;
                    curQuestion.incorrect_answers.map((cur)=>{
                        html = html + `<li key=${ Math.round(Math.random()*1000) }>${ cur }</li>`;
                    });
                    html = html + `</ul>`;
            }
        }
        const questionDiv = document.getElementById("question_content");
        if (questionDiv !== undefined && questionDiv != null) {
            questionDiv.innerHTML = html;
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
            <button onClick={nextQuestion}>Next</button><br />
            <button onClick={prevQuestion}>Back</button>
        </>
    );
};

export default Question;