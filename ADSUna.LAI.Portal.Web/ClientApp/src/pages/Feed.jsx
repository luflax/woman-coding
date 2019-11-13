import React from "react";

import Community from "../template/community/community";

const Feed = props => {
  const authorization = JSON.parse(localStorage.getItem("authorization"));
  return (
    <React.Fragment>
      <Community />
    </React.Fragment>
  );
};

export default Feed;
