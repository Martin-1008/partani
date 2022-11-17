import React, { useState } from "react";
import classes from "./Products.module.css";
import ProductList from "../../Components/Products/ProductList";
import { product } from "../../Components/Products/Product";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Products = () => {
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
    return data.value.toLocaleLowerCase().includes(filter);
  });

  //   let productFilteredList = productFilter.map((Product) => (
  //     <ProductCard
  //       key={Product.id}
  //       source={Product.source}
  //       value={Product.value}
  //       price={Product.price}
  //       unit={Product.unit}
  //       rate={Product.rate}
  //       sold={Product.sold}
  //     />
  //   ));

  //   setProductList(productFilteredList);

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
            <ProductList items={productFilter} />
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
