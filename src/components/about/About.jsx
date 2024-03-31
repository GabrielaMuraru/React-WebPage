import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa"


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me-image">
          <img src='' alt="About Image" />
        </div>
      </div>

      <div className="about_content">
        <div className="about__card">

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small> 0-1 Years Working</small>
          </article>

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5></h5>
            <small>  </small>
          </article>

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Projects</h5>
            <small> </small>
          </article>

        </div>
      </div>

    </section>
  )
}

export default About