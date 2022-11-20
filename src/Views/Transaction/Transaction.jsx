import React, { useEffect } from "react";
import classes from "./Transaction.module.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TransactionCard from "./Components/TransactionCard";
import { useSelector } from "react-redux";
import { didUserLogin } from "../../Utils/RoleUtils";
import { useNavigate } from "react-router-dom";
import { getTransactionData } from "../../Controller/Firebase";
import TransactionList from "./Components/TransactionList";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { product } from "../../Components/Products/Product";

const Transaction = () => {
  const user = useSelector((state) => state.user);
  const [transaction, setTransaction] = useState([]);
  const [checkData, setCheckData] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    !didUserLogin(user) && navigate("/login");
    console.log("test");
    transactionData();
    console.log(product);
  }, []);

  const transactionData = async () => {
    setCheckData(true);
    try {
      const getData = await getTransactionData(user.userUid);
      console.log(getData);
      setTransaction(getData);
    } catch (error) {
      console.log(error);
    }

    setCheckData(false);
  };

  return (
    <div>
      <Header />
      <div className={classes.headerFill}></div>
      <div className={classes.section}>
        <div className={classes.container}>
          <p>Transaksi</p>
          <div className={classes.transactionList}>
            {checkData ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <TransactionCard data={transaction} />
            )}
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Transaction;
