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
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userNama = action.payload.nama;
      state.userEmail = action.payload.email;
      state.userNomorTelepon = action.payload.nomorTelepon;
      state.userTanggalLahir = action.payload.tanggalLahir;
      state.userJenisKelamin = action.payload.jenisKelamin;
      state.userProvinsi = action.payload.provinsi;
      state.userKota = action.payload.kota;
      state.userKecamatan = action.payload.kecamatan;
      state.userAlamatLengkap = action.payload.alamatLengkap;
      state.userKodePos = action.payload.kodePos;
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
    },
  },
});

export const { login, logoff } = userReducer.actions;

export default userReducer.reducer;
