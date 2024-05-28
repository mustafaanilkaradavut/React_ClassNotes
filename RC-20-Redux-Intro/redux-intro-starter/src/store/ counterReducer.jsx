const initialState = {
  count: 0,
};

export const up = "UP";
export const down = "DOWN";
export const remove = "REMOVE";

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UP":
      return { count: state.count + 1 };
    case "DOWN":
      return { count: state.count - 1 };
    case "REMOVE":
      return { count: 0 };

    default:
      return state;
  }
};

//__ action bir objedir. Type'ı payload'ı ( UI'dan reducer'a gidecek olan veri) olan string "__" bir değerdir.
