import './App.css';
import ChordBoard from './components/ChordBoard';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="Content">
        <ChordBoard />
      </div>
    </div>
  );
}

export default App;
