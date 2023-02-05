import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, CardBody } from "reactstrap";
import Timeline from "./components/timeline/Timeline";
import TimeLineInput from "./components/timelineinput/TimeLineInput";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { text: "watch the movie", id: "gs" },
    { text: "go to the club", id: "os" },
  ]);
  //console.log(todos);

  const onDeleteHandler = (todoId) => {
    setTodos((prevTodo) => {
      const todoUpdate = prevTodo.filter((item) => item.id !== todoId);
      return todoUpdate;
    });
  };

  const onNewTodo = (enteredTodo) => {
    setTodos((prevTodo) => {
      let todoUpdate = [...prevTodo];
      todoUpdate.unshift({ text: enteredTodo, id: Math.random().toString() });
      return todoUpdate;
    });
  };

  return (
    <div className="app">
      <TimeLineInput onSaveNewTodo={onNewTodo} />
      <Timeline items={todos} saveOnDelete={onDeleteHandler} />
    </div>
  );
}

export default App;
