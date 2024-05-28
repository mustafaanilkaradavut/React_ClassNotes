import { useState } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { addTodo } from "../../store/todoReducer";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch;

  const handleSubmit = (e) => {
    e.preventDefault();
    //__ TODO : dispatch (ADD)    -   1.import etmek / 2. referansa aktarmak.
    //?  UI tarafından global state'in değiştirilme istediğinin reducer'a bildirilmesi.
    dispatch(addTodo(text));
    // dispatch({ type: "ADD", payload: text });  //* Burada yaptığımız işlem ile yukarıdaki işlem aynı. Best practice.
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
