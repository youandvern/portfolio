import './App.css';
import PageScheduler from './components/PageScheduler';
import NameBlock from './components/NameBlock';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameBlock />
        <div className="page-placeholder">
          <PageScheduler />
        </div>
        <div className="spacer-b-8"></div>
      </header>
    </div>
  );
}

export default App;
