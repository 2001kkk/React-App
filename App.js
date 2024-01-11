// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='login-container'>
        <h2>Login</h2>
        <form>
          <label for='username'>Username</label>
          <input type='text' id='username' name='username' placeholder='Enter Your Username' required></input>

          <label for='password'>Password</label>
          <input type='password' id='password' name='password' placeholder='Enter Your Password'required></input>
          <button type='Submit'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
