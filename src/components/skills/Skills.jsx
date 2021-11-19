import React from "react";
import "./skills.scss";

// icons
import js from "../../assets/skill/javascript.png";
import html from "../../assets/skill/html.png";
import css from "../../assets/skill/css.png";
import sass from "../../assets/skill/sass.png";
import react from "../../assets/skill/react.png";
import tailwind from "../../assets/skill/tailwind.png";
import redux from "../../assets/skill/redux.png";
import sequelize from "../../assets/skill/sequelize.png";
import express from "../../assets/skill/express.png";
import bootstrap from "../../assets/skill/bootstrap.png";
import jwt from "../../assets/skill/jwt.png";
import gitbash from "../../assets/skill/gitbash.png";
import github from "../../assets/skill/github.png";
import mongo from "../../assets/skill/mongodb.png";
import mysql from "../../assets/skill/mysql.png";
import postman from "../../assets/skill/postman.png";
import nodejs from "../../assets/skill/nodejs.png";

function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="top">
        <div className="left">
          <h2>Programming Language</h2>
          <div>
            <div>
              <img src={js} alt=".." />
            </div>
            <div>
              <img src={html} alt=".." />
            </div>
            <div>
              <img src={css} alt=".." />
            </div>
            <div>
              <img src={sass} alt=".." />
            </div>
          </div>
        </div>
        <div className="right">
          <h2>Framework / Library</h2>
          <div>
            <div>
              <img src={react} alt=".." />
            </div>
            <div>
              <img src={redux} alt=".." />
            </div>
            <div>
              <img src={tailwind} alt=".." />
            </div>
            <div>
              <img src={sequelize} alt=".." />
            </div>
            <div>
              <img src={express} alt=".." />
            </div>
            <div>
              <img src={bootstrap} alt=".." />
            </div>
            <div>
              <img className="nodejs" src={nodejs} alt=".." />
            </div>
            <div>
              <img src={jwt} alt=".." />
            </div>
          </div>
        </div>
      </div>
      <div className="bot">
        <h2>Tools</h2>
        <div>
          <div>
            <img className="mongo" src={mongo} alt=".." />
          </div>
          <div>
            <img src={mysql} alt=".." />
          </div>
          <div>
            <img src={gitbash} alt=".." />
          </div>
          <div>
            <img src={github} alt=".." />
          </div>
          <div>
            <img src={postman} alt=".." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
