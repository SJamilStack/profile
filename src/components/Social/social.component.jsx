import React from "react";

import "./social.styles.scss";

const Social = props => {
  return (
    <div class="social-icons">
      {props.socials.map(s => (
        <a
          key={s.id}
          className={s.id}
          href={s.url}
          target="_blank"
          check={s.icon}
        >
          <span>{s.label}</span>
        </a>
      ))}
    </div>
  );
};

export default Social;
