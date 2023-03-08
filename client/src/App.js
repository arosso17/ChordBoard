import './App.css';
import ChordBoard from './components/ChordBoard';
import TopBar from './components/TopBar';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="Content">
        <Routes>
          <Route path="/" element={<ChordBoard />} />
          <Route path="/login" element={<h1>Login screen</h1>} />
          <Route path="/register" element={<h1>Register screen</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
