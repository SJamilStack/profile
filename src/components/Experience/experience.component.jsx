import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faExternalLinkAlt
} from "@fortawesome/fontawesome-free-solid";

import "./experience.styles.scss";

const Experience = ({ experiences }) => {
  return (
    <ul className="experience col-md-12">
      <li>
        <span>
          <FontAwesomeIcon icon={faSuitcase} />
        </span>
        <h2 className="title">Working History</h2>
      </li>
      {experiences.map(exp => (
        <li key={exp.id} className="work">
          <span className="duration">
            {exp.from} - {exp.to}
          </span>

          <h5 className="designation">{exp.designation}</h5>

          <h4 className="company-title">
            {exp.company}

            <a className="company-url" href={exp.url}>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </h4>

          <div className="skills">
            {exp.skills.map(skill => (
              <p className="skill-item">
                <span>{skill}</span>
              </p>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
