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

const Transaction = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    !didUserLogin(user) && navigate("/login");
  });

  const transactionData = getTransactionData(user.userUid);
  console.log(transactionData.productId);
  return (
    <div>
      <Header />
      <div className={classes.headerFill}></div>
      <div className={classes.section}>
        <div className={classes.container}>
          <div>Transaksi</div>
          <div className={classes.transactionList}>
            <TransactionCard data={transactionData} />
            {/* <TransactionList uid={user.userUid} /> */}
          </div>
        </div>
      </div>
      <div className={classes.Footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Transaction;
