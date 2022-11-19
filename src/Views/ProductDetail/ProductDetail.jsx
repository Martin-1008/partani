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

const ProductDetail = () => {
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const [amount, setAmount] = useState(0);
  // const [productData, setProductData] = useState([]);
  const amountRef = useRef();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    !didUserLogin(user) && navigate("/login");
  }, []);

  let productFilter = product.filter((data) => {
    return data.id.includes(id);
  });

  console.log(productFilter);

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
  console.log(productFilter);
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
                <div className={classes.categoryBox}>
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
    </div>
  );
};

export default ProductDetail;
