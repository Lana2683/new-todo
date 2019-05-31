import React from 'react';
import { Link } from 'react-router-dom';
import { NBSP } from './NBSP'

function Header() {
  return (
    <header className='container'>
      <Link className='linkstyle' to="/todo-page">
        Todo
      </Link> 
      <NBSP/>
      | 
      <NBSP/>
      <Link className='linkstyle' to="/home-page">
        Home
      </Link>
    </header>
  )
}

export default Header;
