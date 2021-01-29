import React, { Component } from 'react'
import './log.css'
import Main from './Main'

export class Login extends Component {

  onclicked () {
    <h1>Hi</h1>
  }

  render() {
    return (
      <div>
        <center>
          <h1 className = "heading">Welcome to Login Page</h1>
          <form>
            <label className = "user">Username</label>
            <t></t> <t></t>
            <input></input>
            <br></br> <br></br>
            <label className = "user">Password</label>
            <t></t> <t></t> <t></t> <t></t>
            <input></input>
            <br></br> <br></br>
            <button className = "user">login</button>
            <br></br> <br></br>
            <p>New user? Sign up here</p>
            <button onClick = {this.onclicked}>Sign Up</button>
          </form>
          </center>
      </div>
    )
  }
}

export default Login

