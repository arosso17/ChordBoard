import "./TopBar.css";
import { useNavigate } from 'react-router-dom'

function TopBar() {
  const navigate = useNavigate();
  const goToLogin = () =>{ 
    let path = `./login`; 
    navigate(path);
  };
  const goToRegister = () =>{ 
    let path = `./register`; 
    navigate(path);
  };
  return (
    <div className="top-bar-container">

        <div className="upper">
          <div className="content">
            <h1>CHORDBOARD</h1>
            <div className="account">
              <button onClick={goToLogin} className="log-in">Login</button>
              <button onClick={goToRegister} className="sign-up">Sign Up</button>
            </div>
          </div>
        </div>

        <div className="lower">
          <div className="content">
            nav links
          </div>
        </div>  

    </div>
  );
}

export default TopBar;
