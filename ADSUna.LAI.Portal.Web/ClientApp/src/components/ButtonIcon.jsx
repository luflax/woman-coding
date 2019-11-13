import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Buttons.css";

export default props => {
  const preventRedirect = e => {
    e.preventDefault();
    props.onClick(e);
  };

  const classes = `${props.small ? "btnIconSmall" : "btnIcon"} ${
    props.className
  }`;
  return (
    <a href="#" onClick={preventRedirect} className={classes}>
      <span>{props.label}</span>
      {props.icon ? (
        <FontAwesomeIcon icon={props.icon} color="#fff" size="lg" />
      ) : (
        ""
      )}
    </a>
  );
};
