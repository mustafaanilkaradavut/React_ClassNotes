import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fetchFail,
  fetchStart,
  getStockSuccess,
  // getFirmsSuccess,
  // getSalesSuccess,
} from "../features/stockSlice";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosToken("/firms");
  //     console.log(data);
  //     dispatch(getFirmsSuccess(data.data));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };

  // const getSales = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosToken("/sales");
  //     console.log(data);
  //     dispatch(getSalesSuccess(data.data));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };

  //__ Her bir işlem için ayrı fonksiyon oluşturmak yerine. Tek farklı yer olan "path" kısmı üzerinden tek fonksiyon yazarız.

  const getStock = async (path) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken(`/${path}`);
      const stockData = data.data;
      dispatch(getStockSuccess({ stockData, path }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const deleteStock = async (path = "firms", id) => {
    dispatch(fetchStart());
    try {
      await axiosToken(`/${path}/${id}`);
      getStock(path);
      dispatch(getStockSuccess());
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  // return { getFirms, getSales};
  return { getStock, deleteStock };
};

export default useStockRequest;
