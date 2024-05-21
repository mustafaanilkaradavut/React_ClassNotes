import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const TextFieldComp = () => {
  const [err, setErr] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Container
      maxWidth="md"
      align="center"
      sx={{ border: "1px solid red", display: "flex", flexDirection: "column" }}
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        margin="normal"
        color="success"
        helperText={err && "Yanlış email girdiniz"}
        error={err}
        type="email"
        required
        onFocus={() => setErr(true)}
        onBlur={() => setErr(false)}
      />
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        margin="normal"
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        margin="normal"
      />
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </Container>
  );
};

export default TextFieldComp;
