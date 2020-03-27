import React from 'react'
import './Hcss.css'
function Header() {
    return (
       <div className="Head">
         <header>
          <h1>dream Places</h1>
          <nav className="nav">
            <ul className="nav-links" >
                <li >
                  <a href="/" >Home</a>
                </li>
                <li >
                  <a href="/" >About</a>
                </li>
                <li >
                  <a href="/" className="active">Tours</a>
                </li>
            </ul>
            </nav>
            </header>
          </div>
    )
}

export default Header
