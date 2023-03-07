import "./TopBar.css";

function TopBar() {
  return (
    <div className="top-bar-container">

        <div className="upper">
          <div className="content">
            <h1>CHORDBOARD</h1>
            <div className="account">
              <button className="log-in">Login</button>
              <button className="sign-up">Sign Up</button>
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
