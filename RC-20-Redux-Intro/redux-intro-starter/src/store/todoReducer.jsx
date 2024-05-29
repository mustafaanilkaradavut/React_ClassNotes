const initialState = {
  todoList: [{ id: new Date().getTime(), text: "Work Hard", completed: false }],
};

export const ADD = "ADD";
export const DEL = "DEL";
export const CLR = "CLR";
export const TOGGLE = "TOGGLE";

// Action creator func
export const addTodo = (text) => ({ type: ADD, payload: text });
export const ClearTodo = () => ({ type: CLR });
export const delTodo = (id) => ({ type: DEL, payload: id });
export const toggleTodo = (id) => ({ type: TOGGLE, payload: id });

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

    case CLR:
      return initialState;

    case DEL:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
};
