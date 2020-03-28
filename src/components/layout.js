import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'


import Header from './header'
import './layout.css'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'The Jar Project is a daily reminder to open up your world to fears, spontaneity and kindness, and do something atypical on the daily; for it is these uncomfortable moments and periods of reflection that will help us reconnect and grow as a human race.' },
            { name: 'keywords', content: 'jar, kindness, spontaneity, fear, anxiety, personal development, depression, progression, growth' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle="The Jar Project" />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
