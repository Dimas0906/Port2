import React from "react";
import "./experience.scss";
import { AiFillStar } from "react-icons/ai";

function Experience() {
  return (
    <div className="experience-container">
      <h1 className="title">Experience</h1>
      <div id="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <AiFillStar />
          </div>
          <div className="timeline-content">
            <h1>Lorem ipsum dolor</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde
              quia laborum voluptates omnis enim perferendis natus molestias
              amet repellendus?
            </p>
            <a classname="btn" href="#0">
              button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
