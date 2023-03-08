import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function Register() {
    const navigate = useNavigate()
    const[registerusername, setregisterUsername] = useState('');
    const[registerpassword, setregisterPassword] = useState('');
  
    const register = (event) => {
    event.preventDefault();
  
    axios({
      method: "POST",
      data: {
        username: registerusername,
        password: registerpassword,
      },
      withCredentials: true,
      url: "http://localhost:1337/register",
    }).then((res) => {
        console.log(res);
        navigate(`/login`)
    });
  };
    return (
    <div className='App'>
      <div>
        <h1>Register</h1>
        <form onSubmit={register}>
          <input value = {registerusername} onChange={(e) => setregisterUsername(e.target.value)} type="text" placeholder="Name" />
          <input value = {registerpassword} onChange={(e) => setregisterPassword(e.target.value)} type="password" placeholder="Password" />
          <input value="Register" type="submit"/>
        </form>
      </div>
    </div>
)}