import React from "react";
import { TodoListItem } from "./TodoListItem";

const todos: Array<Todo> = [
  { text: "get food", complete: true },
  { text: "Wash car", complete: false },
];

function App() {
  return (
    <div>
      <TodoListItem todo={todos[0]} />
    </div>
  );
}

export default App;
