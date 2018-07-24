import React from 'react'
import Link from 'gatsby-link'

import bradLogo from '../images/BradLogo.png'

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light navbar-teal  ">
    <a className="navbar-brand " href="">
      <img src={bradLogo} alt="Brad Hankee" className="hankeeLogo my-auto " />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto ">
        <li className="nav-item active my-auto">
          <Link to="/">
            <span>HOME</span>
          </Link>
        </li>
        <li className="nav-item active my-auto ">
          <Link to="/resume">
            <span>RESUME</span>
          </Link>
        </li>
        <li className="nav-item active my-auto">
          <a href="https://medium.com/code-a-la-carte" target="_blank">
            <span>BLOG</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default NavBar
