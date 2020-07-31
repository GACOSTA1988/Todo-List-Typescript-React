import React, { useState } from "react";
import { TodoListItem } from "./TodoListItem";

const initialTodos: Array<Todo> = [
  { text: "get dog food", complete: true },
  { text: "Wash car", complete: false },
];

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
    </React.Fragment>
  );
};

export default App;
