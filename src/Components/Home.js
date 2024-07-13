import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <>
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>This is <b>Balasubramanian Sattanathan</b></h1>
          <Typed />
        </div>
        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />
      </div>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I've 6.8 years of experience in building responsive web applications.
            I specialize in <b>ReactJs</b>, <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b> and have some knowledge of <b>Angular</b> and <b> NodeJs</b> focusing on creating user-friendly experiences.<br /><br />
            I’ve worked with companies like <b>Capgemini</b> and <b>Syncfusion</b>, contributing to projects that improve user engagement. <br /><br />
            I enjoy collaborating in Agile teams and delivering high-quality results.
            Take a look at my projects to see my work.<br /><br />

            I plan to learn <b>Next.js</b> in the near future. <br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </>
  )
}

export default Home