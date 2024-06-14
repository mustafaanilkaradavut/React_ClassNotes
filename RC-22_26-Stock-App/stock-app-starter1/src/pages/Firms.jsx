import { useEffect, useState } from "react";
import * as React from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";
// import useAxios from "../services/useAxios";

const Firms = () => {
  // const { axiosToken } = useAxios;
  // const { getFirms, getSales } = useStockRequest();
  const { getStock } = useStockRequest();

  //__ Bu kodu direk burada yazmamazın sebebi, başka yerlerde'de kullanmak için global'de yazıp dışarıya açarız.
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // getFirms()
    // getSales()
    // getStock("sales")
    getStock("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={2}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        {/* Burada ki handleOpen işlemini "Lifting State Up" ile işleriz. */}
        New Firm
      </Button>
      <FirmModal handleClose={handleClose} open={open} />
      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {firms.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
