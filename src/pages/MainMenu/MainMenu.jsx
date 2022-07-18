import React from 'react';
import logo from './logo.svg';

const MainMenu = () => {
	  return (
		<>
			<img src={logo} className="App-logo" alt="logo" />

			<div className="main-menu" >
				<div className="frm-menu-container">
					<MenuForm ></MenuForm>
				</div>
			</div>
		</>
  );
};

export default MainMenu;