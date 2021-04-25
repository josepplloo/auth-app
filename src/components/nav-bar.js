import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"

export default function NavBar() {
  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = `Hello ${getUser().name}`
  } else {
    greetingMessage = "You are not logged in"
  }
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flex: "1",
        justifyContent: "space-between"
      }}
    >
      <span>{greetingMessage}</span>
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
          to="/app/profile"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Profile</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </div>
  )
}
