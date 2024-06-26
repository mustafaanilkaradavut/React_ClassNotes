import { useEffect, useState } from "react";
import * as React from "react";
import useStockRequest from "../services/useStockRequest";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";
import { useSelector } from "react-redux";
import TableSkeleton, { NoDataMessage } from "../components/DataFetchMessages";

const Products = () => {
  const { getStock } = useStockRequest();
  const { error, loading } = useSelector((state) => state.stock);
  const { products } = useSelector((state) => state.stock);

  //__ Bu kodu direk burada yazmamazın sebebi, başka yerlerde'de kullanmak için global'de yazıp dışarıya açarız.
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const initialState = { categoryId: "", brandId: "", name: "" };

  const [info, setInfo] = useState({
    categoryId: "",
    brandId: "",
    name: "",
  });
  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };
  useEffect(() => {
    getStock("products");
    getStock("categories");
    getStock("brands");
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={2}>
        Product
      </Typography>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ mb: 3 }}
        disabled={error}>
        {/* Burada ki handleOpen işlemini "Lifting State Up" ile işleriz. */}
        New Product
      </Button>

      {loading && <TableSkeleton />}
      {!error && !loading && products.length > 0 && <ProductTable />}
      {!error && !products.length && <NoDataMessage />}

      <ProductModal
        handleClose={handleClose}
        open={open}
        info={info}
        setInfo={setInfo}
      />
      {/* <ProductTable /> */}
    </div>
  );
};

export default Products;
