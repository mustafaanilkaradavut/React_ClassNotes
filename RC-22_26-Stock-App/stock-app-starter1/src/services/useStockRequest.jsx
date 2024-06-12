import { useDispatch, useDispatch } from "react-redux";
import useAxios from "./useAxios";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  const getFirms = async () => {
    //__ dispatch()
    try {
      const { data } = axiosToken("/firms");
      console.log(data);
      //__ dispatch()
    } catch (error) {
      //__ dispatch()
      console.log(error);
    }
  };
  return getFirms;
};

export default useStockRequest;
