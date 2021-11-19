import React from "react";
import Nav from "../../components/navbar/Nav";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import "./home.scss";

function Home() {
  return (
    <div className="home-container">
      <Nav />
      <About />
      <Skills />
    </div>
  );
}

export default Home;
