import React, { useState } from "react";
import { Image, Card, Button } from "react-bootstrap";
import Moment from "react-moment";
import { connect } from "react-redux";
import UpdateExperience from "../components/UpdateExperience";
import { loadProfile, deleteExperience } from "../actions";

const mapDispatchToProps = dispatch => ({
  deleteExperience: _id => dispatch(deleteExperience(_id)),
  loadProfile: email => dispatch(loadProfile(email))
});

const mapStateToProps = state => {
  return {
    email: state.user.email
  };
};

function Experience(props) {
  const [show, setShow] = useState(false);
  const {
    imageExperience,
    role,
    company,
    startDate,
    endDate,
    _id
  } = props.experience;
  return (
    <div className="row d-flex justify-content-center mb-4">
      <div className="col-sm-12 col-md-4 mb-1">
        <Image src={imageExperience} rounded style={{ width: "100%" }} />
      </div>
      <div className="col-sm-12 col-md-8">
        <Card>
          <Card.Body>
            <Card.Title>{company}</Card.Title>
            <Card.Subtitle className="text-muted">
              <Moment format="YYYY MMM">{startDate}</Moment> -{" "}
              {endDate ? (
                <Moment format="YYYY MMM">{endDate}</Moment>
              ) : (
                "Present"
              )}
            </Card.Subtitle>
            <Card.Text>{role}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="row px-2" style={{ width: "100%" }}>
        <Button
          variant="outline-primary"
          className="my-2 mx-2 rounded-pill col"
          onClick={() => setShow(true)}
        >
          Edit
        </Button>
        <UpdateExperience
          show={show}
          setShow={setShow}
          experience={props.experience}
        />
        <Button
          variant="outline-primary"
          className="my-2 mx-2 rounded-pill col"
          onClick={() => {
            const email = props.email;
            props.deleteExperience(_id);
            props.loadProfile(email);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
