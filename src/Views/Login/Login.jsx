import React from "react";
import classes from "./Login.module.css";
import { TextField, Button, CircularProgress } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { userSignIn } from "../../Controller/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Reducer/UserReducer/UserReducer";
import { useEffect } from "react";
import { didUserLogin } from "../../Utils/RoleUtils";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    didUserLogin(user) && navigate("/");
  }, []);

  const handleLogin = async (email, password, formik) => {
    try {
      const user = await userSignIn(email, password);
      console.log(user);
      dispatch(login(user));
      navigate("/");
    } catch (error) {
      formik.errors.account = "Invalid Email or Password";
    }
  };

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const LoginTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "var(--first)",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "var(--first)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--first)",
      },
    },
  });

  const MaterialUI = () => {
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        // console.log("testing");
        // alert(JSON.stringify(values, null, 2));
        await handleLogin(values.email, values.password, formik);
      },
    });

    return (
      <div className={classes.materialContainer}>
        <form
          onSubmit={formik.handleSubmit}
          className={classes.formMuiContainer}
        >
          {formik.errors.account && (
            <p className={classes.signUpError}>{formik.errors.account}</p>
          )}
          <Box sx={{ width: "100%" }}>
            <LoginTextField
              sx={{
                color: "black",
              }}
              fullWidth
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              size="small"
              margin="normal"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <LoginTextField
              sx={{
                color: "black",
              }}
              fullWidth
              type="password"
              name="password"
              label="Password"
              variant="outlined"
              size="small"
              margin="normal"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Box>
          <Button
            sx={{
              backgroundColor: "var(--second)",
              width: "40%",
              margin: "auto",
              padding: "10px 10px",
              marginTop: "40px",
              "&:hover": {
                backgroundColor: "#306142",
              },
            }}
            type="submit"
            variant="contained"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <CircularProgress color="inherit" />
            ) : (
              "LOGIN"
            )}
          </Button>
        </form>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.loginContainer}>
        <div className={classes.loginImage}>
          <img src="PartaniLogo.svg" />
          <p>PARTANI</p>
        </div>
        <div className={classes.formContainer}>
          <MaterialUI />
          <p className={classes.loginLink}>
            Don’t have an account? <Link to={"/register"}>Sign up here!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
