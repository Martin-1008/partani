import React from "react";
import classes from "./TransactionCard.module.css";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { product } from "../../../Components/Products/Product";

const TransactionCard = ({ data }) => {
  // let productFilter = product.map((datas)=>{
  //     return datas.id.incluc
  // })

  return (
    <div className={classes.card}>
      <div className={classes.leftSection}>
        <div className={classes.transactionImage}>
          <img src="/TerbaruProduct/BibitPinang.png" />
        </div>
        <div className={classes.transactionText}>
          <div className={classes.transactionInfo}>
            <div className={classes.transactionName}>Bibit pinag</div>
            <div>2 x Rp. 30000</div>
          </div>
          <div className={classes.transactionDate}>15 November 2022</div>
        </div>
      </div>
      <div className={classes.rightSection}>
        <div className={classes.TransactionPrice}>
          <div className={classes.transactionTotal}>Total Harga</div>
          <div className={classes.transactionAmount}>Rp. 60000</div>
        </div>
        <Box sx={{ display: "flex", justifyContent: "flex-end", width: "80%" }}>
          <Button
            sx={{
              backgroundColor: "var(--second)",
              color: "white",
              width: "40%",
              "&:hover": {
                backgroundColor: "#306142",
              },
            }}
          >
            Beli Lagi
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default TransactionCard;
