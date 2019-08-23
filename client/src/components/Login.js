import React, {useState} from "react";
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({username: '', password: ''})

  
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const login = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', credentials) 
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload) 
      })
      .catch(err => console.log(err)) 
  }

  const handleChange = e => {
    console.log(credentials)
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div className='login-container'>
      <form onSubmit={login}>
        <input
          type='text'
          name='username'
          value={credentials.username}
          onChange={handleChange}
        />
        <input 
          type='password'
          name='password'
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Login!</button>
      </form>
    </div>
  );
};

export default Login;
