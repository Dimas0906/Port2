import React from "react";
import "./home.scss";
import Nav from "../../components/navbar/Nav";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Experience from "../../components/experience/Experience";

function Home() {
  return (
    <div className="home-container">
      <Nav />
      <About />
      <Skills />
      <Experience />
    </div>
  );
}

export default Home;
