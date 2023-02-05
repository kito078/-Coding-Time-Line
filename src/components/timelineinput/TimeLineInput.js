import React, { useState } from "react";
import { Button, CardBody, Card, Row, Col } from "reactstrap";
import "./TimeLineInput.css";

function TimeLineInput(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onInputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredValue("");
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onSaveNewTodo(enteredValue);
  };

  return (
    <div>
      <Card className="card__form">
        <form
          onSubmit={onSubmitHandler}
          className={`${"form-control d-flex"} ${!isValid && "invalid"}`}
          action=""
        >
          <input
            type="text"
            value={enteredValue}
            onChange={onInputHandler}
            placeholder="Enter text"
          />
          <Button color="danger" className="my-3 me-2">
            +
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default TimeLineInput;
