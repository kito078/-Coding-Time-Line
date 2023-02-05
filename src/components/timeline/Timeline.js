import React from "react";
import { Button, CardBody, Card, Row, Col } from "reactstrap";
import TimeLineItem from "../timelineitem/TimeLineItem";

import "./Timeline.css";

function Timeline(props) {
  return (
    <div>
      <CardBody className="timeline">
        <div className="container p-3">
          <h4>Coding Time line</h4>
          <p>3 Totals, 2 totals and one pending</p>
        </div>
        <Card className="timeline__card mt">
          <Row className="timeline__row px-3 py-3 text-white">
            <Col className="fw-bolder">
              {" "}
              <span className="pe-2">#</span> Task Title
            </Col>
            <Col className="fw-bolder">Status</Col>
          </Row>
          <TimeLineItem delete={props.saveOnDelete} items={props.items} />
        </Card>
      </CardBody>
    </div>
  );
}

export default Timeline;
