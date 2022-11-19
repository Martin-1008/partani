import React from "react";
import classes from "./ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
  return (
    <div className={classes.productList}>
      {props.items.map((Product) => (
        <ProductCard
          key={Product.id}
          id={Product.id}
          source={Product.source}
          value={Product.value}
          price={Product.price}
          unit={Product.unit}
          rate={Product.rate}
          sold={Product.sold}
        />
      ))}
    </div>
  );
};

export default ProductList;
