'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [showToggleMenu, setToggleMenu] = useState(false);

  const toggleMenu = () => {
    setToggleMenu(!showToggleMenu);
    console.log(showToggleMenu);
  };
  const [data, setData] = useState([
    {
      id: 1,
      name: 'About',
      href: '#about',
    },
    {
      id: 2,
      name: 'Experience',
      href: '#experience',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ]);
  return (
    <>
      <nav id='desktop-nav'>
        <div className='logo'>John Henry</div>
        <div>
          <ul className='nav-links'>
            {data.map((nav_link) => (
              <li key={nav_link.id}>
                <a href={nav_link.href}>{nav_link.name}</a>
              </li>
            ))}
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
            {data.map((nav_link) => (
              <li key={nav_link.id}>
                <a href={nav_link.href} onClick={{ toggleMenu }}>
                  {nav_link.name}
                </a>
              </li>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
