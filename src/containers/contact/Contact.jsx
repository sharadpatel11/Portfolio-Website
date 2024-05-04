import React from 'react';
import emailjs from "@emailjs/browser";
import "./contact.css";
import { default as Phone } from "../../Assets/Phone.png";
import { default as Gmail } from "../../Assets/Gmail.png";
import { default as Location } from "../../Assets/Location.png"

const Contact = () => {  

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nkwbmoa', "template_t8dl4qi", e.target, "LPPA99YTWeZ_9Kf68");
        alert("Submitted");
        e.target.reset();
    }

    return (
        <div className="sp__contact" id="contact">
            <div className="sp__contact-left">
                <h3>Have a Project in mind?</h3>
                <p className="sp__contact-left__description">Reach out to me. We can make something togehter</p>
                <div className="sp__contact-icons">
                    <div className="sp__contact-icons__top">
                        <div className="sp__contact-icon">
                            <img src={ Phone } alt="Phone Icon"/>
                            <p>+1 (347) 393-3146</p>
                        </div>
                        <div className="sp__contact-icon">
                            <img src={ Location } alt="Location Icon"/>
                            <p>New York, NY</p>
                        </div>
                    </div>
                    <div className="sp__contact-icons__bottom">
                        <div className="sp__contact-icon">
                            <img src={ Gmail } alt="Gmail Icon"/>
                            <p>sharadpatel.cs@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sp__contact-right" onSubmit={sendEmail}>
                <h3>Contact Me</h3>
                <form id="myForm" className="sp__contact-right__inputs">
                    <div className="sp__contact-right__input">
                        <h5>Your Name</h5>
                        <input type="text" name="from_name" placeholder="Enter Your Full Name" />
                    </div>
                    <div className="sp__contact-right__input">
                        <h5>Email</h5>
                        <input type="email" name="email_from" placeholder="Enter Your Email Address" />
                    </div>
                    <div className="sp__contact-right__input">
                        <h5>Message</h5>
                        <input className="message" name="email_message" type="text" placeholder="Type any message here" />
                    </div>
                    <button type="submit" >Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
