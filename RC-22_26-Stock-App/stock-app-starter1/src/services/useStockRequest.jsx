import { useDispatch } from "react-redux";
import useAxios from "./useAxios";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  const getFirms = async () => {
    //__ dispatch()
    try {
      const { data } = await axiosToken("/firms");
      console.log(data);
      //__ dispatch()
    } catch (error) {
      //__ dispatch()
      console.log(error);
    }
  };
  return { getFirms };
};

export default useStockRequest;
