const initialState = {
  todoList: [{ id: new Date().getTime(), text: "Work Hard", completed: false }],
};

export const ADD = "ADD";
export const DEL = "DEL";
export const CLR = "CLR";
export const TOGGLE = "TOGGLE";

// Action creator func
export const addTodo = (text) => ({ type: ADD, payload: text });

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: action.payload, completed: false },
        ],
      };
    default:
      return state;
  }
};
