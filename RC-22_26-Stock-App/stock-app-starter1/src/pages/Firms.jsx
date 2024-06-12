import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";

const Firms = () => {
  const { getFirms } = useStockRequest();

  //__ Bu kodu direk burada yazmamazın sebebi, başka yerlerde'de kullanmak için global'de yazıp dışarıya açarız.
  const { firms } = useSelector((state) => state.stock);
  useEffect(() => {
    getFirms();
  }, []);

  return <div>Firms</div>;
};

export default Firms;
