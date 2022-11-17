import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { login, logoff } = userReducer.actions;

export default userReducer.reducer;
