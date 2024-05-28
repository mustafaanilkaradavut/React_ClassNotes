const initialState = {
  count: 0,
};

//__ action type'ların değişken olarak tanımlanması bizi bir çok case-sensitive hatasından kurtaracaktır.
export const up = "UP";
export const down = "DOWN";
export const remove = "REMOVE";

//__ action creator function'ların tanımlanması. UI tarafında çok fazla işlem gerektiğinde kullanırız.
export const upFunc = () => {
  return { type: up };
};
export const downFunc = () => {
  return { type: down };
};
export const removeFunc = () => {
  return { type: remove };
};

//__ State'lerin değişimine karar veren reducer logic. Reducer fonksiyonlar dışarıya bağlı olmaz.
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
