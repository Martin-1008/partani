import { createSlice } from "@reduxjs/toolkit";
import { startAfter } from "firebase/firestore";

const initialState = {
  isLoggedIn: false,
  userNama: "",
  userEmail: "",
  userNomorTelepon: "",
  userTanggalLahir: "",
  userJenisKelamin: "",
  userProvinsi: "",
  userKota: "",
  userKecamatan: "",
  userAlamatLengkap: "",
  userKodePos: "",
  userUid: "",
  userTransactionCount: 0,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userNama = action.payload.userRef.name;
      state.userEmail = action.payload.userRef.email;
      state.userNomorTelepon = action.payload.userRef.phoneNumber;
      state.userTanggalLahir = action.payload.userRef.birthDate;
      state.userJenisKelamin = action.payload.userRef.gender;
      state.userProvinsi = action.payload.userRef.province;
      state.userKota = action.payload.userRef.city;
      state.userKecamatan = action.payload.userRef.district;
      state.userAlamatLengkap = action.payload.userRef.fullAddress;
      state.userKodePos = action.payload.userRef.postCode;
      state.userUid = action.payload.uid;
      state.userTransactionCount = action.payload.userRef.transactionCount;
    },
    logoff: (state) => {
      window.location.href = "/login";
      state.isLoggedIn = false;
      state.userNama = "";
      state.userEmail = "";
      state.userNomorTelepon = "";
      state.userTanggalLahir = "";
      state.userJenisKelamin = "";
      state.userProvinsi = "";
      state.userKota = "";
      state.userKecamatan = "";
      state.userAlamatLengkap = "";
      state.userKodePos = "";
      state.userUid = "";
    },
    updateCount: (state) => {
      state.userTransactionCount = state.userTransactionCount++;
    },
  },
});

export const { login, logoff, updateCount } = userReducer.actions;

export default userReducer.reducer;
