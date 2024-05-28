import { legacy_createStore as createStore } from "redux";
import { counterReducer } from "./ counterReducer";
//? Yaptığımız işlem eski method olduğu için createStore üstü çizilidir.
//? Bunu kaldırmak için legacy_createStore as ... işlemini kullanıruz.
//__ combineReducers ile birden fazla reducers var ise birleştiririz.

//? Store'un oluşturulması işlemi ve dışarı açılması.
export const store = createStore(counterReducer);
