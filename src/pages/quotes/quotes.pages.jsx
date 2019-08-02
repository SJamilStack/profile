import React from "react";

import "./quotes.styles.scss";

import Quote from "../../components/Quote/quote.component";

const Quotes = props => {
  return (
    <section className="quotes">
      <div className="row">
        <div className="quotes-inner col-md-12">
          <div className="quotes-title">
            <span />
            <Quote key={props.quotes.id} quotes={props.quotes} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
