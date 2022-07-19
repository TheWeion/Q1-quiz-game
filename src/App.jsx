import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import * as Pages from './pages';
import './App.css';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Pages.MainMenu />} />
        <Route path="/intro" element={<Pages.Intro />} />
        <Route path="/settings" element={<Pages.GameSettings />} />
        <Route path="/rules" element={<Pages.Rules />} />
        <Route path="/game" element={<Pages.Game />} />
        <Route path="/gameover" element={<Pages.GameOver />} />
        <Route path="/leaderboard" element={<Pages.Leaderboard />} />
      </Routes>
    </Container>
  );
}

export default App;
