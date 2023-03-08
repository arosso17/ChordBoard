import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./ChordBoard.css";

function ChordBoard() {
  const [data, setData] = useState('')
  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:1337/user",
    }).then((res) => setData(res.data))
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="chord-board-container">
      chord board <br />
      Hello {data.username}!
    </div>
  );
}

export default ChordBoard;
