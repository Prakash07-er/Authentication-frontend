import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>       
            <nav>
                <div className="nav-wrapper">
                <a href="/" className="brand-logo">Authentication</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}
