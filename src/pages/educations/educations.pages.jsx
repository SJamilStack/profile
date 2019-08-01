import React from "react";

import "./educations.styles.scss";

import Education from "../../components/Education/education.component";

const Educations = props => {
  return (
    <section className="educations">
      <div className="row">
        <div className="educations-inner col-md-12">
          <div className="educations-title">
            <span />
            <Education educations={props.educations} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educations;
