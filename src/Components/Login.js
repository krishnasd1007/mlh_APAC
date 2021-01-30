import React, { Component } from 'react'
import './log.css'
import Main from './Main'
//import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

export class Login extends Component {

  render() {
    return (
      <body className = "body1">
        <center>
          <br></br>
          <br></br>
          <body className = "body">
            <center>
              <h1 className = "heading">Welcome to BookBoard</h1>
              <form>
                <label className = "user">Username</label>
                <t></t> <t></t>
                <input></input>
                <br></br> <br></br>
                <label className = "user">Password</label>
                <t></t> <t></t> <t></t> <t></t>
                <input></input>
                <br></br> <br></br>
                <Link to = "/main">
                  <button className = "user">Login</button>
                </Link>
                <br></br> <br></br>
                <p className = "user">New user? Sign up </p> <Link><a className = "user">here</a></Link>
              </form>
              <p className = "user">This is a place to list your old and unused books</p>
              <p className = "user">So that others can contact you and give them to people in need</p>
              </center>
          </body>
        </center>
      </body>
    )
  }
}

export default Login

