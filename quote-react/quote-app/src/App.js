import './App.css';
import logo from './logo.svg';
import getQuote from './Actions/QuoteAction'

const axios = require('axios');
async function getUser() {
  try {
    const response = await axios.get('/api/quote/ID69');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="alsoFuzzy">
         Not sure what to do
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
    </div>
  );
}

export default App;
