import profileAboutMe from '../assets/perfilAbout.jpg'
import NavBar from '../components/NavBar';
import '../styles/styles.css'
import '../styles/pages/projects.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";

function About() {
  return (
    <>
      <NavBar />
      <div className='content-info-section'>
        <div className='about-img-container'>
          <img src={profileAboutMe} />
        </div>
        <div className='parragraph space'>
          <h3>About me</h3>
          <p>• Hey there! This is Hector Manuel Sanchez Garcia, thank you for visiting my portfolio website!</p>
          <p>
            • Full-stack developer with 3 years of experience working at a SAAS startup called Whistle Coding LLC <a href='https://whistlecoding.com/' target='_blank'>whistlecoding.com</a>
          </p>
          <p>• Eager to learn more about app development and deepen my understanding of JavaScript, Python, and frameworks like React and Django</p>
          <p>• Originally from Chihuahua, Mexico, recently moved to California</p>
          <p>• Married and future father of a baby boy</p>
          <p>• Love God, the Bible, and the Christian church</p>
        </div>
      </div>
      <div className='content-info-section'>
        <div className='parragraph space'>
          <h3>Resume and recommendation letters</h3>
          <p className='icon-with-link'>
            <IoIosDocument /> Read my: <a href='/resume'>Resume!</a>
          </p>
          <p>
            <BiSolidLike /> Read my recommendation letter from Whistle Coding LLC <a href='/whistle-coding-recommendation-letter'>here</a>
          </p>
        </div>
        <div className='parragraph space'>
          <h3>Contact:</h3>
          <p className='icon-with-link'><FaPhoneSquareAlt /> +52 636 115 9300</p>
          <p className='icon-with-link'><IoIosMail /> <a href='mailto:h.manuel2311@hotmail.com'>h.manuel2311@hotmail.com</a></p>
          <p className='icon-with-link'>
            <FaLinkedinIn /> <a href='https://www.linkedin.com/in/hector-sanchez-dev' target='_blank'> Linkedin</a>
          </p>
          <p className='icon-with-link'>
            <FaGithub /> <a href='https://github.com/Hector9923' target='_blank'>Github</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default About