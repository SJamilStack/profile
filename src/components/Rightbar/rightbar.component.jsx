import React from "react";
import Header from "../Header/header.component";
import Home from "../../pages/home/home.component";
import { Route } from "react-router-dom";

import "./rightbar.styles.scss";
import Experience from "../../pages/experience/experience.component";

const Rightbar = props => {
  const { experience } = props;
  console.log(experience);
  return (
    <div className="row rightbar">
      <Header />
      <div className="col-md-12">
        <div id="content" className="panel-container">
          <Route exact path="/" component={Home} />
          <Route
            path="/experience"
            render={() => <Experience experience={experience} />}
          />
        </div>
      </div>
    </div>
  );
};
export default Rightbar;