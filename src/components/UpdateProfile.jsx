import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { updateProfile } from "../actions";

const mapDispatchToProps = dispatch => ({
  updateProfile: (body, token) => dispatch(updateProfile(body, token))
});

const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token
  };
};

class UpdateProfile extends Component {
  state = {};
  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { firstName, lastName, title, bio, area } = this.state;
    const body = { firstName, lastName, title, bio, area };
    await this.props.updateProfile(body, localStorage.getItem("token"));
    this.props.setShow();
  };
  componentDidMount = async () => {
    const { firstName, lastName, title, bio, area } = this.props.user;
    this.setState({ firstName, lastName, title, bio, area });
  };
  render() {
    const { show, setShow } = this.props;
    const { firstName, lastName, title, bio, area } = this.state;
    return (
      <Modal size="xl" centered show={show} onHide={setShow}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Form.Group className="col-sm-12 col-md-6">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="col-sm-12 col-md-6">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group className="col-sm-12 col-md-6">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  value={title}
                  name="title"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="col-sm-12 col-md-6">
                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Area"
                  value={area}
                  name="area"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>

            <Form.Group>
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Biography"
                value={bio}
                name="bio"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-primary"
            className="my-2 rounded-pill"
            onClick={this.handleSubmit}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
