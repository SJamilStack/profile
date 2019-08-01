import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faExternalLinkAlt } from "@fortawesome/fontawesome-free-solid";

import "./education.styles.scss";

const Education = ({ educations }) => {
  return (
    <ul className="education col-md-12">
      <li>
        <span>
          <FontAwesomeIcon icon={faBook} />
        </span>
        <h2 className="title">Education History</h2>
      </li>

      {educations.map(edu => (
        <li key={edu.id} className="edu">
          <span className="duration">{edu.year}</span>

          <p className="uni-title">
            {edu.uni}

            <a className="uni-url" href={edu.url}>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </p>

          <p className="major">
            {edu.degree} in {edu.major}
          </p>
          <p className="grade">{edu.grade}</p>

          <p className="location">{edu.location}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
