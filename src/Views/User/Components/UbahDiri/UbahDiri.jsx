import React from "react";
import classes from "./UbahDiri.module.css";
import {
  TextField,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Button,
  FormHelperText,
  CircularProgress,
  Box,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../../Reducer/UserReducer/UserReducer";
import { updateData } from "../../../../Controller/Firebase";

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

const UbahDiri = ({ handleClose, opens, updateBiodata }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const formik = useFormik({
    initialValues: {
      nama: user.userNama,
      nomorTelepon: user.userNomorTelepon,
      tanggalLahir: user.userTanggalLahir,
      jenisKelamin: user.userJenisKelamin,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      alert("hi");
      try {
        alert(JSON.stringify(values, null, 2));
        await updateUser(values, formik);
        await updateBiodata(values, formik);
        console.log("success");
        handleClose();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const updateUser = async (values, formik) => {
    try {
      const userUpdate = await updateData(
        values.nama,
        values.nomorTelepon,
        values.tanggalLahir,
        values.jenisKelamin,
        user.uid
      );

      dispatch(login(userUpdate));
    } catch (error) {
      formik.errors.account = "Something went wrong";
    }
  };

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

  const submitForm = async (values) => {
    // updateBiodata(values, formik);
    // alert("hi");
    // console.log("submit");
    // console.log(opens);
    // handleClose();
    console.log(values);
    console.log("jkoifejkiofejoi");
    try {
      alert(JSON.stringify(values, null, 2));
      await updateUser(values, formik);
      await updateBiodata(values, formik);
      console.log("success");
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog open={opens}>
        <DialogTitle>Ubah Biodata Diri</DialogTitle>
        <DialogContent onClick={handleClose}>test</DialogContent>
      </Dialog>
    </div>
  );
};

export default UbahDiri;
