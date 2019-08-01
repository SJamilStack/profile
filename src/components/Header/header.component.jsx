import React from "react";

import { Link, NavLink } from "react-router-dom";

import "./header.styles.scss";
import "font-awesome/css/font-awesome.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faBars,
  faHome
} from "@fortawesome/fontawesome-free-solid";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faDribbble
} from "@fortawesome/free-brands-svg-icons";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <header className="col-md-12 header">
        <nav>
          <div className="row">
            <div className="col-md-7 col-sm-8 col-xs-4">
              <ul className="tabs">
                <li className="tab">
                  <NavLink exact to="/" activeClassName="is-active">
                    <FontAwesomeIcon icon={faHome} />
                  </NavLink>
                </li>

                <li className="tab active">
                  <NavLink to="/experience" activeClassName="is-active">
                    EXPERIENCE
                  </NavLink>
                </li>

                <li className="tab">
                  <NavLink to="/education" activeClassName="is-active">
                    EDUCATION
                  </NavLink>
                </li>

                <li className="tab">
                  <NavLink to="/quote" activeClassName="is-active">
                    QUOTE
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-5 col-sm-4 col-xs-8 dynamic">
              <a
                href="mailto:hi@tavonline.net"
                className="pull-right site-btn icon"
              >
                Hire Me{" "}
                <span className="plane">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </span>
              </a>
              <div className="hamburger pull-right dn-m dn-l">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </div>
          <div className="menuout">
            <div className="menuin">
              <ul className="tabs">
                <li className="tab">
                  <NavLink to="\" href="#resume">
                    RESUME
                  </NavLink>
                </li>
                <li className="tab">
                  <NavLink to="\" href="#portfolio">
                    PORTFOLIO
                  </NavLink>
                </li>
                <li className="tab">
                  <NavLink to="\" href="#blog">
                    BLOG
                  </NavLink>
                </li>
                <li className="tab">
                  <NavLink to="\" href="#contact">
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
