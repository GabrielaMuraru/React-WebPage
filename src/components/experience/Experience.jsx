import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
          <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsPatchCheckFill/>
                <h4>HTML</h4>
                <small className="text-light"> Intermediate </small>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill/>
                <h4>CSS</h4>
                <small className="text-light"> Intermediate </small>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill/>
                <h4>JavaScript</h4>
                <small className="text-light"> Beginner </small>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill/>
                <h4>React Native</h4>
                <small className="text-light"> Beginner </small>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill/>
                <h4>.NET</h4>
                <small className="text-light"> Intermediate </small>
              </article>
            </div>
          </div>

            {/*END OF FRONTEND*/}
            <h3>Other Skills</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsPatchCheckFill/>
                <h4>Git</h4>
                <small className="text-light"> Intermediate </small>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill/>
                <h4>Team Collaboration</h4>
                <small className="text-light"> Intermediate </small>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill/>
                <h4>Problem Solving</h4>
                <small className="text-light"> Intermediate </small>
              </article>
            </div>

          <div className="experience_backend">
            
          </div>
      </div>

    </section>
  )
}

export default Experience