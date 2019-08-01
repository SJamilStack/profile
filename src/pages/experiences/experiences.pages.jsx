import React from "react";

import "./experiences.styles.scss";

import Experience from "../../components/Experience/experience.component";

const Experiences = props => {
  return (
    <section className="experiences">
      <div className="row">
        <div className="experiences-inner col-md-12">
          <div className="experiences-title">
            <span />
            <Experience experiences={props.experiences} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
