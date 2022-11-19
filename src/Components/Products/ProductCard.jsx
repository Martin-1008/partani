import React from "react";
import classes from "./ProductCard.module.css";
import Star from "../../Assets/Icons/Star.svg";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  //   const getProductId = () => {
  //     idRef.current = props.id;
  //     console.log(idRef);
  //     navigate(`/productDetail/${props.id}`);
  //   };

  return (
    <div
      //   className={classes.productCard}
      //   onClick={() => {
      //     getProductId();
      //   }}
      key={props.id}
    >
      <Link to={`/productDetail/${props.id}`} className={classes.productCard}>
        <div className={classes.productCard_img}>
          <img src={props.source} />
        </div>
        <div className={classes.productCard_content}>
          <div className={classes.productCard_content_name}>{props.value}</div>
          <div className={classes.productCard_content_price}>
            <span className={classes.productCard_content_price_amount}>
              Rp. {props.price}
            </span>
            <span className={classes.productCard_content_price_unit}>
              /{props.unit}
            </span>
          </div>
          <div className={classes.productCard_content_info}>
            <div className={classes.productCard_content_info_rate}>
              <img src={Star} />
              <span>{props.rate}</span>
            </div>
            <div className={classes.productCard_content_info_sold}>
              Terjual {props.sold} {props.unit}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
