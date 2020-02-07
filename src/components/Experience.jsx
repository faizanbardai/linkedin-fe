import React from "react";
import { Image, Card } from "react-bootstrap";
import Moment from "react-moment";
// import "moment-timezone";

export default function experience({ experience }) {
  const { imageExperience, role, company, startDate, endDate } = experience;
  return (
    <div className="row d-flex justify-content-center mb-3">
      <div className="col-sm-12 col-md-4 mb-2" style={{}}>
        <Image src={imageExperience} rounded style={{ width: "100%" }} />
      </div>
      <div className="col-sm-12 col-md-8" style={{}}>
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
    </div>
  );
}
