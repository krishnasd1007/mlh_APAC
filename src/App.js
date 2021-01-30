import React, { Component } from 'react'
import './App.css'
import Login from './Components/Login'
import Main from './Components/Main'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route path = "/" exact component = {Login}></Route>
            <Route path = "/main" component = {Main}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
