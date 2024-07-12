import React from 'react';
import ProjectBox from './ProjectBox';
import ContactAppImage from '../images/ContactAppImage.png';
import LoginApp from '../images/LoginApp.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={ContactAppImage} projectName="Contact_Manager" />
        <ProjectBox projectPhoto={LoginApp} projectName="Login_APP_Using_JWT" />
      </div>
    </div>
  )
}

export default Projects