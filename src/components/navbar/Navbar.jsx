import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#skills">Skills</a></p>
  <p><a href="#projects">Projects</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="sp__top">
      <div className="sp__navbar">
        <div className="sp__navbar-logo">
          <h1>SP</h1>
        </div>
        <div className="sp__navbar-links">
          <Menu />
        </div>
        <div className="sp__navbar-welcome">
            <h2>Welcome</h2>
        </div>
        <div className="sp__navbar-contact">
          <button type="button"><a href="#contact">Contact</a></button>        
        </div>
        <div className="sp__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#000000" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#000000" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="sp__navbar-menu_container scale-up-center">
              <div className="sp__navbar-menu_container-links">
                <Menu />
                <button type="button"><a href="#contact">Contact</a></button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
