import React from "react";
import { Image, Card } from "react-bootstrap";
import Moment from "react-moment";
// import "moment-timezone";

export default function experience({ experience }) {
  const { imageExperience, role, company, startDate, endDate } = experience;
  return (
    <div className="row d-flex p-2">
      <div className="p-2" style={{ maxWidth: "200px" }}>
        <Image src={imageExperience} rounded style={{ maxWidth: "100%" }} />
      </div>
      <div className="p-2">
        <Card>
          <Card.Body>
            <Card.Title>{company}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
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
