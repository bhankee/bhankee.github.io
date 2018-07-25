import React from 'react'
import Link from 'gatsby-link'

const Project = ({ image, tech }) => (
  <div className="col-xs-12 appCard ">
    <div className="cardWrapper">
      <img className="img-fluid cardImage " src={image} />
      <div className="overlay">
        <a href="https://myhome-app.herokuapp.com">
          <button className="btn btn-primary btn-xlg ">Preview App</button>
        </a>
      </div>
    </div>
    <h3 className="projCaption">Tech Utilized: {tech}</h3>
  </div>
)

export default Project
