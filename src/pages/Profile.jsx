import React, { Component } from "react";
import { loadProfile } from "../actions";
import { connect } from "react-redux";
import { Card, Image, Button } from "react-bootstrap";
import Experience from "../components/Experience";

const mapStateToProps = state => {
  return {
    email: state.user.email,
    profile: state.user.profile
  };
};
const mapDispatchToProps = dispatch => ({
  loadProfile: email => dispatch(loadProfile(email))
});

class Profile extends Component {
  render() {
    const {
      name,
      surname,
      imageProfile,
      bio,
      area,
      title,
      experiences
    } = this.props.profile;
    return (
      <section className="container my-2">
        <div className="row d-flex flex-wrap justify-content-center">
          <div className="mx-3 mb-3" style={{ maxWidth: "300px" }}>
            <Image
              src={imageProfile}
              className="p-3"
              roundedCircle
              style={{ width: "100%" }}
            />
            <Card>
              <Card.Header>{title}</Card.Header>
              <Card.Body>
                <Card.Title>
                  {name} {surname}
                </Card.Title>
                <Card.Text>{bio}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">{area}</Card.Footer>
            </Card>
            <Button
              variant="outline-primary"
              block
              className="my-2 rounded-pill"
            >
              Edit Profile
            </Button>
          </div>
          <Card className="mx-3">
            <Card.Body>
              <Card.Title>Experience</Card.Title>
              {experiences &&
                experiences.map(experience => (
                  <Experience key={experience._id} experience={experience} />
                ))}
            </Card.Body>
          </Card>
        </div>
      </section>
    );
  }
  componentDidMount = async () => {
    this.props.loadProfile(this.props.email);
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
