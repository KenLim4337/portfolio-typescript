import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <header>
                <Link to="/">Home</Link> | <Link to="/experience">Experience</Link> | <Link to="/projects">Projects</Link> | <Link to="/about">About</Link>
            </header>
        )
    }
}

export default Header