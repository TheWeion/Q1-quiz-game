import React, {useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './style.css'

const Layout = () => {

  const [position, setPosition] = useState("progress-line1"); 

const changePosition = (e) => {
    e.preventDefault("");
    setPosition("correct-line1");
  }


  return (
    <>  <header>
          <div className='container'>
            <div className={position}></div>
            <div className={position}></div>
            <div className={position}></div>
            <div className={position}></div>
                     </div>
                <label>L1</label>
                <label>L2</label>
                <label>L3</label>
                <label>L4</label>
                <label>L5</label>
                <label>L6</label>
                <label>L7</label>
                <label>L8</label>
                <label>L9</label>
                <label>L10</label>
                     <button className="Cbtn" onClick={changePosition}>correct answer button </button>
                     <button>incorrect answer button</button>
        </header>
        <Outlet />
            </>
  )
}


export default Layout;


//create a use effect so it re renders on every click with the api answers 
//then try so that only one moves at a time 