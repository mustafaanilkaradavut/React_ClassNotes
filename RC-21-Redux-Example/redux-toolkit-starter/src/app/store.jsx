import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import newsReducer from "../features/newsSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    news: newsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  //? Eğer geliştirme aşaması production ise o zaman yukarıdaki ifade false dondurur ve dolayısıyla devTool kullanıma kapalı olur.
});
