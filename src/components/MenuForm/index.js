import React from 'react';

const MenuForm = () => {
	  return (
		<>
				<form>
                    <label for="gamePin">Game Pin</label>
                    <input type="text" id="gamePin" name="gamePin"></input>
                    <label for="userName">User Name</label>
                    <input type="text" id="userName" name="userName" ></input>
                    <input type="submit" id="submit" name="submit" ></input>
                    
                </form>
		</>
  );
};

export default MenuForm;
