import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
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
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
    <div className="jumbotron">
      <div className="container-fluid">
        <div className="row">
          <canvas id="rainCanvas" width="2000" height="100vh" />
          <div className="col-xs-12">
            <img src="Photos/brad.png" className="myPic img-fluid" />
          </div>
          <div className="col-xs-12">
            <div className="intro">
              <h1>Hi, my name is Brad and I am a</h1>
            </div>
            <div className="textShow">
              <div className="textSlider fade">
                <h1>
                  <strong>DEVELOPER</strong>
                </h1>
              </div>
              <div className="textSlider fade">
                <h1>
                  <strong>M.B.A.</strong>
                </h1>
              </div>
              <div className="textSlider fade">
                <h1>
                  <strong>VETERAN</strong>
                </h1>
              </div>
              <div className="textSlider fade">
                <h1>
                  <strong>FOODIE</strong>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 glyph ">
            <span className="glyphicon glyphicon-menu-down " />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h1 className="myWork">My Work</h1>
        </div>
        <div className="col-xs-12 appCard ">
          <div className="cardWrapper">
            <img className="img-fluid cardImage " src="Graphics/homeApp.png" />
            <div className="overlay">
              <a href="https://myhome-app.herokuapp.com">
                <button className="btn btn-primary btn-xlg ">
                  Preview App
                </button>
              </a>
            </div>
          </div>
          <h3 className="projCaption">
            Tech Utilized: React, HTML5, CSS3, MongoDB, Meteor.js, Bootstrap3
          </h3>
        </div>
        <div className="col-xs-12 appCard">
          <div className="cardWrapper">
            <img
              className="img-fluid cardImage"
              src="Graphics/movieAppFinal.png"
            />
            <div className="overlay">
              <a href="https://quiet-lowlands-96991.herokuapp.com/movies">
                <button className="btn btn-primary btn-xlg ">
                  Preview App
                </button>
              </a>
            </div>
          </div>
          <h3 className="projCaption after">
            Tech Utilized: Ruby on Rails5, HTML5, CSS3 and Sass, JavaScript
          </h3>
        </div>
      </div>
      <div className="row socLink">
        <div className="col-xs-12 col-sm-4 socMedia ">
          <a href="https://codepen.io/bhank/">
            <img
              className="codeLogo logoGrow "
              src="Graphics/Codepen2.png"
              alt="Brad's Codepen"
            />
          </a>
        </div>
        <div className="col-xs-12 col-sm-4 socMedia ">
          <a href="https://github.com/bhankee">
            <img
              className="codeLogo logoGrow"
              src="Graphics/GitHub1.png"
              alt="Brad's GitHub"
            />
          </a>
        </div>
        <div className="col-xs-12 col-sm-4 socMedia">
          <a href="https://www.linkedin.com/in/brad-hankee">
            <img
              className="codeLogo logoGrow"
              src="Graphics//linkedInLogo.png"
              alt="Brad's LinkedIn"
            />
          </a>
        </div>
      </div>
    </div>
    <div className="container-fluid" />
    <div className="container-fluid">
      <div className="row bottomFooter">
        <div className="col-xs-6 col-md-6 footer">
          <p>Copyright &copy Brad Hankee 2017</p>
        </div>
        <div className="col-xs-6 col-md-6 footer">
          <ul className="footer">
            <li>
              Made with
              <span className="fa fa-coffee" />by Brad Hankee
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
