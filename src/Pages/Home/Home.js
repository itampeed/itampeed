import React from 'react'
import './home.css'
import Navbar from '../../components/Navbar/Navbar'
import heroImage from '../../Sources/Hero Image.png'
import Skills from '../../components/Skills/Skills'


const Home = () => {
  return (
    <>
      <div className='hero-section'>
        <Navbar />
        <div className='hero-1'>
          <div className='hero-in'>
            <img src={heroImage} alt='hero_image' />
          </div>
          <div className='hero-in hero-1-2'>
            <h1>I'm Bilal</h1>
            <h3 style={{ color: 'var(--main-red)' }}>Web Developer | Data Scientist</h3>
            <p>Welcome to my portfolio! I'm passionate about creating innovative web experiences and exploring data-driven solutions that would help you with your business or tasks and help me with making my portfolio much stronger</p>
            <div style={{ display: 'flex' }}>
              <button className='hero-button b1'>Hire me</button>
              <button className='hero-button b2'>Contact</button>
            </div>
          </div>
        </div>
      </div>
      <div className='sec-2'>
          <h3 style={{margin:'3px'}}>About</h3>
          <p>Hello, I'm Bilal, a skilled professional with expertise in both web development and data science. Over the past 2+ years, I've honed my craft as a freelancer, specializing in creating compelling digital experiences and harnessing the power of data to drive insights and innovation. In web development, I focus on delivering seamless, functional designs backed by robust backend solutions. As a data scientist, I leverage my analytical skills to extract meaningful patterns and inform strategic decision-making. My journey as a freelancer has not only sharpened my technical abilities but also enhanced my adaptability and collaborative approach to delivering impactful solutions tailored to clients' unique requirements.</p>
      </div>
      <div className='sec-3'>
        <Skills/>
      </div>

    </>
  )
}

export default Home