import React from "react";
import { Button, CardBody, Card, Row, Col } from "reactstrap";
import { RiDeleteBack2Fill } from "react-icons/ri";

function TimeLineList(props) {
  const onHandleClicked = () => {
    props.onDelete(props.id);
  };
  return (
    <div>
      <Row className="row-body px-3 py-3 ">
        <Col>
          {" "}
          <span className="pe-2">#</span>
          {props.children}
        </Col>
        <Col>
          Completed{" "}
          <span className="icon ms-3">
            <RiDeleteBack2Fill onClick={onHandleClicked} />
          </span>
        </Col>
      </Row>
    </div>
  );
}

export default TimeLineList;
