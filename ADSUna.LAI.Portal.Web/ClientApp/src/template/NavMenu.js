import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./NavMenu.css";

class NavMenu extends Component {
  displayName = NavMenu.name;

  render() {
    return (
      <Navbar variant="dark" expand="lg">
        <Navbar.Brand>
          <Link to={"/"}>
            <img
              src={"/assets/images/glasses.png"}
              alt="Logo"
              className="imgLogo"
            ></img>
            Woman Coding
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={"/"} exact>
              <Nav.Link>Início</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/login"}>
              <Nav.Link>Entrar</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/register"}>
              <Nav.Link>Cadastrar</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavMenu;
