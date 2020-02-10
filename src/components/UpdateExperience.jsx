import React, { useState } from "react";
import { updateExperience, loadProfile } from "../actions";
import { connect } from "react-redux";
import { Modal, Button, Form, Row } from "react-bootstrap";
import moment from "moment";

const mapDispatchToProps = dispatch => ({
  updateExperience: (_id, body) => dispatch(updateExperience(_id, body)),
  loadProfile: email => dispatch(loadProfile(email))
});

const mapStateToProps = state => {
  return {
    email: state.user.email
  };
};

function UpdateExperience(props) {
  const { show, setShow } = props;
  const [company, setCompany] = useState(props.experience.company);
  const [role, setRole] = useState(props.experience.role);
  const [startDate, setStartDate] = useState(props.experience.startDate);
  const [endDate, setEndDate] = useState(props.experience.endDate);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Form.Group className="col-sm-12 col-md-6">
              <Form.Label>Company</Form.Label>
              <Form.Control
                name="company"
                type="text"
                placeholder="Company"
                value={company}
                onChange={e => setCompany(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="col-sm-12 col-md-6">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                name="role"
                placeholder="Role"
                value={role}
                onChange={e => setRole(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className="col-sm-12 col-md-6">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Start Date"
                value={moment(startDate).format("YYYY-MM-DD")}
                name="startDate"
                onChange={e => setStartDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="col-sm-12 col-md-6">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="End Date"
                value={moment(endDate).format("YYYY-MM-DD")}
                name="endDate"
                onChange={e => setEndDate(e.target.value)}
              />
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-primary"
          className="my-2 rounded-pill"
          onClick={() => {
            const _id = props.experience._id;
            const body = { company, role, startDate, endDate };
            const email = props.email;
            props.updateExperience(_id, body);
            props.loadProfile(email);
            setShow(false);
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateExperience);
