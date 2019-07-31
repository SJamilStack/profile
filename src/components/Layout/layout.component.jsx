import React from "react";

import Intro from "../Intro/intro.component";
import Rightbar from "../Rightbar/rightbar.component";

import profile from "../../db.json";

import "./layout.styles.scss";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null
    };
  }

  componentDidMount() {
    this.setState({
      profile
    });
  }

  render() {
    const { id, name, role, email } = profile;
    return (
      <React.Fragment>
        <div className="layout container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <Intro id={id} name={name} role={role} email={email} />
            </div>
            <div className="col-lg-9 col-md-12">
              <Rightbar profile={profile} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
