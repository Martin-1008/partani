import React from "react";
import classes from "./User.module.css";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { didUserLogin } from "../../Utils/RoleUtils";
import { useState } from "react";
import UbahDiri from "./Components/UbahDiri/UbahDiri";
import { useFormik } from "formik";
import { updateData } from "../../Controller/Firebase";
import { login } from "../../Reducer/UserReducer/UserReducer";
import * as yup from "yup";
import { Button, CircularProgress } from "@mui/material";
import { logoff } from "../../Reducer/UserReducer/UserReducer";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
  jenisKelamin: yup.string("Enter your gender").required("Gender is required"),
});

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [ubahAlamatVisible, setUbahAlamatVisible] = useState(false);
  const [ubahDiriVisible, setUbahDiriVisible] = useState(false);
  const [logOutClick, setLogOutClick] = useState(false);
  useEffect(() => {
    !didUserLogin(user) && navigate("/login");
    console.log(user);
  });

  const formik = useFormik({
    initialValues: {
      nama: user.userNama,
      nomorTelepon: user.userNomorTelepon,
      tanggalLahir: user.userTanggalLahir,
      jenisKelamin: user.userJenisKelamin,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        alert(JSON.stringify(values, null, 2));
        // await updateBio(values, formik);
        console.log("success");
      } catch (error) {
        console.log(error);
      }
    },
  });

  // const updateBio = async (values, formik) => {
  //   try {
  //     const userUpdate = await updateData(
  //       values.nama,
  //       values.nomorTelepon,
  //       values.tanggalLahir,
  //       values.jenisKelamin,
  //       user.uid
  //     );
  //     dispatch(login(userUpdate));
  //   } catch (error) {
  //     formik.errors.account = "Something went wrong";
  //   }
  // };

  const openUbahDiri = () => {
    setUbahDiriVisible(true);
  };

  const openUbahAlamat = () => {
    setUbahAlamatVisible(true);
  };

  const closeUbah = () => {
    setUbahAlamatVisible(false);
    setUbahDiriVisible(false);
  };

  const logOut = () => {
    setLogOutClick(true);
    dispatch(logoff());
    navigate("/");
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={classes.headerFill}></div>
      <div className={classes.userSection}>
        <div className={classes.userContainer}>
          <div className={classes.imageSection}>
            <div className={classes.imageBackground}>
              <img src="PartaniLogo.svg" />
            </div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#483737",
                  color: "#ffffff",
                  margin: "20px",
                  padding: "10px 10px",
                  width: "70%",
                  "&:hover": {
                    backgroundColor: "#48383880",
                  },
                }}
                onClick={() => {
                  logOut();
                }}
              >
                {logOutClick ? <CircularProgress color="inherit" /> : "LOG OUT"}
              </Button>
            </Box>
          </div>
          <div>
            <div className={classes.biodataDiri}>
              <Stack
                sx={{ alignItems: "center", marginBottom: "20px" }}
                direction="row"
                spacing={3}
              >
                <p>Biodata Diri</p>
                <div className={classes.ubahAlamat} onClick={openUbahDiri}>
                  Ubah
                </div>
              </Stack>
              <Stack direction="row" spacing={15}>
                <Stack spacing={2} className={classes.coloumTitle}>
                  <div>Nama</div>
                  <div>Tanggal Lahir</div>
                  <div>Jenis Kelamin</div>
                  <div>Email</div>
                  <div>No. HP</div>
                </Stack>
                <Stack spacing={2} className={classes.coloumContent}>
                  <div>{user.userNama}</div>
                  <div>{user.userTanggalLahir}</div>
                  <div>{user.userJenisKelamin}</div>
                  <div>{user.userEmail}</div>
                  <div>{user.userNomorTelepon}</div>
                </Stack>
              </Stack>
            </div>
            <div className={classes.alamat}>
              <Stack
                sx={{ alignItems: "center", marginBottom: "20px" }}
                direction="row"
                spacing={3}
              >
                <p>Alamat</p>
                <div className={classes.ubahAlamat} onClick={openUbahAlamat}>
                  Ubah
                </div>
              </Stack>
              <Stack direction="row" spacing={15}>
                <Stack spacing={2} className={classes.coloumTitle}>
                  <div>Provinsi</div>
                  <div>Kota</div>
                  <div>Kecamatan</div>
                  <div>Alamat Lengkap</div>
                  <div>Kode Pos</div>
                </Stack>
                <Stack spacing={2} className={classes.coloumContent}>
                  <div>{user.userProvinsi}</div>
                  <div>{user.userKota}</div>
                  <div>{user.userKecamatan}</div>
                  <div className={classes.alamatLengkap}>
                    {user.userAlamatLengkap}
                  </div>
                  <div>{user.userKodePos}</div>
                </Stack>
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
      <UbahDiri
        handleClose={closeUbah}
        opens={ubahDiriVisible}
        // updateBiodata={updateBio()}
      />
    </div>
  );
};

export default User;
