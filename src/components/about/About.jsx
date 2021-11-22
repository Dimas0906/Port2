import React from "react";
import Social from "../about/social/Social";
import "./about.scss";

function About() {
  return (
    <div className="about-container">
      <h1>
        Hi, I'm <span className="custom-span">Dimas Maulana.</span>
      </h1>
      <h2>Junior Front-end Engineer</h2>
      <div>
        <p>
          Hello I'm Dimas, Junior Front-end web developer. with experience
          building websites using ReactJs. I{" "}
          <strong>like learning new things</strong>, and really{" "}
          <strong>like web development</strong>. I am also{" "}
          <strong>interested in web development with 3D effects</strong>.
        </p>
      </div>
      <Social />
    </div>
  );
}

export default About;
