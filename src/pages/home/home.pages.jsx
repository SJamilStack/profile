import React from "react";

import "./home.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faPhone,
  faEnvelope,
  faMapMarker
} from "@fortawesome/fontawesome-free-solid";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import { faHeading, faUser } from "@fortawesome/fontawesome-free-solid";

const Home = props => {
  const {
    name,
    role,
    shortnote,
    leadtext,
    about,
    dob,
    email,
    skype,
    awards,
    phone,
    location
  } = props.profile;

  return (
    <section className="home">
      <div className="row">
        <div className="col-md-12">
          <div className="about-inner">
            <div className="greeting">
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <h2 className="title">Hi, this is...</h2>
            </div>

            <h3 className="name">{name}</h3>
            <p className="role">{role}</p>
            <p className="leadtext">{leadtext}</p>
            <p className="shortnote">{shortnote}</p>

            <div className="lines">
              {about.map(a => (
                <React.Fragment>
                  <p className="line">{a}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="shortbio">
            <h6>Info</h6>
            <p>
              <FontAwesomeIcon className="icon" icon={faCalendar} />
              <span>{dob}</span>
            </p>
            <p>
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <span>{phone}</span>
            </p>
            <p>
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <span>{email}</span>
            </p>
            <p>
              <FontAwesomeIcon className="icon" icon={faSkype} />
              <span>{skype}</span>
            </p>
            <p>
              <FontAwesomeIcon className="icon" icon={faMapMarker} />
              <span>{location}</span>
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="recognition">
            <h6>Awards</h6>
            {awards.map(aw => (
              <p className="award-item">{aw}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
