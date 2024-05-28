const initialState = {
  todoList: [],
};

export const ADD = "ADD";
export const DEL = "DEL";
export const CLR = "CLR";
export const TOGGLE = "TOGGLE";

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state, ...payload };

    default:
      return state;
  }
};
