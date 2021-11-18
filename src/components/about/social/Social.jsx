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
      return <FaWhatsapp />;
    } else if (icon === "github") {
      return <FaGithub />;
    } else if (icon === "linkedin") {
      return <FaLinkedin />;
    } else if (icon === "instagram") {
      return <FaInstagram />;
    } else if (icon === "email") {
      return <FaEnvelope />;
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
