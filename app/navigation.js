'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [showToggleMenu, setToggleMenu] = useState(false);

  const toggleMenu = () => {
    setToggleMenu(!showToggleMenu);
    console.log(showToggleMenu);
  };
  return (
    <>
      <nav id='desktop-nav'>
        <div className='logo'>John Henry</div>
        <div>
          <ul className='nav-links'>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#experience'>Experience</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>About</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id='hamburger-nav'>
        <div className='logo'>John Henry</div>
        <div className='hamburger-menu'>
          <div className='hamburger-icon' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={showToggleMenu ? 'menu-links open' : 'menu-links'}>
            <li>
              <a href='#about' onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href='#experience' onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href='#projects' onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
