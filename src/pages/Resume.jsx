import '../styles/pages/projects.css'
import '../styles/styles.css'
import { FaCloudDownloadAlt } from "react-icons/fa";

function Resume() {
  return (
    <div>
      <div className='document-style'>
        <a href='/about'>← Back</a><br /><br />
        <a href='/hectorSanchezDevResume.pdf' download className='icon-with-link'><FaCloudDownloadAlt />Download my resume!</a>
        <header>
          <h2>Resume of Héctor Manuel Sánchez García </h2>
          <h2>Full-Stack Software Developer</h2>
          <p>Address: 13965 Smoketree St, APT C, Hesperia, CA, 92345</p>
        </header>
        <br />
        <section>
          <h2>Experience</h2>
          <h3>Whistle Coding LLC (SAAS startup), Oct 2021 - Present</h3>
          <h3>Full-stack Developer and Manager</h3>
          <ul>
            <li>Collaborated and built multiple web and mobile applications for about 3 years, using HTML, CSS, Django, and React, ensuring high performance, responsiveness, and user-friendly interfaces.</li>
            <li>Collaborated on a mobile application for fitness to improve several components (React Native, Expo).</li>
            <li>Improved existing web applications and sites by refactoring code, enhancing functionality, and optimizing performance to meet evolving user needs and business requirements.</li>
            <li>Deployed Django back ends using AWS Elastic Beanstalk and configuring databases to use PostgreSQL for production environments.</li>
            <li>Managed front-end deployment with Netlify, streamlining the deployment process and enabling continuous integration and delivery.</li>
            <li>Led daily stand-ups and sprint planning sessions with the development team, clearly articulating project goals, tasks, and deadlines to ensure team alignment and productivity.</li>
            <li>Conducted performance reviews and one-on-one meetings with team members, delivering constructive feedback and fostering an environment of continuous improvement.</li>
            <li>Managed client concerns and resolved issues efficiently through good communication and effective problem-solving skills.</li>
          </ul>
          <br />
          <h3>Verifimint (SAAS startup), January 2023 - July 2023</h3>
          <h3>Front-end Developer</h3>
          <ul>
            <li>Building different interfaces and components for a web application using React and CSS for multiple pages.</li>
          </ul>
        </section>
        <br />
        <section>
          <h2>Skills</h2>
          <ul>
            <li>HTML | CSS | SCSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>React Native | Expo</li>
            <li>Python | Django (DRF)</li>
            <li>JSON manipulation</li>
            <li>API test and development with Postman</li>
            <li>Git | Github</li>
            <li>CLI (Powershell)</li>
            <li>Netlify</li>
            <li>AWS (Elastic Beanstalk)</li>
            <li>Resourceful</li>
            <li>Fast learner and always eager to learn more.</li>
            <li>Self-driven</li>
            <li>Independent work</li>
            <li>Problem-solving</li>
          </ul>
        </section>
        <br />
        <section>
          <h2>Education | Courses</h2>
          <h3>Bottega Tech Devcamp Full-stack development</h3>
          <p>Jan 2020 - May 2020</p>
          <p>Instructor: Jordan Hudgens</p>

          <h3>Django with React Course</h3>
          <p>Instructors: Dennis Ivy and Brad Traversy</p>

          <h3>JavaScript Course</h3>
          <p>Instructor: Wes Bos</p>

          <h3>CBI (Calvary Bible Institute)</h3>
          <p>Associate Degree in Theology</p>
          <p>Aug 2018 - Dec 2019</p>
        </section>
        <br />
        <section>
          <h2>Languages</h2>
          <ul>
            <li>Spanish (Native proficiency)</li>
            <li>English (Fluent proficiency)</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Resume