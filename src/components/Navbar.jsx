/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './NavbarStyle.css';

export const Navbar = () => {
  const [menuPosition, setMenuPosition] = useState(-500);
  const handleBurgerClick = () => {
    if (menuPosition === -500) {
      setMenuPosition(0);
      document.body.style.overflow = 'hidden';
    }
     else {
      setMenuPosition(-500);
      document.body.style.overflow = 'auto';
    }
  };


  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const elementoFijo = document.getElementById('menuIcon');

    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > lastScrollPosition) {

        elementoFijo.style.opacity = '0';
      } else {

        elementoFijo.style.opacity = '1';
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
  
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);
  
  

  return (
    <>
      <div className='menuHorizontal'>
        <a href="" className='subMenu'>Gitcoin</a>
        <a href="" className='subMenu'>Giveth</a>
        <a href="" className='subMenu'>Twitter</a>
        <a href="" className='subMenu'>Telegram</a>
      </div>

      <div className='menuVertical'>

      <input type="checkbox" id="checkbox" onClick={handleBurgerClick} />
    <label htmlFor="checkbox" className="toggle" id='menuIcon'>
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
    </label>

        <div className='containSubMenusVertical' id='menus' style={{ right: menuPosition }}>
          <a href="" className='subMenu2'>Gitcoin</a>
          <a href="" className='subMenu2'>Giveth</a>
          <a href="" className='subMenu2'>Twitter</a>
          <a href="" className='subMenu2'>Telegram</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
