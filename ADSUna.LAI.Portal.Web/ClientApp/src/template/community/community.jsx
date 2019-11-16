import React, { useState } from "react";
import { withRouter, Switch } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Route, Redirect } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Feed from "../../pages/Feed";
import MyProfile from "../../pages/MyProfile";
import Profile from "../../pages/Profile";

import "./community.css";

const Community = props => {
  function logOut() {
    setMenuDropped(false);
    localStorage.removeItem("authorization");
    props.history.push("/login/");
  }

  function goToMyProfile() {
    setMenuDropped(false);
    props.history.push(`${props.match.path}/myprofile`);
  }

  const [menuDropped, setMenuDropped] = useState(false);

  return (
    <div className="communityContainer">
      <Navbar variant="dark" expand="lg">
        <Navbar.Brand>
          <Link to={"/community"}>
            <img
              src={"/assets/images/glassesWhite.png"}
              alt="Logo"
              className="logoImage"
            ></img>
            Woman Coding
          </Link>
        </Navbar.Brand>
        <div className="userIcon">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="profilePicture"
            color="#fff"
            size="2x"
            onClick={() => setMenuDropped(!menuDropped)}
          />
          <div
            className={`profileMenuDrop ${
              menuDropped ? "" : "profileMenuDropDisable"
            }`}
          >
            <a href="javascript:void(0)" onClick={e => goToMyProfile()}>
              Meu perfil
            </a>
            <a href="javascript:void(0)" onClick={e => logOut()}>
              Sair
            </a>
          </div>
        </div>
      </Navbar>
      <Switch>
        <Route path={`${props.match.path}/feed`} component={Feed} />
        <Route path={`${props.match.path}/myprofile`} component={MyProfile} />
        <Route path={`${props.match.path}/profile/:id`} component={Profile} />
        <Route exact path={`${props.match.path}/`}>
          <Redirect to={`${props.match.path}/feed`} />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(Community);
