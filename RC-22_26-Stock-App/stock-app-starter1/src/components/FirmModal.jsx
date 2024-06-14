import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

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

export default function FirmModal({ handleClose, open }) {
  const [info, setInfo] = React.useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  //__ Yukarıdaki set işlemlerini Firms.jsx'e taşırız.

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
            component={"form"}>
            <TextField
              label="Email"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="gsm"
              variant="outlined"
              value={info.phone}
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.image}
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
            />
            <Button variant="contained" type="submit">
              ADD NEW FIRM
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
