import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ margin: 20 }}>
        <Counter />
      </div>
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
