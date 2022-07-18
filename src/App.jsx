import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.MainMenu />} />
      <Route path="/intro" element={<Pages.Intro />} />
      <Route path="/settings" element={<Pages.GameSettings />} />
      <Route path="/rules" element={<Pages.Rules />} />
      <Route path="/game" element={<Pages.Game />} />
      <Route path="/gameover" element={<Pages.GameOver />} />
      <Route path="/leaderboard" element={<Pages.Leaderboard />} />
    </Routes>
  );
}

export default App;
