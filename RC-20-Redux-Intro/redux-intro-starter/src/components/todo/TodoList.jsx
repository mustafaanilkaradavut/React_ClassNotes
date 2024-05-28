import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoList); //__ Doğru state anahtarı ile erişim.

  console.log("TodoList Rendered with:", todoList); //__ Render edilen veriyi loglama.

  return (
    <div>
      <div>
        {todoList?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button className="clear-button">Clear</button>
      </div>
    </div>
  );
};

export default TodoList;
