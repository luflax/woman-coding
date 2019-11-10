import React from "react";

const Feed = props => {
  const authorization = JSON.parse(localStorage.getItem("authorization"));
  return (
    <React.Fragment>
      <h1>{authorization.accessToken}</h1>
      {props.children}
    </React.Fragment>
  );
};

export default Feed;
