import {
  TextField,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Button,
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import classes from "./Register.module.css";
import PartaniIcon from "../../Assets/Icons/PartaniIcon.svg";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { userRegister } from "../../Controller/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Reducer/UserReducer/UserReducer";
import { useEffect } from "react";
import { didUserLogin } from "../../Utils/RoleUtils";

const provinceList = [
  {
    id: 1,
    value: "Nangroe Aceh Darussalam",
  },
  {
    id: 2,
    value: "Sumatera Utara",
  },
  {
    id: 3,
    value: "Sumatera Barat",
  },
  {
    id: 4,
    value: "Riau",
  },
  {
    id: 5,
    value: "Kepulauan Riau",
  },
  {
    id: 6,
    value: "Kepulauan Bangka Belitung",
  },
  {
    id: 7,
    value: "Jambi",
  },
  {
    id: 8,
    value: "Sumatera Selatan",
  },
  {
    id: 9,
    value: "Bengkulu",
  },
  {
    id: 10,
    value: "Lampung",
  },
  {
    id: 11,
    value: "DKI Jakarta",
  },
  {
    id: 12,
    value: "Jawa Barat",
  },
  {
    id: 13,
    value: "Banten",
  },
  {
    id: 14,
    value: "Jawa Tengah",
  },
  {
    id: 15,
    value: "DI Yogyakarta",
  },
  {
    id: 16,
    value: "Jawa Timur",
  },
  {
    id: 17,
    value: "Kalimantan Barat",
  },
  {
    id: 18,
    value: "Kalimantan Tengah",
  },
  {
    id: 19,
    value: "Kalimantan Utara",
  },
  {
    id: 20,
    value: "Kalimantan Timur",
  },
  {
    id: 21,
    value: "Kalimantan Selatan",
  },
  {
    id: 22,
    value: "Bali",
  },
  {
    id: 23,
    value: "Nusa Tenggara Barat",
  },
  {
    id: 24,
    value: "Nusa Tenggara Timur",
  },
  {
    id: 25,
    value: "Sulawesi Utara",
  },
  {
    id: 26,
    value: "Gorontalo",
  },
  {
    id: 27,
    value: "Sulawesi Tengah",
  },
  {
    id: 28,
    value: "Sulawesi Barat",
  },
  {
    id: 29,
    value: "Sulawesi Selatan",
  },
  {
    id: 30,
    value: "Sulawesi Tenggara",
  },
  {
    id: 31,
    value: "Maluku Utara",
  },
  {
    id: 32,
    value: "Maluku",
  },
  {
    id: 33,
    value: "Papua Barat",
  },
  {
    id: 34,
    value: "Papua",
  },
  {
    id: 35,
    value: "Papua Selatan",
  },
  {
    id: 36,
    value: "Papua Tengah",
  },
  {
    id: 37,
    value: "Papua Pegunungan",
  },
];

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Register = () => {
  const [registerSuccess, setRegisterSuccess] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    didUserLogin(user) && navigate("/home");
  }, []);

  const handleRegister = async (values, formik) => {
    try {
      const userSignUp = await userRegister(
        values.nama,
        values.email,
        values.password,
        values.nomorTelepon,
        values.tanggalLahir,
        values.jenisKelamin,
        values.provinsi,
        values.kota,
        values.kecamatan,
        values.alamatLengkap,
        values.kodePos
      );
      setRegisterSuccess(userSignUp);
    } catch (error) {
      formik.errors.account = "Something went wrong";
    }
  };

  const handleToHomePage = () => {
    dispatch(login(registerSuccess));
    navigate("/home");
  };

  const validationSchema = yup.object({
    nama: yup.string("Enter your name").required("Name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    nomorTelepon: yup
      .string("Enter your phone number")
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone number is required"),
    tanggalLahir: yup
      .date("Enter your birth date")
      .required("Birth date is required"),
    jenisKelamin: yup
      .string("Enter your gender")
      .required("Gender is required"),
    provinsi: yup
      .string("Enter your province")
      .required("Province is required"),
    kota: yup.string("Enter your city").required("City is required"),
    kecamatan: yup
      .string("Enter your district")
      .required("District is required"),
    alamatLengkap: yup
      .string("Enter your address")
      .required("Address is required"),
    kodePos: yup
      .string("Enter your post code")
      .min(5, "Post Code must be 5 numbers")
      .required("Post code is required"),
  });

  const RegisterTextField = styled(TextField)({
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

  const MuiMaterial = () => {
    const formik = useFormik({
      initialValues: {
        nama: "",
        email: "",
        password: "",
        nomorTelepon: "",
        tanggalLahir: "",
        jenisKelamin: "",
        provinsi: "",
        kota: "",
        kecamatan: "",
        alamatLengkap: "",
        kodePos: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        try {
          alert(JSON.stringify(values, null, 2));
          await handleRegister(values, formik);
          console.log("success");
        } catch (error) {
          console.log(error);
        }
      },
    });

    return (
      <div className={classes.muiContainer}>
        {console.log(formik)}
        <form onSubmit={formik.handleSubmit} className={classes.muiForm}>
          {formik.errors.account && (
            <p className={classes.signUpError}>{formik.errors.account}</p>
          )}
          <Box className={classes.muiContent}>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "80%" }}>
                <RegisterTextField
                  sx={{
                    color: "var(--first)",
                  }}
                  fullWidth
                  type="text"
                  name="nama"
                  label="Nama"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  onChange={formik.handleChange}
                  value={formik.values.nama}
                  error={formik.touched.nama && Boolean(formik.errors.nama)}
                  helperText={formik.touched.nama && formik.errors.nama}
                />
              </Box>
              <Box sx={{ width: "80%" }}>
                <RegisterTextField
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
              <Box sx={{ width: "80%" }}>
                <RegisterTextField
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
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Box>
              <Box sx={{ width: "80%" }}>
                <RegisterTextField
                  sx={{
                    color: "black",
                  }}
                  fullWidth
                  type="text"
                  name="nomorTelepon"
                  label="Nomor Telepon"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  onChange={formik.handleChange}
                  value={formik.values.nomorTelepon}
                  error={
                    formik.touched.nomorTelepon &&
                    Boolean(formik.errors.nomorTelepon)
                  }
                  helperText={
                    formik.touched.nomorTelepon && formik.errors.nomorTelepon
                  }
                />
              </Box>
              <Box sx={{ width: "80%" }}>
                <RegisterTextField
                  sx={{
                    color: "black",
                  }}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  name="tanggalLahir"
                  label="Tanggal Lahir"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  onChange={formik.handleChange}
                  value={formik.values.tanggalLahir}
                  error={
                    formik.touched.tanggalLahir &&
                    Boolean(formik.errors.tanggalLahir)
                  }
                  helperText={
                    formik.touched.tanggalLahir && formik.errors.tanggalLahir
                  }
                />
              </Box>
              <Box sx={{ width: "80%", marginLeft: "14px" }}>
                <FormLabel
                  sx={{
                    "&.Mui-focused": {
                      color: "var(--first)",
                    },
                  }}
                  error={
                    formik.touched.jenisKelamin &&
                    Boolean(formik.errors.jenisKelamin)
                  }
                  helperText={
                    formik.touched.jenisKelamin && formik.errors.jenisKelamin
                  }
                >
                  Jenis Kelamin
                </FormLabel>
                <RadioGroup
                  row
                  label
                  onChange={formik.handleChange}
                  value={formik.values.jenisKelamin}
                  error={
                    formik.touched.jenisKelamin &&
                    Boolean(formik.errors.jenisKelamin)
                  }
                  helperText={
                    formik.touched.jenisKelamin && formik.errors.jenisKelamin
                  }
                >
                  <FormControlLabel
                    value="Wanita"
                    name="jenisKelamin"
                    control={
                      <Radio
                        sx={{
                          color: "var(--first)",
                          "&.Mui-checked": {
                            color: "var(--first)",
                          },
                        }}
                      />
                    }
                    label="Wanita"
                  />
                  <FormControlLabel
                    value="Pria"
                    name="jenisKelamin"
                    control={
                      <Radio
                        sx={{
                          color: "var(--first)",
                          "&.Mui-checked": {
                            color: "var(--first)",
                          },
                        }}
                      />
                    }
                    label="Pria"
                  />
                </RadioGroup>
                <FormHelperText
                  sx={{
                    color: "#dc5a5a",
                    marginLeft: "4px",
                  }}
                >
                  {formik.touched.jenisKelamin && formik.errors.jenisKelamin}
                </FormHelperText>
              </Box>
            </Box>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "80%" }}>
                <RegisterTextField
                  sx={{
                    color: "black",
                  }}
                  select
                  fullWidth
                  type="text"
                  name="provinsi"
                  label="Provinsi"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  onChange={formik.handleChange}
                  value={formik.values.provinsi}
                  error={
                    formik.touched.provinsi && Boolean(formik.errors.provinsi)
                  }
                  helperText={formik.touched.provinsi && formik.errors.provinsi}
                >
                  {provinceList.map((option) => (
                    <MenuItem key={option.id} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </RegisterTextField>
              </Box>
              <Box sx={{ width: "80%" }}>
                <RegisterTextField
                  sx={{
                    color: "black",
                  }}
                  fullWidth
                  type="text"
                  name="kota"
                  label="Kota"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  onChange={formik.handleChange}
                  value={formik.values.kota}
                  error={formik.touched.kota && Boolean(formik.errors.kota)}
                  helperText={formik.touched.kota && formik.errors.kota}
                />
              </Box>
              <Box sx={{ width: "80%" }}>
                <RegisterTextField
                  sx={{
                    color: "black",
                  }}
                  fullWidth
                  type="text"
                  name="kecamatan"
                  label="Kecamatan"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  onChange={formik.handleChange}
                  value={formik.values.kecamatan}
                  error={
                    formik.touched.kecamatan && Boolean(formik.errors.kecamatan)
                  }
                  helperText={
                    formik.touched.kecamatan && formik.errors.kecamatan
                  }
                />
              </Box>
              <Box sx={{ width: "80%" }}>
                <RegisterTextField
                  sx={{
                    color: "black",
                  }}
                  fullWidth
                  type="text"
                  name="alamatLengkap"
                  label="Alamat Lengkap"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  multiline
                  maxRows={3}
                  onChange={formik.handleChange}
                  value={formik.values.alamatLengkap}
                  error={
                    formik.touched.alamatLengkap &&
                    Boolean(formik.errors.alamatLengkap)
                  }
                  helperText={
                    formik.touched.alamatLengkap && formik.errors.alamatLengkap
                  }
                />
              </Box>
              <Box sx={{ width: "80%" }}>
                <RegisterTextField
                  sx={{
                    color: "black",
                    "&.Mui-focused fieldset": {
                      borderColor: "#483737",
                    },
                  }}
                  fullWidth
                  type="number"
                  name="kodePos"
                  label="Kode Pos"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  onChange={formik.handleChange}
                  value={formik.values.kodePos}
                  error={
                    formik.touched.kodePos && Boolean(formik.errors.kodePos)
                  }
                  helperText={formik.touched.kodePos && formik.errors.kodePos}
                />
              </Box>
            </Box>
          </Box>
          <Button
            sx={{
              backgroundColor: "var(--second)",
              width: "20%",
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
              "SIGN UP"
            )}
          </Button>
        </form>
      </div>
    );
  };
  return (
    <div className={classes.registerContainer}>
      <div className={classes.registerTitle}>
        <img src={PartaniIcon} />
      </div>
      <div className={classes.registerContent}>
        <MuiMaterial />
        <div className={classes.registerLink}>
          Already have an account? <Link to={"/login"}>Sign in here!</Link>
        </div>
      </div>
      {registerSuccess !== null &&
        (() => {
          dispatch(login(registerSuccess));
          navigate("/home");
        })}
    </div>
  );
};

export default Register;
