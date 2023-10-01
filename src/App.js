import logo from './logo.svg';
import './App.css';
import GamePage from "./template/gamePage/GamePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    <GamePage/>
    </div>
  );
}

export default App;
