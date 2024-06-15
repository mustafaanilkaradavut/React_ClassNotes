import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import useStockRequest from "../services/useStockRequest";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FirmModal({ handleClose, open, info, setInfo }) {
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

  const { postStock, putStock } = useStockRequest();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    //__ Objeyi açarız ve value değiştiririz.
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (info._id) {
      //? put isteğinin çağrılması
      putStock("firms", info);
    } else {
      //? post firm işlemi
      postStock("firms", info);
    }

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
        <Box sx={style}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component={"form"}
            onSubmit={handleSubmit}>
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="gsm"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
              required
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
              required
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <Button variant="contained" type="submit">
              {info._id ? "UPDATE FIRM" : "ADD FIRM"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
