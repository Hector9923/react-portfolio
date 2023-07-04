import React from "react";
import contactPicture from "../../../static/assets/images/bio/contactimage.jpg";
import EmailLink from '../../components/emailLink.js';
import githubIcon from '../../../static/assets/images/bio/github.png'
import linkedinIcon from '../../../static/assets/images/bio/linkedin.png'

export default function () {
  return (
    <div className="contact-container">
      <div className="contact-left-side">
        <div className="contact-title"> Wanna hire me? you can contact me through the following 👇</div>
        <div className="contact-info">
          <div className="contact-info-link">
            <div className="contact-link-text">
              Whatsapp to
            </div>
            <a
              className="contact-link"
              href="https://api.whatsapp.com/send?phone=526361159300"
              target="_blank"
              rel="noreferrer"
              title="Send us a message on Whatsapp"
            >
              636 115 9300
            </a>
          </div>
          <div className="contact-info-link">
            <div className="contact-link-text">
              Send Email to
            </div>
            <EmailLink
              email="h.manuel2311@hotmail.com"
              subject="Interested in hiring you for dev work"
              body="Hello!"
            />
          </div>
        </div>
        <div className="contact-icons">
          <a href="https://github.com/Hector9923" target="_blank"><img src={githubIcon} width='40px'></img></a>
          <a href="https://www.linkedin.com/in/hector-sanchez-dev/" target="_blank"><img src={linkedinIcon} width='40px'></img></a>
        </div>
      </div>
      <div className="contact-right-side">
        <img src={contactPicture} width='450px'></img>
      </div>
    </div>
  )
}