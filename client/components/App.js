import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/login">Login</Link>
      </header>

      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}