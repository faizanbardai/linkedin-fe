import React, { Component } from "react";
import { loadProfile } from "../actions";
import { connect } from "react-redux";
import { Card, Image, Button } from "react-bootstrap";
import Experience from "../components/Experience";
import UpdateProfile from "../components/UpdateProfile";

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
  state = { show: false };
  setShow = () => this.setState({ show: !this.state.show });
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
      <section className="container my-3">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-4 mb-3" style={{}}>
            <Image
              src={imageProfile}
              className="p-4"
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
              onClick={this.setShow}
              variant="outline-primary"
              block
              className="my-2 rounded-pill"
            >
              Edit Profile
            </Button>
            {this.props.profile.name && (
              <UpdateProfile
                show={this.state.show}
                setShow={this.setShow}
                email={this.props.email}
                profile={this.props.profile}
              />
            )}
          </div>
          <div className="col-sm-12 col-md-8" style={{}}>
            <Card>
              <Card.Body>
                <Card.Title>Experience</Card.Title>
                {experiences &&
                  experiences.map(experience => (
                    <Experience key={experience._id} experience={experience} />
                  ))}
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    );
  }
  componentDidMount = async () => {
    this.props.loadProfile(this.props.email);
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
