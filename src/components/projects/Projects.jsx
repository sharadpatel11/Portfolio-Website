import React from 'react'
import "./projects.css";
import {default as Arrow} from "../../Assets/Arrow.png";

const Projects = () => {
  return (
    <div className="sp__projects section__padding" id="projects">
        <div className="sp__projects-title">
            <h2>SOME OF MY PROJECTS</h2>
        </div>
        <div className="sp__project-list">
            <a className="sp__project" href="https://github.com/sharadpatel11/ReminderManager" target="_blank">
                <div className="sp__project-info">
                    <div>
                        <h4 className="sp__project-name">Reminder Manager App</h4>
                        <p className="sp__project-name">Android APP for managing reminders</p>
                    </div>
                    <div className="sp__project-info__link">
                        <img src={Arrow} alt="" />
                    </div>
                </div>
            </a>
            <a className="sp__project" href="https://github.com/sharadpatel11/Roster-Management" target="_blank">
                <div className="sp__project-info">
                    <div>
                        <h4 className="sp__project-name">Roster Management Program</h4>
                        <p className="sp__project-name">Command Line and GUI program to manage course rosters</p>
                    </div>
                    <div className="sp__project-info__link">
                        <img src={Arrow} alt="" />
                    </div>
                </div>
            </a>
            <a className="sp__project" href="https://github.com/sharadpatel11/Computer-Vision-Concepts" target="_blank">
                <div className="sp__project-info">
                    <div>
                        <h4 className="sp__project-name">Computer Vision Concepts</h4>
                        <p className="sp__project-name">Projects displaying computer vision concepts</p>
                    </div>
                    <div className="sp__project-info__link">
                        <img src={Arrow} alt="" />
                    </div>
                </div>
            </a>
        </div>
        <div className="sp__project-list sp__project-list2">
            <a className="sp__project" href="https://github.com/sharadpatel11/StudyTimer" target="_blank">
                <div className="sp__project-info">
                    <div>
                        <h4 className="sp__project-name">Study Timer</h4>
                        <p className="sp__project-name">Study Timer based on Pomodoro Technique</p>
                    </div>
                    <div className="sp__project-info__link">
                        <img src={Arrow} alt="" />
                    </div>
                </div>
            </a>
            <a className="sp__project" href="https://github.com/sharadpatel11/SnakeGame" target="_blank">
                <div className="sp__project-info">
                    <div>
                        <h4 className="sp__project-name">Snake Game</h4>
                        <p className="sp__project-name">Popular Sname Game from Nokia Phone</p>
                    </div>
                    <div className="sp__project-info__link">
                        <img src={Arrow} alt="" />
                    </div>
                </div>
            </a>
            <a className="sp__project" href="https://github.com/sharadpatel11/DailyMotivationNewsletter" target="_blank">
                <div className="sp__project-info">
                    <div>
                        <h4 className="sp__project-name">Daily Motivation Newsletter</h4>
                        <p className="sp__project-name">Receive Daily Motivational Newsletter</p>
                    </div>
                    <div className="sp__project-info__link">
                        <img src={Arrow} alt="" />
                    </div>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Projects
