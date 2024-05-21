import { Box, Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
// or
//__ named import yöntemi development aşamasında bundle size'ı artırdığı için yavaşlamaya sebep olabilir.
//__ O yüzden deafult import kullanırız.
// import { Typography } from '@mui/material';

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: 2,
  mt: 3,
};
const TypoButtons = () => {
  return (
    <div>
      {/* Burada sx altına {{ içerisine yukarıdaki değerleri yazabilir ve sonuç alabiliriz.}} */}
      <Box sx={boxStyle}>
        <Typography variant="h1" component="h3">
          Deneme
        </Typography>
        <Typography variant="body1" color="violet">
          Bu bir elementtir
        </Typography>
        <Typography variant="body2" color="#dc143c">
          Bu bir elementtir
        </Typography>
        <Typography variant="subtitle1" color="primary">
          Bu bir elementtir
        </Typography>
        <Typography variant="subtitle1" color="primary.light">
          Bu bir elementtir
        </Typography>
        <Typography variant="subtitle2" color="secondary" mt={2}>
          Bu bir elementtir
        </Typography>
        <Typography variant="button" color="error" mt={2}>
          Bu bir elementtir
        </Typography>
      </Box>
      <Typography variant="h2" align="center" color="turquoise" mt={4}>
        BUTTONS
      </Typography>

      <Stack
        direction={"row"}
        mt={3}
        gap={2}
        justifyContent={"center"}
        flexWrap={"wrap"}>
        {/*  */}
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined" color="error">
          Outlined
        </Button>
        <Button variant="contained" color="warning">
          Contained
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "#bede",
            ":hover": { backgroundColor: "#3ac798ed" },
          }}>
          Contained
        </Button>
        <Button
          variant="contained"
          //__ Eğer buradan sx ile özelleştirme yapacak ve color değiştireceksek, default olarak gelen hover efektinide vermemiz lazım.
          sx={{
            color: "black",
            backgroundColor: "secondary.light",
            ":hover": { backgroundColor: "secondary.dark" },
          }}>
          Contained
        </Button>
      </Stack>
    </div>
  );
};

export default TypoButtons;
