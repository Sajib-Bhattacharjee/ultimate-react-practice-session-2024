import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <>
      {props.todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </>
  );
};

export default Todos;
