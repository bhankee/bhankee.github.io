import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.css'

import NavBar from '../components/NavBar'
import Loader from '../components/Loader'
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          rel: 'stylesheet',
          href:
            'https://cdn.rawgit.com/konpa/devicon/4f6a4b08efdad6bb29f9cc801f5c07e263b39907/devicon.min.css',
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Ubuntu|Amatica+SC|Dancing+Script|Ledger',
        },
      ]}
      script={[
        {
          src: 'https://code.jquery.com/jquery-3.3.1.min.js',
          type: 'text/javascript',

          crossOrigin: 'anonymous',
        },

        {
          src: 'https://use.fontawesome.com/0a83d2d08d.js',
        },
      ]}
    />
    <Loader />
    <NavBar />
    <div>{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
