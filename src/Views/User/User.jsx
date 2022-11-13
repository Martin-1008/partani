import React from "react";
import classes from "./User.module.css";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Reducer/UserReducer/UserReducer";
import { useEffect } from "react";
import { didUserLogin } from "../../Utils/RoleUtils";

const User = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    !didUserLogin(user) && navigate("/login");
    console.log(user);
  }, []);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={classes.headerFill}></div>
      <div>
        <div>
          <img src="PartaniLogo.svg" />
        </div>
      </div>
      <div>
        <div className={classes.biodataDiri}>
          <p>Biodata Diri</p>
          <Stack direction="row" spacing={15}>
            <div className={classes.coloumTitle}>
              <div>Nama</div>
              <div>Tanggal Lahir</div>
              <div>Jenis Kelamin</div>
              <div>Email</div>
              <div>No. HP</div>
            </div>
            <div className={classes.coloumContent}>
              <div>{user.userNama}</div>
              <div>{user.userTanggalLahir}</div>
              <div>{user.userJenisKelamin}</div>
              <div>{user.userEmail}</div>
              <div>{user.userNomorTelepon}</div>
            </div>
            <div className={classes.coloumUbah}>
              <div>Ubah</div>
              <div>Ubah</div>
              <div>Ubah</div>
              <div>Ubah</div>
              <div>Ubah</div>
            </div>
          </Stack>
        </div>
        <div>
          <p>Alamat</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default User;
