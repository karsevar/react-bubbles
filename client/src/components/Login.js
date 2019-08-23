import React, {useState} from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({username: '', password: ''})

  
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = e => {
    console.log(credentials)
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div className='login-container'>
      <form>
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
