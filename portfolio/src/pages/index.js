import React from 'react'
import Link from 'gatsby-link'

import IntroShow from '../components/IntroShow'
import Project from '../components/Project'

import profilePic from '../images/brad.png'
import codePen from '../images/Codepen.png'
import gitHub from '../images/GitHub.png'
import homeApp from '../images/homeApp.png'
import linkedIn from '../images/linkedInLogo.png'
import movieApp from '../images/movieAppFinal.png'

const timer = () => {
  window.setTimeout(() => <Loader />, 1000)
}

const IndexPage = () => (
  <div>
    <div className="jumbotronFade">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xs-auto">
            <img src={profilePic} className="myPic img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xs-12">
            <div className="intro">
              <h1>Hi, my name is </h1>
              <h1>Brad </h1>
              <h1> and I am a</h1>
            </div>
            <IntroShow />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xs-12">
          <h1 className="myWork">My Work</h1>
        </div>
        <Project
          image={homeApp}
          tech="React, HTML5, CSS3, MongoDB, Meteor.js, Bootstrap3"
        />
        <Project
          image={movieApp}
          tech="Ruby on Rails5, HTML5, CSS3 and Sass, JavaScript"
        />
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
          <p>Copyright &copy; Brad Hankee 2018</p>
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
