import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class MessageModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: this.props.show,
      event: null,
      title: "Send Message"
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      show: props.show
    });
  }

  hideModal = () => {
    this.setState({
      ...this.state,
      show: false
    });
  };

  render() {
    return (
      <Modal
        show={this.state.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={this.hideModal}
      >
        <Modal.Header closeButton style={{ border: 0 }}>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.state.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-0 pt-1">
          <div className="">
            <textarea
              className="form-control"
              id="textarea"
              rows="5"
              placeholder="Write your message."
            />
          </div>
        </Modal.Body>
        <Modal.Footer style={{ border: 0 }}>
          <Button className="mybtn">
            <i class="fa fa-paperclip" aria-hidden="true"></i>
          </Button>
          <div style={{ flex: 1 }} />
          <Button className="mybtn" onClick={this.hideModal}>
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MessageModal;
