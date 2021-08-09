import logo from './logo.svg';
import './App.css';
import WordGroup from './components/WordGroup';
import Planet from './components/Planet';
import { useState } from 'react';

function App() {
  const [landing, setLanding] = useState(false) // landing planet has been clicked

  return (
    <div className="App">
      <div className="name-block">
        <h3>Andrew Young</h3>
        <p>Software Engineer</p>
      </div>
      <header className="App-header">
        <Planet text="" setFinished={setLanding}/>
        <WordGroup display={landing}/>


      </header>
    </div>
  );
}

export default App;
