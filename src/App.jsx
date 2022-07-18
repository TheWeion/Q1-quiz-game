import logo from './logo.svg';
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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
