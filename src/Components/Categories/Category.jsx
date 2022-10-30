import React from "react";
import classes from "./Category.module.css"
import PeptisidaIcon from "../../Assets/CategoryIcons/PeptisidaIcon.svg"

const Category = (props)=>{

    return(
        <div className={classes.categoryCard}>
            <div className={classes.categoryCard_img}>
                <img src={props.source}/>
            </div>
            <div className={classes.categoryCard_text}>
                <span>
                    {props.value}
                </span>
            </div>
        </div>
    )
}

export default Category;