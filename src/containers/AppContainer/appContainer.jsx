import React, { Component } from "react";
import CSSModules from "react-css-modules";
import style from "./appContainer.less";


import { Route, Link, withRouter, Switch, Redirect } from "react-router-dom";
import firebase from "lib/firebase";
import firebase2 from "firebase";
import { getUID } from "lib";
import { MdPlusOne, MdAdd, MdSearch } from "react-icons/md";
import Home from "../Home";

@withRouter
@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
export default class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  _componentDidMount() {
    firebase.auth().onAuthStateChanged(a => {
      console.log("THAT CHANGE!", a);
      if (!a) {
        console.log("no user!");
        firebase
          .auth()
          .setPersistence(firebase2.auth.Auth.Persistence.LOCAL)
          .then(() => {
            firebase
              .auth()
              .signInAnonymously()
              .then(() => {
                console.log("okayy");
                this.setState({ loading: false });
              })
              .catch(function(error) {
                console.log("login failed", error);
              });
          });
      } else {
        console.log("user already");
        //this.linkEmail();
        this.setState({ loading: false });
      }
    });
  }



  render() {
    return !this.state.loading ? (
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
        
      </Switch>
    ) : (
      <div />
    );
  }
}
