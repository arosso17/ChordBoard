import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function Login() {
  const navigate = useNavigate()
  const[loginusername, setloginUsername] = useState('');
  const[loginpassword, setloginPassword] = useState('');

  const login = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      data: {
        username: loginusername,
        password: loginpassword,
      },
      withCredentials: true,
      url: "http://localhost:1337/login",
    }).then((res) => {
        console.log(res);
        navigate(`/`, {state:{username: loginusername, password: loginpassword}})
    });
  };

    return (
    <div className='App'>
      <div>
        <h1>Login</h1>
        <form onSubmit={login}>
          <input value = {loginusername} onChange={(e) => setloginUsername(e.target.value)} type="text" placeholder="Name" />
          <input value = {loginpassword} onChange={(e) => setloginPassword(e.target.value)} type="password" placeholder="Password" />
          <input value="Login" type="submit"/>
        </form>
      </div>
    </div>
)}