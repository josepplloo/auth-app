import React from "react"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flex: "1",
        justifyContent: "space-between"
      }}
    >
      <span>You are not logged in</span>
      <nav>
        <Link 
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
        {` `}
        <Link 
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Profile</Link>
        {` `}
        <Link 
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Logout</Link>
      </nav>
    </div>
  )
}
