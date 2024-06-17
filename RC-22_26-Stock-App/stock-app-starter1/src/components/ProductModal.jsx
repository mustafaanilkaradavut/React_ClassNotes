import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import useStockRequest from "../services/useStockRequest";
import { modalStyle } from "../styles/globalStyles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

export default function ProductModal({ handleClose, open, info, setInfo }) {
  // const [info, setInfo] = React.useState({
  //   name: "",
  //   phone: "",
  //   image: "",
  //   address: "",
  // });
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  //__ Yukarıdaki set işlemlerini Firms.jsx'e taşırız.

  //__ Open State değişince local state resetlenir. Formu sumbit etmeden çıkınca tekrar girdiğimizde bilgiler resetlenir.
  //__ Bu yapı'yı pasife alıyoruz çünkü bu yapı bizi edit kısmında bilgileri çekerken engelliyor.
  // React.useEffect(() => {
  //   setInfo({
  //     name: "",
  //     phone: "",
  //     image: "",
  //     address: "",
  //   });
  // }, [open]);

  const { postStock } = useStockRequest();
  const { categories, brands } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    //__ Objeyi açarız ve value değiştiririz.
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (info._id) {
    //   //? put isteğinin çağrılması
    //   putStock("firms", info);
    // } else {

    //? post firm işlemi
    postStock("firms", info);

    //? local state sıfırlama
    // setInfo({ name: "", phone: "", address: "", image: "" });

    //? modal kapama
    handleClose();

    //__   Post request (post firm) => Verileri sil => Modal'ı kapat
  };

  // console.log(info);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component={"form"}
            onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <InputLabel id="categoryId">Categories</InputLabel>
              <Select
                labelId="categoryId"
                id="categoryId"
                name="categoryId"
                label="Categories"
                value={info.categoryId}
                onChange={handleChange}
                required>
                {categories.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="brandId">Brands</InputLabel>
              <Select
                labelId="brandId"
                id="brandId"
                name="brandId"
                label="Brands"
                value={info.brandId}
                onChange={handleChange}
                required>
                {brands.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <Button variant="contained" type="submit">
              ADD PRODUCT
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
