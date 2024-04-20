import React from 'react';
import './tools.css';
import python from '../../Sources/python.png';
import htmlcss from '../../Sources/htmlcss.png';
import javs from '../../Sources/javascript.png'
import ai from '../../Sources/illustrator.png'
import ps from '../../Sources/adobe-photoshop-file.png'
import wp from '../../Sources/WordPress.png'
import r from '../../Sources/React.png'
import mongodb from '../../Sources/mongoDB.png'
import exp from '../../Sources/express.png'
import node from '../../Sources/nodejs.png'
import ana from '../../Sources/analysis.png'
import dsb from '../../Sources/dashboard.png'

const Tools = () => {
    const tools = [
        {
            id: 1,
            logo: python,
            name: 'Python'
        },
        {
            id: 2,
            logo: htmlcss,
            name: 'HTML / CSS'
        },
        {
            id: 3,
            logo: javs,
            name: 'JavaScript'
        },
        {
            id: 4,
            logo: ai,
            name: 'Adobe Illustrator'
        },
        {
            id: 5,
            logo: ps,
            name: 'Adobe Photoshop'
        },
        {
            id: 6,
            logo: wp,
            name: 'WordPress'
        },
        {
            id: 7,
            logo: r,
            name: 'React js'
        },
        {
            id: 8,
            logo: mongodb,
            name: 'MongoDb'
        },
        {
            id: 9,
            logo: exp,
            name: 'Express js'
        },
        {
            id: 10,
            logo: node,
            name: 'Node js'
        },
        {
            id: 11,
            logo: dsb,
            name: 'Data Visulization'
        },
        {
            id: 12,
            logo: ana,
            name: 'Data Analysis'
        },
    ];

    return (
        <div className='tool-container'>
            <h2>My tools</h2>
            <div className='home-tools'>
                {tools.map((e) => (
                    <div className='tool-card' key={e.id}>
                        <div className='tool-card-logo'>
                            <img src={e.logo} alt={`tool_Logo_${e.id}`} />
                        </div>
                        <div className='tool-card-name'>{e.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tools;
