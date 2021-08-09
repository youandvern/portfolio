import logo from './logo.svg';
import './App.css';
import Planet from './components/Planet'

function App() {
  return (
    <div className="App">
      <div className="name-block">
        <p>Andrew Young</p>
        <p>Software Engineer</p>
      </div>
      <header className="App-header">
        <Planet text="" />
      </header>
    </div>
  );
}

export default App;
