import React, { Component } from "react";

import firebase from "lib/firebase";

export default class NumberBlock extends Component {
  componentDidMount() {
    console.log("MOUNTTT!");
    this.valueChanged(this.props.default || "");
  }
  valueChanged(v) {
    this.props.setValue(this.props.name, v);
  }
  validate() {}
  fileSelected(file) {
    if (file) {
      console.log("file selected");
      var storageRef = firebase.storage().ref();
      var mountainsRef = storageRef.child("mountains.jpg");
      mountainsRef.put(file).then(snapshot => {
        console.log("Uploaded a blob or file!", snapshot);
        snapshot.ref.getDownloadURL().then(u => {
          console.log(u);
          this.valueChanged(u);
        });
      });
    }
  }
  render() {
    return (
      <div style={{ flexDirection: "row", display: "flex", marginBottom: 10 }}>
        {this.props.label && (
          <div style={{ width: 200 }}>{this.props.label}</div>
        )}
        {!this.props.value ? (
          <div>
            <label
              style={{
                width: 50,
                height: 50,
                background: "#999",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                borderRadius: 4,
                color: "white",
                fontWeight: "bold",

                fontSize: 30
              }}
            >
              +
              <input
                type="file"
                style={{ display: "none" }}
                onChange={e => {
                  this.fileSelected(e.target.files[0]);
                }}
              />
            </label>
          </div>
        ) : (
          <div>
            <img style={{ width: 50, height: 50 }} src={this.props.value} />
          </div>
        )}
      </div>
    );
  }
}
