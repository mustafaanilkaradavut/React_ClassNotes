import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    password: "",
  },
};

const loginSlice = createSlice({
  name: "login", //.. action type
  initialState,
  reducers: {
    //.. reducer
    setUser: (state, action) => {
      //.. action creater functuion
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = { email: "", password: "" };
    },
  },
});

//__ Oluşan action fonksiyonları sliceName.actions 'dan destructure edilerek export yapılır.
export const { setUser, clearUser } = loginSlice.actions;

//__ Yazılan slice'ın reducer'ı sliceName.reducer şeklinde export edilmelidir.
export default loginSlice.reducer;
