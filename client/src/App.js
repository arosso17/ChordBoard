import './App.css';
import ChordBoard from './components/ChordBoard';
import TopBar from './components/TopBar';
import {Login} from './components/Login';
import {Register} from './components/Register';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="Content">
        <Routes>
          <Route path="/" element={<ChordBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
