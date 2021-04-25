import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import NavBar from "./nav-bar"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      display: `flex`,
      marginBottom: `1.45rem`,
      padding: `0 1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <NavBar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
