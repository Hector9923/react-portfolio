import { useEffect, useState } from 'react'
import '../styles/pages/projects.css'
import NavBar from '../components/NavBar';

function Projects() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <NavBar />
            <h1>
                Héctor Sánchez full-stack developer portfolio
            </h1>
            <h2>Projects I have built</h2>
            <div className="projects-container">
                {items.map((item, index) => (
                    <div className="project-item" key={index}>
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <a href={item.link} target='_blank'>{item.link}</a>
                        <p>{item.description}</p>
                        Repo: <a href={item.repo} target='_blank'>{item.repo}</a>
                        <p>Technologies used: {item.technologies}</p>
                    </div>
                ))}
            </div>
            <div className='content-info-section'>
                <div className='content-info-item'>
                    <h2>
                        Projects I have collaborated on:
                    </h2>
                    <div className='parragraph'>
                        <p>• <strong>(Whistle Coding LLC)</strong> Whistle Drywall Apps (Django web application): <a href='https://whistledrywallapp.com/' target='_blank'>whistledrywallapp.com</a></p>
                        <p>• <strong>(Whistle Coding LLC)</strong> KOS web and mobile applications (Django, React and React Native): <a href='https://www.kosfitness.org' target='_blank'>kosfitness.org</a></p>
                        <p>• <strong>(Whistle Coding LLC)</strong> Youth Of Israel (HTML and CSS): <a href='https://youthofisrael.com' target='_blank'>youthofisrael.com</a></p>
                        <p>• <strong>(Whistle Coding LLC)</strong> Whistle Coding site (React and CSS): <a href='https://whistlecoding.com' target='_blank'>whistlecoding.com</a></p>
                        <p>• <strong>(Verifimint)</strong> Verifimint web application (Django and React): <a href='https://verifimint.com/' target='_blank'>verifimint.com</a></p>
                    </div>
                </div>
                <div className='content-info-item'>
                    <h3>
                        Django back-ends I have deployed using AWS Elastic Beanstalk:
                    </h3>
                    <div className='parragraph'>
                        <p>• <strong>(Whistle Coding LLC)</strong> Lebaron Contribution (Django web application): <a href='http://sponsor-forms-production.us-west-2.elasticbeanstalk.com' target='_blank'>sponsor-forms-production.us-west-2.elasticbeanstalk.com</a></p>
                        <p>• <strong>(Whistle Coding LLC)</strong> Galeana Biz (Django and React): <a href='http://galeana.biz' target='_blank'>galeana.biz</a></p>
                        <p>• <strong>(Whistle Coding LLC)</strong> Builders Interior Finishing (Django and React): <a href='https://buildersinteriorfinishing.netlify.app/' target='_blank'>buildersinteriorfinishing.netlify.app</a></p>
                        <p>• <strong>(Whistle Coding LLC)</strong> Lebaron Today (Django and React): <a href='lebarontoday.com' target='_blank'>lebarontoday.com</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects