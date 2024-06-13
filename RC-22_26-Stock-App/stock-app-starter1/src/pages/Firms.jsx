import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
// import useAxios from "../services/useAxios";

const Firms = () => {
  // const { axiosToken } = useAxios;
  // const { getFirms, getSales } = useStockRequest();
  const { getStock } = useStockRequest();

  //__ Bu kodu direk burada yazmamazın sebebi, başka yerlerde'de kullanmak için global'de yazıp dışarıya açarız.
  const { firms } = useSelector((state) => state.stock);
  useEffect(() => {
    // getFirms();
    // getSales();
    getStock("firms");
  }, []);

  console.log(firms);
  return <div>Firms</div>;
};

export default Firms;
