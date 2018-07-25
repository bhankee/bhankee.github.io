import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavBar from '../components/NavBar'
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
            'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
          integrity:
            'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
          crossorigin: 'anonymous',
        },
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
          src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js',
          type: 'text/javascript',
          integrity:
            'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN',
          crossorigin: 'anonymous',
        },
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
          type: 'text/javascript',
          integrity:
            'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q',
          crossorigin: 'anonymous',
        },
        {
          src: 'https://use.fontawesome.com/0a83d2d08d.js',
        },
      ]}
    />
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
