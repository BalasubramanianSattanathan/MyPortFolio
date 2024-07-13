import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap } from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiHtml5, DiCss3 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiRedux, SiMobx } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    'C++': <CgCPlusPlus />,
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    HTML5: <DiHtml5 />,
    CSS3: <DiCss3 />,
    Redux: <SiRedux />,
    Mobx: <SiMobx />,
  }

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
