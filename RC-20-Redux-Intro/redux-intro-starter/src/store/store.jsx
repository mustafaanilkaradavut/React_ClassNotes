import { combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
//? Yaptığımız işlem eski method olduğu için createStore üstü çizilidir.
//? Bunu kaldırmak için legacy_createStore as ... işlemini kullanıruz.

//? Store'un oluşturulması işlemi ve dışarı açılması.
// export const store = createStore(counterReducer);

//__ combineReducers ile birden fazla reducers var ise birleştiririz.
const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
