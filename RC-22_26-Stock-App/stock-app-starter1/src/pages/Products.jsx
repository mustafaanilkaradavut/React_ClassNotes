import { useEffect, useState } from "react";
import * as React from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FirmCard from "../components/FirmCard";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";

const Firms = () => {
  const { getStock } = useStockRequest();

  //__ Bu kodu direk burada yazmamazın sebebi, başka yerlerde'de kullanmak için global'de yazıp dışarıya açarız.
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    image: "",
    address: "",
  });
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      phone: "",
      image: "",
      address: "",
    });
  };

  useEffect(() => {
    getStock("products");
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={2}>
        Product
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 3 }}>
        {/* Burada ki handleOpen işlemini "Lifting State Up" ile işleriz. */}
        New Product
      </Button>
      <ProductModal
        handleClose={handleClose}
        open={open}
        info={info}
        setInfo={setInfo}
      />
      <ProductTable />
    </div>
  );
};

export default Firms;
