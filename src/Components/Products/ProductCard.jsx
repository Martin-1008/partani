import React from "react"
import classes from "./ProductCard.module.css"
import Star from "../../Assets/Icons/Star.svg"

const ProductCard = (props) =>{

    return(
        <div className={classes.productCard}>
            <div className={classes.productCard_img}>
                <img
                    src={props.source}
                />
            </div>
            <div className={classes.productCard_content}>
                <div className={classes.productCard_content_name}>
                    {props.value}
                </div>
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
                        <img
                            src={Star}
                        />
                        <span>
                            {props.rate}
                        </span>
                    </div>
                    <div className={classes.productCard_content_info_sold}>
                        Terjual {props.sold} {props.unit}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;