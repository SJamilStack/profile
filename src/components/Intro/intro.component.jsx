import React from "react";

import "./intro.styles.scss";
import dp from "../../../src/assets/images/profile.jpg";

const Intro = ({ id, name, email, role }) => {
  return (
    <div className="intro">
      <div className="intro-name">
        <span className="name">Shihab Jamil</span>
        <br />
        <span className="job">Full Stack Developer</span>
      </div>

      <div className="dp-container">
        <img src={dp} alt="profile" />
      </div>

      <ul className="profile-information">
        <li>
          <p>{name}</p>
        </li>
        <li>
          <p>{role}</p>
        </li>
        <li>
          <p>Escenic Asia Ltd</p>
        </li>
        <li>
          <p>{email}</p>
        </li>
      </ul>
      <div className="com-md-12" />
    </div>
  );
};

export default Intro;
