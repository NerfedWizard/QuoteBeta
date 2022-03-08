import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="alsoFuzzy">
          Now <code>for the magic</code> and saving the world one quote at a time!!!
        </p>
        <a
          className="App-link fuzzyBubbles"
          href="https://www.nelson.rocks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Golden Ticket
        </a>
      </header>
    </div >
  );
}

export default App;
