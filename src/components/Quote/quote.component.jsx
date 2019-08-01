import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQuoteLeft } from "@fortawesome/fontawesome-free-solid";

import "./quote.styles.scss";

const Quote = ({ quotes }) => {
  return (
    <div className="quote col-md-12">
      <h4 className="title">The Kind Words</h4>

      {quotes.map(q => (
        <React.Fragment>
          <div className="quote-item">
            <span className="quote-icon">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </span>
            <p className="words">{q.quote}</p>
          </div>
          <div className="by-people">
            <p>
              <span className="by">{q.by}, </span>
              <span className="role">{q.role}</span>
            </p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Quote;
