import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchases: [],
  sales: [],
  firms: [],
  products: [],
  brands: [],
  categories: [],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    // getFirmsSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.firms = payload;
    // },
    // getSalesSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.sales = payload;
    // },

    //__ Yaptığımız işlemler genel olarak aynı olduğu için bu işlemler için GENERAL STATE yazdık.
    //.. path şurada yer almalı : action.payload.path

    // getStockSuccess: (state, action) => {
    //   state.loading = false;
    //   state[action.payload.path] = action.payload.stockData;
    // },

    //__ Diğer bir kısa yöntem ;

    getStockSuccess: (state, { payload: { path, stockData } }) => {
      state.loading = false;
      state[path] = stockData;
      // state.error = false;
    },
    getProPurBraFirmSuccess: (
      state,
      { payload: { products, purchases, firms, brands } }
    ) => {
      state.loading = false;
      state.products = products;
      state.purchases = purchases;
      state.brands = brands;
      state.firms = firms;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchFail,
  fetchStart,
  // getFirmsSuccess,
  // getSalesSuccess,
  getStockSuccess,
  getProPurBraFirmSuccess,
} = stockSlice.actions;

export default stockSlice.reducer;
