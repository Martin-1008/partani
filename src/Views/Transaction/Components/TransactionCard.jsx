import React, { useState } from "react";
import classes from "./TransactionCard.module.css";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { product } from "../../../Components/Products/Product";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TransactionCard = ({ data }) => {
  const [productFilter, setProductFilter] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(data);
    if (data != undefined) {
      getProduct();
    }
    // getProduct();
    // const totalPrice =
    // data.transactions.transactionAmount * productFilter[0].price;
    // console.log(data.transactions.transactionProductId);
    console.log(product);
    console.log(productFilter);
  }, []);
  const getProduct = async () => {
    console.log(product);
    try {
      const filteredProduct = product.filter((datas) => {
        return datas.id.includes(data.transactions.transactionProductId);
      });
      setProductFilter(filteredProduct);
      console.log(filteredProduct);
      setTotalPrice(
        data.transactions.transactionAmount * filteredProduct[0].price
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.card}>
      {productFilter.length === 0 ? (
        "Tidak ada Transaksi"
      ) : (
        <>
          <div className={classes.leftSection}>
            <div className={classes.transactionImage}>
              <img src={productFilter[0].source} />
            </div>
            <div className={classes.transactionText}>
              <div className={classes.transactionInfo}>
                <div className={classes.transactionName}>
                  {productFilter[0].value}
                </div>
                <div>
                  {data.transactions.transactionAmount} x Rp.{" "}
                  {productFilter[0].price}
                </div>
              </div>
              <div className={classes.transactionDate}>15 November 2022</div>
            </div>
          </div>
          <div className={classes.rightSection}>
            <div className={classes.TransactionPrice}>
              <div className={classes.transactionTotal}>Total Harga</div>
              <div className={classes.transactionAmount}>Rp. {totalPrice}</div>
            </div>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", width: "80%" }}
            >
              <Button
                sx={{
                  backgroundColor: "var(--second)",
                  color: "white",
                  width: "40%",
                  "&:hover": {
                    backgroundColor: "#306142",
                  },
                }}
                onClick={() => {
                  navigate(
                    `/productDetail/${data.transactions.transactionProductId}`
                  );
                }}
              >
                Beli Lagi
              </Button>
            </Box>
          </div>
        </>
      )}
    </div>
  );
};

export default TransactionCard;
