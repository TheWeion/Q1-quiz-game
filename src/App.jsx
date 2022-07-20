import React from 'react';
import { Routes, Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import * as Pages from './pages';
import { ExitNav, GameNav } from './components';
import svgCar from './pitstop_car_2.svg';
import './App.scss';


// Frontend Flow

//   1. User opens this app in their Browser
//   2. A screen appears where they can either enter a room PIN and username to join a session or just the latter to create a session via the buttons on the form.
//   3. As soon as 4 players have joined the session, the game begins.

// Other Players Flow:
//   1. User opens this app in their Browser
//   2. User enters a room PIN and username to join a session


const App = () => {
  return (
    <>
      <Container className='d-flex justify-content align-items-center h-100'>
        <Card className='game-container'>
          <Card.Header>
            <ExitNav />
          </Card.Header>
            <Card.Body>
              <Routes>
                <Route path="/" element={<Pages.MainMenu />} />
                <Route path="/intro" element={<Pages.Intro />} />
                <Route path="/settings" element={<Pages.GameSettings />} />
                <Route path="/rules" element={<Pages.Rules />} />
                <Route path="/game" element={<Pages.Game />} />
                <Route path="/gameover" element={<Pages.GameOver />} />
                <Route path="/leaderboard" element={<Pages.Leaderboard />} />
              </Routes>
            </Card.Body>
            <Card.Footer>
              <GameNav />
            </Card.Footer>
        </Card>
      </Container>
      <div className="wrap">
        <img src={svgCar} className="svg" alt="svg-car" />
        <img src={svgCar} className="svg" alt="svg-car" />
        <img src={svgCar} className="svg" alt="svg-car" />
        <img src={svgCar} className="svg" alt="svg-car" />
        <img src={svgCar} className="svg" alt="svg-car" />
      </div>
    </>
  );
}

export default App;