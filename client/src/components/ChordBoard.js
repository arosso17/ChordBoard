import { useLocation } from "react-router-dom";
import "./ChordBoard.css";

function ChordBoard() {
  let { state } = useLocation();
  if (!state) { state = {username: "Guest", password: ""}};
  return (
    <div className="chord-board-container">
      chord board <br />
      Hello {state.username}!
    </div>
  );
}

export default ChordBoard;
