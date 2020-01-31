import React, { Component } from "react";

import "../../assets/css/divider.css";

class Divider extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="divider"
          style={{
            width: this.props.width ? this.props.width : "100%",
            marginTop: this.props.mt ? this.props.mt : "0px",
            marginBottom: this.props.mb ? this.props.mb : "0px"
          }}
        ></div>
      </div>
    );
  }
}

export default Divider;
