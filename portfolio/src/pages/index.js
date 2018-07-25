import React from 'react'
import Link from 'gatsby-link'

import IntroShow from '../components/IntroShow'

import profilePic from '../images/brad.png'
import codePen from '../images/Codepen.png'
import gitHub from '../images/GitHub.png'
import homeApp from '../images/homeApp.png'
import linkedIn from '../images/linkedInLogo.png'
import movieApp from '../images/movieAppFinal.png'

const IndexPage = () => (
  <div>
    <div className="jumbotronFade">
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <canvas id="rainCanvas" width="2000" height="100vh" />
          <div className="col-xs-auto">
            <img src={profilePic} className="myPic img-fluid" />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-xs-12">
            <div className="intro">
              <h1>Hi, my name is </h1>
              <h1>Brad </h1>
              <h1> and I am a</h1>
            </div>
            <IntroShow />
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
            <img className="img-fluid cardImage " src={homeApp} />
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
            <img className="img-fluid cardImage" src={movieApp} />
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
              src={codePen}
              alt="Brad's Codepen"
            />
          </a>
        </div>
        <div className="col-xs-12 col-sm-4 socMedia ">
          <a href="https://github.com/bhankee">
            <img
              className="codeLogo logoGrow"
              src={gitHub}
              alt="Brad's GitHub"
            />
          </a>
        </div>
        <div className="col-xs-12 col-sm-4 socMedia">
          <a href="https://www.linkedin.com/in/brad-hankee">
            <img
              className="codeLogo logoGrow"
              src={linkedIn}
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
