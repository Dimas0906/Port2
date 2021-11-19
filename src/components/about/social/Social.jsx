import React from "react";
import "./social.scss";
import dataSocial from "./social";
import {
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Social() {
  function whichIcons(icon) {
    if (icon === "whatsapp") {
      return <FaWhatsapp className="wa" />;
    } else if (icon === "github") {
      return <FaGithub className="gh" />;
    } else if (icon === "linkedin") {
      return <FaLinkedin className="ln" />;
    } else if (icon === "instagram") {
      return <FaInstagram className="ig" />;
    } else if (icon === "email") {
      return <FaEnvelope className="el" />;
    } else {
      return "";
    }
  }
  return (
    <div className="social-container">
      <ul>
        {dataSocial.map((data, idx) => {
          return (
            <li key={idx}>
              <a href={data.link} target="_blank noreferrer">
                {whichIcons(data.icon)}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Social;
