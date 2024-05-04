import React from 'react';
import './header.css';
import resume from '../../Assets/Sharad_Patel_Resume.pdf';
import header_image from '../../Assets/header_image.png';

const Header = () => {
  return (
    <div className="sp__header" id="home">
      <div className="sp__header-left">
        <img src={header_image} alt="portrait" />
      </div>
      <div className="sp__header-right">
        <div className="sp__header-right__top">
          <h2>Hello!</h2>
          <h1>I'm Sharad</h1>
        </div>
        <p>Software developer with a passion for coding and solving real-world problems through technology.</p>
        <button><a href= { resume } download="Sharad_Patel_Resume">Download Resume</a></button>
      </div>
    </div>
  )
}

export default Header
