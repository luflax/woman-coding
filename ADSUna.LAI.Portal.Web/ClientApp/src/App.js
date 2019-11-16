import React, { Component } from "react";
import { Route } from "react-router";
import ReduxToastr from "react-redux-toastr";
import Layout from "./template/Layout";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import Community from "./template/community/community";

export default class App extends Component {
  displayName = App.name;

  render() {
    return (
      <React.Fragment>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/community" component={Community} />
        </Layout>
        <ReduxToastr
          timeOut={10000}
          newestOnTop={true}
          preventDuplicates
          position="top-right"
          getState={state => state.toastr} // This is the default
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
      </React.Fragment>
    );
  }
}
