import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    Login_APP_Using_JWTDesc: "This project features a React application that implements JWT (JSON Web Token) authentication for secure user login. The frontend connects to a Node.js backend, which validates user credentials and generates a token upon successful authentication.",
    Login_APP_Using_JWTGithub: "https://github.com/BalasubramanianSattanathan/Login_APP_Using_JWT",

    Contact_ManagerDesc: "This project is a simple contact management application built with React. It allows users to add, edit, and delete contacts, storing the information in local storage.",
    Contact_ManagerGithub: "https://github.com/BalasubramanianSattanathan/React_Tutorial_Contact_Manager_App",
    Contact_ManagerWebsite: "https://balasubramaniansattanathan.github.io/React_Tutorial_Contact_Manager_App/",
  }

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank'>
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        <a className={projectName} href={desc[projectName + 'Website']} target='_blank'>
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  )
}

export default ProjectBox