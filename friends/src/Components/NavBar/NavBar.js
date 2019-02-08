import React from 'react';
import { NavLink } from 'react-router-dom';

import'./NavBar.css';

const NavBar = () => {
  return (
    <header className="nav-wrapper">
      <NavLink to ="/" activeClassName="">Home</NavLink>
      <NavLink to ="/friends" activeClassName="">Add Friend</NavLink>
      <NavLink to ="/addfriend" activeClassName="">Friends</NavLink>
    </header>
  )
}

export default NavBar;

