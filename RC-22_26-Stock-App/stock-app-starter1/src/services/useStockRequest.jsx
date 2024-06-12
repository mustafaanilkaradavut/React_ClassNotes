import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fetchFail, fetchStart, getFirmsSuccess } from "../features/stockSlice";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken("/firms");
      console.log(data);
      dispatch(getFirmsSuccess(data.data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  return { getFirms };
};

export default useStockRequest;
