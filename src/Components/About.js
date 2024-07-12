import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, This is <b>Balasubramanian Sattanathan</b> and from Thoothukudi. Currently living in Chennai, India.
            Currently I'm working as <b>Senior Consultant</b> in <b>Capgemini</b> as <b>Senior Consultant</b>. <br /><br />
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br /><br />
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br />
            Apart from coding I love to play cricket
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />
      </div>
    </>
  )
}

export default About