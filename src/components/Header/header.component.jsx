import React from "react";

import { Link } from "react-router-dom";

import "./header.styles.scss";
import "font-awesome/css/font-awesome.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faBars } from "@fortawesome/fontawesome-free-solid";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faDribbble
} from "@fortawesome/free-brands-svg-icons";

const Header = () => (
  <header className="col-md-12 header">
    <nav>
      <div className="row">
        <div className="col-md-7 col-sm-8 col-xs-4">
          <ul className="tabs">
            <li className="tab">
              <Link to="/">ABOUT</Link>
            </li>
            <li className="tab">
              <Link to="/resume">RESUME</Link>
            </li>
            <li className="tab active">
              <Link to="/experience" className="active">
                EXPERIENCE
              </Link>
            </li>

            <li className="tab">
              <Link to="/contact">CONTACT</Link>
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
          <div className="social-icons pull-left dn-s">
            <Link to="\" className="fb">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link to="\" className="tw" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="\" className="ins" href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="\" className="dr" href="#">
              <FontAwesomeIcon icon={faDribbble} />
            </Link>
          </div>
        </div>
      </div>
      <div className="menuout">
        <div className="menuin">
          <ul className="tabs">
            <li className="tab">
              <Link to="\" href="#resume">
                RESUME
              </Link>
            </li>
            <li className="tab">
              <Link to="\" href="#portfolio">
                PORTFOLIO
              </Link>
            </li>
            <li className="tab">
              <Link to="\" href="#blog">
                BLOG
              </Link>
            </li>
            <li className="tab">
              <Link to="\" href="#contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
