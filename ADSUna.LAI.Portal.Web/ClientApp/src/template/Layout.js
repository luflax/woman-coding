import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

import { withRouter } from "react-router-dom";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

import "./Layout.css";

export class Layout extends Component {
  displayName = Layout.name;

  render() {
    return this.props.location.pathname.includes("community") ? (
      this.props.children
    ) : (
      <div>
        <NavMenu />
        <main style={{ minHeight: "var(--min-page-height)" }}>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);
