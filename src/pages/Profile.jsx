import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Image, Button } from "react-bootstrap";
import Experience from "../components/Experience";
import UpdateProfile from "../components/UpdateProfile";
import UpdateProfileImage from "../components/UpdateProfileImage";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const Profile = props => {
  const [showProfileModel, setShowProfileModel] = useState(false);
  const [showProfileImageModel, setShowProfileImageModel] = useState(false);
  if (props.token || localStorage.getItem("token")) {
    if (props.user) {
      const {
        firstName,
        lastName,
        imageProfile,
        bio,
        area,
        title,
        experiences
      } = props.user;
      return (
        <section className="container my-3">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-3 mb-3">
              <Image
                fluid
                src={imageProfile}
                className="p-4"
                roundedCircle
                style={{ width: "100%" }}
              />
              <Button
                onClick={() => setShowProfileImageModel(true)}
                variant="outline-primary"
                block
                className="my-2 rounded-pill"
              >
                Update Image
              </Button>
              {props.user.imageProfile && (
                <UpdateProfileImage
                  show={showProfileImageModel}
                  setShow={setShowProfileImageModel}
                />
              )}
              <Card>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                  <Card.Title>
                    {firstName} {lastName}
                  </Card.Title>
                  <Card.Text>{bio}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{area}</Card.Footer>
              </Card>
              <Button
                onClick={() => setShowProfileModel(true)}
                variant="outline-primary"
                block
                className="my-2 rounded-pill"
              >
                Edit Profile
              </Button>
              {props.user.username && (
                <UpdateProfile
                  show={showProfileModel}
                  setShow={setShowProfileModel}
                />
              )}
            </div>
            <div className="col-sm-12 col-md-9">
              <Card>
                <Card.Body>
                  <Card.Title>Experience</Card.Title>
                  {experiences &&
                    experiences.map(experience => (
                      <Experience
                        key={experience._id}
                        experience={experience}
                      />
                    ))}
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>
      );
    } else return <div>Loading...</div>;
  }
  return <Redirect push to="/login" />;
};

export default connect(mapStateToProps)(Profile);
