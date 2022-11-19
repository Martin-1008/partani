import React, { useState, useRef } from "react";
import classes from "./ProductDetail.module.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PlusIcon from "../../Assets/Icons/PlusIcon.svg";
import MinusIcon from "../../Assets/Icons/MinusIcon.svg";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { didUserLogin } from "../../Utils/RoleUtils";
import { useNavigate } from "react-router-dom";
import { product } from "../../Components/Products/Product";
import ProductList from "../../Components/Products/ProductList";
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {
  addTransaction,
  updateTransaction,
  getTransactionData,
} from "../../Controller/Firebase";

const ProductDetail = () => {
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const [amount, setAmount] = useState(0);
  // const [productData, setProductData] = useState([]);
  const amountRef = useRef();
  const categoryRef = useRef();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    !didUserLogin(user) && navigate("/login");
  }, []);

  let productFilter = product.filter((data) => {
    return data.id.includes(id);
  });

  console.log(user.userUid);

  const addHandle = () => {
    if (amountRef.current.value < 10) {
      setAmount((prevState) => prevState + 1);
    }
  };

  const minHandle = () => {
    if (amount > 0) {
      setAmount((prevState) => prevState - 1);
    }
  };

  const handleInputChange = () => {
    if (amountRef.current.value < 1) {
      setAmount(1);
    } else if (amountRef.current.value > 10) {
      setAmount(10);
    } else {
      setAmount(amountRef.current.value);
    }
  };

  const navigateToProductCategory = () => {
    const filter = productFilter[0].category;
    categoryRef.current = filter;
    navigate(`/product/category/${categoryRef.current.toLowerCase()}`);
  };

  const navigateToTransaction = () => {
    handleClose();
    handleInputTransaction();
    navigate("/transaction");
  };

  const handleClickOpen = () => {
    setTotalPrice(amount * productFilter[0].price);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputTransaction = async () => {
    await updateTransaction(amount, productFilter[0].id, user.userUid);
    // await getTransactionData(user.userUid);
  };
  // amount, productFilter[0].id, user.userUid

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={classes.headerFill}></div>
      <div className={classes.section}>
        <div className={classes.content}>
          <div className={classes.productInfo}>
            <div className={classes.productImage}>
              <img src={productFilter[0].source} />
              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                  width: "30%",
                }}
              >
                <Rating
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "blue",
                    },
                    fontSize: "40px",
                  }}
                  value={productFilter[0].rate}
                  precision={0.5}
                  readOnly
                />
              </Box>
            </div>
            <div className={classes.info}>
              <div className={classes.infoText}>
                <div className={classes.productName}>
                  {productFilter[0].value}
                </div>
                <div className={classes.productSold}>
                  {productFilter[0].sold} Terjual
                </div>
                <div className={classes.productPrice}>
                  Rp. {productFilter[0].price} per {productFilter[0].unit}
                </div>
              </div>
              <div className={classes.infoCategory}>
                Kategori
                <div
                  className={classes.categoryBox}
                  onClick={() => {
                    navigateToProductCategory();
                  }}
                >
                  {productFilter[0].category}
                </div>
              </div>
            </div>
          </div>
          <div className={classes.purchaseCart}>
            <div className={classes.productPurchase}>
              <div className={classes.amountTitle}>Jumlah</div>
              <div className={classes.amountSet}>
                <IconButton
                  onClick={() => {
                    minHandle();
                  }}
                >
                  <RemoveIcon fontSize="large" />
                </IconButton>
                <div className={classes.amountInput}>
                  <input
                    type="number"
                    value={amount}
                    ref={amountRef}
                    onChange={handleInputChange}
                  />
                </div>
                <IconButton
                  onClick={() => {
                    addHandle();
                  }}
                >
                  <AddIcon fontSize="large" />
                </IconButton>
              </div>
              <div className={classes.productStock}>Stok : 10</div>
              <div className={classes.purchaseButton}>
                <Button
                  sx={{
                    backgroundColor: "var(--second)",
                    width: "40%",
                    marginTop: "20px",
                    "&:hover": {
                      backgroundColor: "#306142",
                    },
                  }}
                  color="inherit"
                  onClick={handleClickOpen}
                >
                  Beli
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.reviewSection}>
          <div className={classes.reviewBackground}>
            <p>Review</p>
            <div className={classes.reviewContent}>
              <div className={classes.personReview}>
                <div className={classes.personInfo}>
                  <div className={classes.personProfile}>
                    <div className={classes.personImage}>
                      <img src="/PartaniLogo.svg" />
                    </div>
                    <div className={classes.personName}>Andi</div>
                  </div>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      width: "30%",
                    }}
                  >
                    <Rating
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "blue",
                        },
                        fontSize: "20px",
                      }}
                      value={rating}
                      precision={0.5}
                      readOnly
                    />
                  </Box>
                </div>
                <div className={classes.reviewText}>
                  Untuk produknya diantarnya sampai dengan aman, tidak ada
                  kerusakan dan barangnya bagus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Konfirmasi Transaksi</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Apakah anda yakin dengan pembelian berikut?
          </DialogContentText>
          <Box
            sx={{
              display: "flex",
              justifyContent: "row",
              border: " 1px solid var(--fifth)",
              borderRadius: "5px",
              padding: "10px",
              margin: "20px 0",
            }}
          >
            <img
              src={productFilter[0].source}
              className={classes.dialogImage}
            />
            <Box className={classes.productText}>
              <p>{productFilter[0].value}</p>
              <p className={classes.productAmountCalculation}>
                Rp. {productFilter[0].price} x {amount}
              </p>
              <p className={classes.totalPrice}>Rp. {totalPrice}</p>
            </Box>
          </Box>
          <DialogContentText>
            <Box className={classes.alamatTitle}>Dengan Tujuan Pengiriman</Box>
            <Box>
              <p className={classes.alamatLengkap}>{user.userAlamatLengkap}</p>
              <Box className={classes.daerah}>
                <p>
                  {user.userKecamatan}, {user.userKota}, {user.userProvinsi}
                </p>
                <p>{user.userKodePos}</p>
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: "#DF0000",
              "&:hover": {
                backgroundColor: "#DF0000",
                color: "white",
              },
            }}
            onClick={handleClose}
          >
            Batal
          </Button>
          <Button
            sx={{
              color: "var(--second)",
              "&:hover": {
                backgroundColor: "var(--second)",
                color: "white",
              },
            }}
            onClick={navigateToTransaction}
            autoFocus
          >
            Setuju
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductDetail;
