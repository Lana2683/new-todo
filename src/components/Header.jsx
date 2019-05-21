import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <Link style={linkStyle} to="/">Todo</Link> | <Link style={linkStyle} to="/home">Home</Link>
    </header>
  )
}

const headerStyle = {
  background: '#1EAEDB',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;