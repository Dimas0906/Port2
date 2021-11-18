import React from "react";
import "./nav.scss";

function Nav() {
  const navigation = ["About", "Skills", "Experience", "Portfolio"];
  return (
    <div className="container">
      <div className="left">DM.</div>
      <div className="right">
        <ul className="navigate">
          {navigation.map((data, idx) => {
            return (
              <li className="hover" key={idx}>
                {data}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
