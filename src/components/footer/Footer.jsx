import React from 'react'
import "./footer.css";
import { default as LinkedIn } from "../../Assets/LinkedIn.png";
import { default as GitHub } from "../../Assets/GitHub.png";
import { default as Instagram } from "../../Assets/Instagram.png";

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#skills">Skills</a></p>
  <p><a href="#projects">Projects</a></p>
  </>
)

const Footer = () => {
  return (
    <div className="sp__footer section__padding">
      <div className="sp__footer-socials">
        <br/>
        <a href="https://www.linkedin.com/in/sharad-patel-58518b176/" target="_blank"><img src={LinkedIn} alt="LinkedIn icon"/></a>
        <a href="https://github.com/sharadpatel11" target="_blank"><img src={GitHub} alt="GitHub icon"/></a>
        <a href="https://www.instagram.com/sharad_patel11/" target="_blank"><img src={Instagram} alt="Instagram icon"/></a>
        <br/>
      </div>
      <div className="sp__footer-bottom">
        <div className="sp__footer-copyright">
          <p>C</p>
          <em>2024, Sharad Patel. All Rights Reserved</em>
        </div>
        <div className="sp__footer-links">
            <Menu />
        </div>
      </div>
    </div>
  )
}

export default Footer
