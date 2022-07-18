import React, { useEffect } from 'react';
import { setQuestions } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import QuestionList from '../QuestionList';
import Question from '../Question';

const GetQuestions = () => {
    const questions = useSelector(state => state.questionsReducer);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const generateQuestions = (lap, difficulty, topic) => {
        const questions = new Promise((resolve, reject) => {
            try {
                let url = ``;
                if (topic === 0) {
                    url = `https://opentdb.com/api.php?amount=${lap}&difficulty=${difficulty}&type=multiple`;
                } else {
                    url = `https://opentdb.com/api.php?amount=${lap}&difficulty=${difficulty}&category=${topic}&type=multiple`;
                }
                const axios = require('axios');
                axios.get(url).then((cur)=>{
                    if (cur.data.response_code === 0) {
                        resolve(cur.data.results);
                    } else {
                        reject("Code: " + cur.data.response_code);
                    }
                });
            } catch(err) {
                reject(err);
            }
          });
        questions.then((cur)=>{
            dispatch(setQuestions(cur));
            navigate("../rules");
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const topic = document.getElementById("topic").value;
        const lap = document.getElementById("lap").value;
        const difficulty = document.getElementById("difficulty").value;
        generateQuestions(lap, difficulty, topic);
    };

    const renderHTML = () => {
        return (
            <>
                <form id="generateQuestions" onSubmit={handleSubmit}>
                    <select id="topic">
                        <option value="0">Any Topic</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>
                    </select>
                    <select id="lap">
                        <option value="5">5 Laps</option>
                        <option value="10">10 Laps</option>
                        <option value="15">15 Laps</option>
                    </select>
                    <select id="difficulty">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <br />
                    <button type="submit">Prepare car</button>
                </form>
            </>
        )
    };

    useEffect(()=>{
        renderHTML();
    }, [questions])

    return renderHTML();
};

export default GetQuestions;