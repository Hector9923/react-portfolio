import {useEffect, useState } from 'react'

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
            <h2>Projects I've built</h2>
            <div className="projects-container">
                {items.map((item, index) => (
                    <div className="project-item" key={index}>
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <a href={item.link} target='_blank'>{item.link}</a>
                        <p>{item.description}</p>
                        <p>Technologies used: {item.technologies}</p>
                    </div>
                ))}
            </div>
            <div className='content-info-section'>
                <div className='content-info-item'>
                    <h2>
                        Projects I have collaborated on
                    </h2>
                    <div className='parragraph'>
                        <p>• KOS web and mobile applications <a href='https://www.kosfitness.org' target='_blank'>kosfitness.org</a></p>
                        <p>• YOI site <a href='https://youthofisrael.com' target='_blank'>youthofisrael.com</a></p>
                        <p>• Whistle Coding site <a href='https://whistlecoding.com' target='_blank'>whistlecoding.com</a></p>
                        <p>• Verifimint web application <a href='https://verifimint.com/' target='_blank'>verifimint.com</a></p>
                    </div>
                </div>
                <div className='content-info-item'>
                    <h3>
                        Django back ends I've deployed on AWS Elastic Beanstalk and front ends on Netlify:
                    </h3>
                    <div className='parragraph'>
                        <p>• LeBaron Contribution app <a href='http://sponsor-forms-production.us-west-2.elasticbeanstalk.com' target='_blank'>sponsor-forms-production.us-west-2.elasticbeanstalk.com</a></p>
                        <p>• Galeana Biz <a href='http://galeana.biz' target='_blank'>galeana.biz</a></p>
                        <p>• Builders Interior Finishing <a href='https://buildersinteriorfinishing.netlify.app/' target='_blank'>buildersinteriorfinishing.netlify.app</a></p>
                        <p>• LeBaron Today <a href='lebarontoday.com' target='_blank'>lebarontoday.com</a></p>
                        <p>• This Portfolio built with React + Vite</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects