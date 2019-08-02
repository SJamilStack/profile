import React from "react";

import { Link, NavLink } from "react-router-dom";

import "./header.styles.scss";
import "font-awesome/css/font-awesome.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faSuitcase,
  faHome,
  faBook,
  faQuoteLeft
} from "@fortawesome/fontawesome-free-solid";

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
            <div className="col-md-8 col-sm-8 col-xs-8 col-8">
              <ul className="tabs">
                <li className="tab">
                  <NavLink exact to="/" activeClassName="is-active">
                    <FontAwesomeIcon icon={faHome} />
                  </NavLink>
                </li>

                <li className="tab active">
                  <NavLink to="/experience" activeClassName="is-active">
                    <span className="d-none d-md-block d-lg-block">
                      EXPERIENCE
                    </span>
                    <span className="d-sm-block d-xs-block d-lg-none d-md-none">
                      <FontAwesomeIcon icon={faSuitcase} />
                    </span>
                  </NavLink>
                </li>

                <li className="tab">
                  <NavLink to="/education" activeClassName="is-active">
                    <span className="d-none d-md-block d-lg-block">
                      EDUCATION
                    </span>
                    <span className="d-sm-block d-xs-block d-lg-none d-md-none">
                      <FontAwesomeIcon icon={faBook} />
                    </span>
                  </NavLink>
                </li>

                <li className="tab">
                  <NavLink to="/quote" activeClassName="is-active">
                    <span className="d-none d-md-block d-lg-block">
                      TESTIMONIALS
                    </span>
                    <span className="d-sm-block d-xs-block d-lg-none d-md-none">
                      <FontAwesomeIcon icon={faQuoteLeft} />
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4 col-4 dynamic">
              <a
                href="mailto:shihabims@gmail.com"
                className="pull-right site-btn icon"
              >
                <span className="text">Mail Me</span>
                <span className="plane-icon">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </span>
              </a>
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
