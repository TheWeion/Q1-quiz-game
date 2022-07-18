import React from 'react';
import logo from './logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const MainMenu = () => {
	  return (
		<>
				<img src={logo} className="App-logo" alt="logo" />
				<div className="main-menu" >
					<div className="frm-menu-container">
						{/* <MenuForm /> */}
					</div>
				</div>
				<Button id="nav-next" href="/intro">Join</Button>
		</>
  );
};

export default MainMenu;