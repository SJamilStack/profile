import React from "react";
import Header from "../Header/header.component";
import Home from "../../pages/home/home.pages";
import Experiences from "../../pages/experiences/experiences.pages";
import Educations from "../../pages/educations/educations.pages";
import Quotes from "../../pages/quotes/quotes.pages";

import { Switch, Route } from "react-router-dom";

import "./rightbar.styles.scss";

const Rightbar = props => {
  const { experience, education, testimonials } = props.profile;

  return (
    <div className="row rightbar">
      <Header />
      <div className="col-md-12">
        <div id="content" className="panel-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/experience"
              render={() => <Experiences experiences={experience} />}
            />
            <Route
              path="/education"
              render={() => <Educations educations={education} />}
            />
            <Route
              path="/quote"
              render={() => <Quotes quotes={testimonials} />}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default Rightbar;
