import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ProductList from "../../Components/Products/ProductList";
import { product } from "../../Components/Products/Product";
import classes from "./ProductCategory.module.css";

const ProductCategory = () => {
  const params = useParams();
  const [productList, setProductList] = useState([]);
  const [filter, setFilter] = useState(params.filter);

  useEffect(() => {
    console.log("test");
    console.log(params);
    setFilter(params.filter);
  }, [params]);

  console.log(filter);
  let productFilter = product.filter((data) => {
    return data.category.toLocaleLowerCase().includes(filter);
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
              <div className={classes.productSearch}>
                <ProductList items={productFilter} />
              </div>
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

export default ProductCategory;
