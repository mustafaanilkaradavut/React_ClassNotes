const initialState = {
  todoList: [{ id: new Date().getTime(), text: "Work Hard", completed: false }],
};

//? action types
export const ADD = "ADD";
export const DEL = "DEL";
export const CLR = "CLR";
export const TOGGLE = "TOGGLE";

//? Action creator func
export const addTodo = (payload) => ({ type: ADD, payload: payload });

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };

    default:
      return state;
  }
};
