import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import Footer from './Footer'

import './Layout.css'

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <div >
        <NavMenu />
        <main style={{minHeight: 'var(--min-page-height)'}}>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}
