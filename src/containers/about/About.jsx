import React from 'react'
import './about.css';
import { default as Python } from "../../Assets/Python.png";
import { default as Camera } from "../../Assets/Camera.png";
import { default as Flutter } from "../../Assets/Flutter.png";

const About = () => {
  return (
    <div className="sp__about"  id="about">
      <div className="sp__about-left">
            <div className="sp__about-left__line">
                <div></div>
                <div className="sp__about-left__element slide-fwd-center">
                    <img src= { Python } alt="python logo" />
                    <h3>Python Development</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, ab.</p>
                </div>
            </div>
            <div className="sp__about-left__line">
                <div className="sp__about-left__element slide-fwd-center">
                    <img src= { Camera } alt="camera icon" />
                    <h3>Web Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, maiores.</p>
                </div>
                <div></div>
            </div>
            <div className="sp__about-left__line">
                <div></div>
                <div className="sp__about-left__element slide-fwd-center">
                    <img src= { Flutter } alt="flutter logo" />
                    <h3>Brand Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eligendi!</p>
                </div>
            </div>
      </div>
      <div className="sp__about-right">
            <div></div>
            <div><h2>About Me</h2></div>
            <div><p className='slide-fwd-center'>I'm a recent computer science grauate looking for internship/entry-level positions. Throughout my academic journey, I've gained a strong foundation in software engineering and a diverse skill set that includes various programming languages and technologies. I've had the privilege of working on projects that have honed my abilities in software development, data management, and user experience optimization. My goal is to continuously learn and grow in the ever-evolving tech landscape. </p></div>
            <div></div>
      </div>
    </div>
  )
}

export default About
