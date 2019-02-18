import React, { Component } from "react";
import CSSModules from "react-css-modules";
import style from "./appContainer.less";

import { Route, Link, withRouter, Switch, Redirect } from "react-router-dom";
import firebase from "lib/firebase";
import firebase2 from "firebase";
import { getUID } from "lib";
import { MdPlusOne, MdAdd, MdSearch } from "react-icons/md";
import Home from "../Home";
import NewProduct from "../NewProduct";
import NewCrate from "../../components/NewCrate/NewCrate";
import EditCrate from "../EditCrate/EditCrate";
import EditProduct from "../EditProduct/EditProduct";

@withRouter
@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
export default class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(a => {
      console.log("THAT CHANGE!", a);
      if (a.uid == "AqQVcObSssQRkAc5nYTOb2oSbBI3") {
        this.setState({ loggedIn: true });
      }
    });
  }

  signInWithGoogle() {
    var provider = new firebase2.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(result);
        // ...
      })
      .catch(function(error) {
        console.log(error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  render() {
    return this.state.loggedIn ? (
      <Switch>
        <Route path="/newProduct">
          <NewProduct />
        </Route>
        <Route path="/newCrate">
          <NewCrate />
        </Route>
        <Route path="/editCrate/:id">
          <EditCrate />
        </Route>
        <Route path="/editProduct/:id">
          <EditProduct />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    ) : (
      <div>
        <div
          onClick={() => {
            this.signInWithGoogle();
          }}
        >
          Log in
        </div>
      </div>
    );
  }
}
