import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    password: "",
  },
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: (state, action) => {
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
