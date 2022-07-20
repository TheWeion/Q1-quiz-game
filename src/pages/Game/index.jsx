import React from 'react';
import { useSelector } from 'react-redux';
import Question from '../../components/Question';
import Timeline from '../../components/Timeline';

const Game = () => {

	const players = useSelector(state => state.playersReducer);
    const questions = useSelector(state => state.questionsReducer);

	return (
		<>
			<Question playerId={1} players={players} questions={questions} />
			<br />
			<Timeline playerId={1} players={players} />
		</>
	);
}

export default Game