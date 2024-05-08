import React from 'react'
import './Projectshome.css'
import p1 from '../../Sources/Project 1.png'

const Projectshome = () => {
    const projects = [
        {
            Title: 'Project 1',
            img: p1,
            desc: 'A website carrying a very good amount of work for you bro'
        }
    ]

    return (
        <div className="container">
            <div className="image">
                <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Profile" />
            </div>
            <div className="content">
                <div className="info">
                    <h2>Andrew Neil</h2>
                    <span>Web Developer</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ante ultr...
                        #333.
                    </p>
                    <a href='https://m.facebook.com/' className="button">Visit the Project</a>
                </div>
            </div>
        </div>
    );
};

export default Projectshome