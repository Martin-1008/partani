import React, { useState } from "react";
import classes from "./Products.module.css";
import ProductList from "../../Components/Products/ProductList";
import { product } from "../../Components/Products/Product";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import { didUserLogin } from "../../Utils/RoleUtils";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const params = useParams();
  const [productList, setProductList] = useState([]);
  const [filter, setFilter] = useState(params.filter);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    !didUserLogin(user) && navigate("/login");
    console.log("test");
    console.log(params);
    setFilter(params.filter);
  }, [params]);

  console.log(filter);
  let productFilter = product.filter((data) => {
    return data.value.toLocaleLowerCase().includes(filter);
  });

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={classes.headerFill}></div>
      <div className={classes.content}>
        <div className={classes.container}>
          {productFilter == 0 ? (
            <div className={classes.notFindContainer}>
              <p className={classes.notFind}>
                Tidak ada Produk yang sesuai dengan pencarian
              </p>
              {` "${filter}"`}{" "}
            </div>
          ) : (
            <div>
              <div className={classes.findContainer}>
                <p className={classes.find}>
                  Produk yang sesuai dengan pencarian
                </p>
                {` "${filter}"`}{" "}
              </div>
              <ProductList items={productFilter} />
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Products;
