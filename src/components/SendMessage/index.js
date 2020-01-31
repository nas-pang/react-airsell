import React, { Component } from "react";

import Divder from "../Divider";
import "../../assets/css/sendmessage.css";
import { Button, Icon } from "semantic-ui-react";
// import Button from 'react-bootstrap/Button'
import MessageModal from "./MessageModal";

class SendMessageComp extends Component {
  constructor() {
    super();

    this.state = { showModal: false };
  }

  showMessageModal = event => {
    this.setState({
      showModal: true
    });
  };

  render() {
    return (
      <div>
        <div className="area d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center">
            <div className="name">Lior Braginsky</div>

            <a href="/">
              <img
                className="avatar"
                src="https://secure.gravatar.com/avatar/0649d652c61ad6b98aae16b80283ee70?s=56&d=mm&r=g"
                alt="go to author"
              />
            </a>
          </div>

          <Divder mt="25px" mb="25px" />

          <div className="fill d-flex align-items-center">
            <Button
              color="google plus"
              className=""
              onClick={this.showMessageModal}
            >
              <Icon name="envelope open outline" />
              Send Messsage
            </Button>
            {/* <Button className="btn"><i className="fa fa-calendar ml-2"></i> Send Message</Button> */}
          </div>
        </div>

        <MessageModal show={this.state.showModal} />
      </div>
    );
  }
}

export default SendMessageComp;
