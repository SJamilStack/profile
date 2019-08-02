import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQuoteLeft } from "@fortawesome/fontawesome-free-solid";

import "./quote.styles.scss";

const Quote = ({ quotes }) => {
  return (
    <ul className="quote col-md-12">
      <li>
        <span>
          <FontAwesomeIcon icon={faQuoteLeft} />
        </span>
        <h2 className="title">The Kind Words</h2>
      </li>

      {quotes.map(q => (
        <li key={q.id} className="quote-item">
          <p className="by-whom">
            <span className="by">{q.by}, </span>
          </p>
          <p className="role">{q.role}</p>

          <p className="words">
            <span className="icon">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </span>
            <br />
            {q.quote}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Quote;
