import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  newsData: [],
  loading: false,
  error: false,
};

const getNews = createAsyncThunk(
  "getNews", //__ action type
  async () => {
    const API_KEY = "f33b836eabbd49888b8ef386ed77c55f";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    //__ api istek fonksiyonu
    const data = await axios(url);
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;
