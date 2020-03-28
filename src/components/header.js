import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/the-jar-project-logo.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >

      <h1 style={{ margin: 0}} className="logo">
      <img src={logo} alt="jar-project-logo" className="logo-image"/>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
