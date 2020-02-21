import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { api_updateProfileImage } from "./api";

export default class UpdateProfileImage extends Component {
  render() {
    const { show, setShow } = this.props;
    return (
      <Modal size="sm" centered show={show} onHide={setShow}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            id="new-image"
            type="file"
            onChange={e => this.setState({ image: e.target.files[0] })}
          />
          <Button
            onClick={async () => {
              let formData = new FormData();
              formData.append("images", this.state.image);
              const token = localStorage.getItem("token");
              const response = await api_updateProfileImage(formData, token);
              if (response.ok) {
                setShow();
              }
            }}
            variant="outline-primary"
            block
            className="my-2 rounded-pill"
          >
            Update Image
          </Button>
        </Modal.Body>
      </Modal>
    );
  }
}
