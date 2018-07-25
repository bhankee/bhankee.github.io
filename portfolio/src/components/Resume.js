import React from 'react'
import Link from 'gatsby-link'
import ResumePDF from '../images/resume.pdf'

const Resume = () => (
  <div className="container-fluid">
    <div className="row ">
      <div className="col-md-12 ">
        <div className="embed-responsive " style={{ paddingBottom: '100%' }}>
          <object
            className="aboutResume"
            data={ResumePDF}
            type="application/pdf"
          />
        </div>
      </div>
    </div>
  </div>
)

export default Resume
