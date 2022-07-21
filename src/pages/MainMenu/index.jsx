import React from 'react';
import MenuForm from '../../components/MenuForm';
import './styles.css';

const MainMenu = () => {
	  return (
		<>
				<div className="main-menu" >
					<div className="frm-menu-container">
						<MenuForm />
					</div>
				</div>
		</>
  );
};

export default MainMenu;