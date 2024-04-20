import React from 'react';
import './skills.css';
import wdIcon from '../../Sources/Web-development.png';
import daIcon from '../../Sources/dashboard.png';
import gd from '../../Sources/layers.png'
import bd from '../../Sources/backend.png'
import dv from '../../Sources/dashboard.png'

const Skills = () => {
    const skills = [
        {
            id: 1,
            name: 'Graphic Designing',
            pic: gd,
            exp: 2,
            tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Canva', 'Indesign', 'Corel Draw']
        },
        {
            id: 2,
            name: 'Web Development',
            pic: wdIcon,
            exp: 3,
            tools: ['WordPress', 'HTML/CSS', 'JavaScript', 'React', 'Next.js']
        },
        {
            id: 3,
            name: 'Backend Development',
            pic: bd,
            exp: 1,
            tools: ['Node js', 'Express js', 'SQL/MongoDb databases', 'Python', 'C++']
        },
        {
            id: 4,
            name: 'Data Analysis',
            pic: daIcon,
            exp: 1,
            tools: ['Matplot lib', 'Pandas', 'Seaborn', 'Scikit learn', 'TensorFlow']
        },
        {
            id: 5,
            name: 'Data Visualization',
            pic: dv,
            exp: 1,
            tools: ['Matplot lib', 'Seaborn', 'Power bI', 'Tableau', 'Ms Excel']
        },
        
    ];

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>My Skills</h2>
            <div className='skill-box'>
                {skills.map((skill) => (
                    <div class="skill-card">
                        <header class="skill-card__header">
                            <img class="skill-card__icon" src={skill.pic} alt={`${skill.name}_image`} />
                        </header>
                        <section class="skill-card__body" style={{ textAlign: 'left' }}>
                            <h2 class="skill-card__title">{skill.name}</h2>
                            <span class="skill-card__duration">{skill.exp}{skill.exp>1 ? 'Years' : 'Year'} of experience</span>
                            <ul className="skill-card__knowledge" style={{ listStyle: 'none', padding: 0 }}>
                                {skill.tools.map((tool, index) => (
                                    <li key={index} className="tool">
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
