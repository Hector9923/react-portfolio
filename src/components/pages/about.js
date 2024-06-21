import React from "react";
import profilePicture from "../../../static/assets/images/bio/aboutmeimage.jpg";

export default function () {
  return (
    <div className="about-wrapper">
      <div className="content-page-wrapper">
        <div className="left-column">
          <img
            style={{
              width: "700px",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            src={profilePicture}
            alt="Profile Picture" />
        </div>
        <div className="right-column">
          Hey there! I'm Hector Sanchez, a full-stack developer, I work at a start-up company called Whistle Coding LLC building web and mobile applications. I am married and future father, I like playing basketball and love God and going to church. Below is my resume:
        </div>
      </div>

      <div className="resume" style={{padding: '15px'}}>
        <h2>EXPERIENCE</h2>
        <div>
          <h3>Whistle Coding LLC (+ 2 years)</h3>
          <a href="https://whistlecoding.com" target="_blank" rel="noopener noreferrer">whistlecoding.com</a>
          <p><strong>Full-stack Developer and Team Manager</strong> | Working as manager software developer since November 2021 – Present</p>
          <ul>
            <li>Since November 2021 collaborating in building sites, full-stack web applications, and mobile apps for a community in Mexico using Django, JS, React, HTML, CSS, MUI and deploying the Django backends to Elastic Beanstalk AWS.</li>
            <li>Manager of small developer team, leading them to build sites, web and mobile apps.</li>
          </ul>
        </div>

        <h2>EDUCATION</h2>
        <div>
          <h3>Bootcamp: Full-Stack Developer</h3>
          <p>Basics: HTML, CSS, Javascript, React, Python building practice projects and continued practicing and learning myself through Javascript mastery, Wesbos courses, Dennis Ivy courses, among others.</p>
        </div>
        <div>
          <h3>Self-taught</h3>
          <p>Django, how to deploy Django applications using AWS Elastic Beanstalk, React Native, reinforcing and learning more of: HTML, CSS, Javascript, React, Python and React native</p>
        </div>
        <div>
          <h3>Other</h3>
          <p>Calvary Chapel Bible College Mexico: Associate in Christian Theology</p>
        </div>

        <h2>SKILLS</h2>
        <ul>
          <li>Git and Github | HTML | CSS | JavaScript | React | Django | React Native | I know how to deploy Django applications to AWS Elastic Beanstalk | Netlify: deploying and maintaining sites there as well.</li>
          <li>Maintaining webapps regarding technologies on AWS</li>
          <li>Problem solving and resourceful</li>
          <li>Fast learner</li>
          <li>Managing: team leadership, mentorship, team building, timeline management, project coordination</li>
          <li>Quality development and engineering of apps</li>
          <li>Flexible mindset to adapt to different environments</li>
        </ul>

        <h2>LANGUAGES</h2>
        <ul>
          <li>Spanish (Native)</li>
          <li>English (Fluent)</li>
        </ul>
      </div>
    </div>
  );
}