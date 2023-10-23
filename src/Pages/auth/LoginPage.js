import React, { Component } from 'react'
import './../auth/Login.css';
export class LoginPage extends Component {
  render() {
    return (
      <div className='container'>
        <div className='box'>
          <div className='header'> <h1>Login</h1></div>
          <div className='form'>
            <label>User name</label>
            <input type='text'></input>

          </div>

          <div className='form'>
            <label>Password</label>
            <input type='password'></input>
          </div>


          <div className='btn-login'>
            <button>Login</button>
          </div>
       
        </div>
      </div>
    )
  }
}

export default LoginPage