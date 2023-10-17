import React from "react";
import "../Skills/Skills.css";
import { FaCss3Alt, FaHtml5, FaJs, FaNode, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
import { SiExpress, SiMysql } from "react-icons/si";
import { BiLogoBootstrap, BiLogoMongodb } from 'react-icons/bi';

function Skills() {
  return (
    <div className="skills">

      <h2 className="h2">Front End </h2>
      
      <div className="front-end">
        <h3><FaHtml5 id="html" /></h3>

        <h3><FaCss3Alt id="css" /></h3>

        <h3><FaJs id="javascript" /></h3>

        <h3><FaReact id="react"/></h3>

      </div>

      <h2 className="h2">Back End</h2>
      <div className="backend">
        

        <h3><FaNode /></h3>

        <h3><SiExpress /></h3>

      </div>

      <h2 className="h2">Database</h2>
      <div className="database">
          
        <h3><SiMysql /></h3>

        <h3><BiLogoMongodb /></h3>

      </div>
      
      <h2 className="h2">Other Skills</h2>
      <div className="other">

        <h3><FaPython /></h3>

        <h3><BiLogoBootstrap /></h3>

      </div>
    </div>
  );
}

export default Skills;
