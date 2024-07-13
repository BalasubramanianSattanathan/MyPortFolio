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
            Hi, This is <b>Balasubramanian Sattanathan</b> from Thoothukudi. Currently living in Chennai, India.
            I work as a <b>Senior Consultant</b> in <b>Capgemini</b>. <br /><br />
            I love creating original projects with beautiful designs. You can check out some of my work in the projects section<br /><br />
            I am <b>open</b> to new collaborations or opportunities where I can contribute and grow. Feel free to connect with me.<br /><br />
            Apart from coding, I love to play cricket
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
        <Skills skill='HTML5' />
        <Skills skill='CSS3' />
        <Skills skill='Bootstrap' />
        <Skills skill='Javascript' />
        <Skills skill='Node' />
        <Skills skill='React' />
        <Skills skill='Redux' />
        <Skills skill='Mobx' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Figma' />
        <Skills skill='Npm' />
      </div>
    </>
  )
}

export default About