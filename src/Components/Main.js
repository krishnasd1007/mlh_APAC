import React, { Component } from 'react'
import './log.css'

export class Main extends Component {
    render() {
        return (
            <div className = "body1">
                <br></br>
                <ul><a contentEditable><li className = "note"><h2>User 1</h2><p>your books</p></li></a><br></br><br></br><a contentEditable><li className = "note"><h2>User 2</h2><p>your books</p></li></a></ul>
            </div>
        )
    }
}

export default Main
