import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { ClearTodo } from "../../store/todoReducer";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoList); //__ Doğru state anahtarı ile erişim.
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(ClearTodo());
  };

  console.log("TodoList Rendered with:", todoList); //__ Render edilen veriyi loglama.

  return (
    <div>
      <div>
        {todoList?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
