import React from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div className='login-container'>
      <form>
        <input
          type='text'
          name='username'
        />
        <input 
          type='text'
          name='password'
        />
        <button>Login!</button>
      </form>
    </div>
  );
};

export default Login;
