import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

import WineBarIcon from '@mui/icons-material/WineBar';
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import '../style/nav.css'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Nav(props) {

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  }

  const closeMenu = () => {
    setShowMenu(false);
  }

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar color='default' >
          <Toolbar>
            <nav className='large-nav' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div>
                <WineBarIcon fontSize='large' />
              </div>
              <div className='navLinks'>
                <Link to='/' relative='path'>
                  Home
                </Link>
                <Link to='/about' relative='path'>
                  About Us
                </Link>
                <Link to='/store' relative='path'>
                  Store
                </Link>
                <Link to='/login' relative='path'>
                  Login
                </Link>
              </div>
              <div className='hamIcon' onClick={openMenu}>
                {showMenu ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
              </div>
            </nav>
            {showMenu && (
              <nav className='hamLinks' >
                <Link onClick={closeMenu} to='/' relative='path'>
                  Home
                </Link>
                <Link onClick={closeMenu} to='/about' relative='path'>
                  About Us
                </Link>
                <Link onClick={closeMenu} to='/store' relative='path'>
                  Store
                </Link>
                <Link onClick={closeMenu} to='/login' relative='path'>
                  Login
                </Link>
              </nav>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
