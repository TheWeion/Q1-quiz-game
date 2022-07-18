import React from 'react';
import logo from './logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';

const MainMenu = () => {
	  return (
		<>
			<img src={logo} className="App-logo" alt="logo" />

			<div className="main-menu" >
				<div className="frm-menu-container">
					{/* <MenuForm /> */}
				</div>
			</div>
			<NavLink id="nav-next" to="/intro">Join</NavLink>
		</>
  );
};

export default MainMenu;