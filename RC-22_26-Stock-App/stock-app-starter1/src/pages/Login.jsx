import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import { object, string } from "yup";
// import { login } from "../services/useApiRequest";
import useApiRequest from "../services/useApiRequest";

const Login = () => {
  const { login } = useApiRequest();
  const loginSchema = object({
    email: string()
      .email("Please enter a valid email")
      .required("You have to enter your E-mail"),
    password: string()
      .required("Password is Imperative")
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must be at most 16 characters ")
      .matches(/\d+/, "Password must be at least one number")
      //? Burada yer alan "+" işareti bunlardan en az bir tanesinin yer almasını gerektiğini vurgulamak için.
      .matches(/[a-z]/, "Password must be at least one small letter")
      .matches(/[A-Z]/, "Password must be at least one capitakü letter")
      .matches(
        /[@$!%?&]/,
        "Password must be at least one special character (@$!%?&)"
      ),
  });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}>
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}>
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light">
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={async (values, actions) => {
              //__    TODO
              //? POST  (login)
              login(values); //__ Burayı apiRequest kısmında çağırırız.
              //? Toastify mesajı verilebilir.
              //? Global State güncellemesi
              //? Form resetleme işlemi,
              actions.resetForm();
              actions.setSubmitting(false); //__ isSubmitting True'ya kurulur. Butona disabled verip pasif hale getirebiliriz.
              //? navigate (gitmek istediğimiz sayfaya yönlendirme)
            }}>
            {({
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              isSubmitting,
            }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    values={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}>
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
