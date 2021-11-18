import React from "react";
import "./home.scss";
import "../../styles/core.scss";
import Nav from "../navbar/Nav";
import About from "../about/About";

function Home() {
  return (
    <div>
      <Nav />
      <About />
    </div>
  );
}

export default Home;
