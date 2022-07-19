import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate } from 'react-router-dom';


const ExitNav = () => {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);

	const ExitHandler = () => {
		// If the page is anything other than /game then navigate to the / page otherwise display a dialog asking if the user wants to go to the / page.
		if (window.location.pathname !== '/game') {
			navigate('/');
		} else {
			console.log(window.location.pathname);
			setShow(true);
		}
	}

	return (
		<>
			<CloseButton id="nav-exit" onClick={ExitHandler} />
			<Alert variant="warning" show={show}>
				<Alert.Heading>Are you sure you want to exit?</Alert.Heading>
				<p>This will end your online session, are you sure?</p>
				<hr />
				<div className="d-flex justify-content-end">
					<Button variant="primary" onClick={() => setShow(false)}>Cancel</Button>
					<Button variant="outline-danger" onClick={() => { 
														navigate('/');
														setShow(false);
													}}>Exit
					</Button>
				</div>
			</Alert>
		</>
		)
	}

export default ExitNav;