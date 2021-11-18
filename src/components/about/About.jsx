import React from "react";
import Social from "../about/social/Social";

function About() {
  return (
    <div className="about-container">
      <h1>
        Hi, I'm <span className="custom-span">Dimas Maulana.</span>
      </h1>
      <h2>Junior Front-end Engineer</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, earum
        aut atque iure architecto voluptate a! Debitis explicabo dolorem
        deleniti sit, dolore assumenda inventore impedit cupiditate tempore ad
        cum magni laudantium nobis voluptatum, dicta ullam quasi provident
        aliquid quod tempora?
      </div>
      <Social />
    </div>
  );
}

export default About;
