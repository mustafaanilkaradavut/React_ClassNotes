import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FirmCard from "../components/FirmCard";
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

  // console.log(firms);
  return (
    <div>
      <Typography variant="h6" color={"error"} mb={2}>
        Firms
      </Typography>

      <Button variant="contained">New Firm</Button>

      <Grid container>
        {firms.map((firm) => (
          <Grid item>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
