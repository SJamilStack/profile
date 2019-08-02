import React from "react";

import Social from "../Social/social.component";

import "./intro.styles.scss";
import dp from "../../../src/assets/images/jam.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/fontawesome-free-solid";

const Intro = props => {
  const { name, role, social } = props.profile;

  return (
    <div className="intro">
      <div className="intro-name">
        <span className="name">{name}</span>
        <br />
        <span className="job">{role}</span>
      </div>

      <div className="dp-container">
        <img src={dp} alt="profile" />
      </div>

      <Social socials={social} />

      <div className="com-md-12 download-cv">
        <a
          href="http://tiny.cc/d4rnaz"
          className="download-btn icon"
          rel="noopener noreferrer"
          target="_blank"
        >
          Download CV
          <span className="download-icon">
            <FontAwesomeIcon icon={faDownload} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Intro;
