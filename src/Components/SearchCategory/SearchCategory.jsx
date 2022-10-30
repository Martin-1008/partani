import React from "react";
import classes from "./SearchCategory.module.css"

const SearchCategory = (props) =>{

    const sendUpdateHandler =()=>{

        props.onUpdate({id:props.id, source: props.source, value: props.value})
    }

    return(
        <div className={classes.searchCategoryCard} onClick={sendUpdateHandler}>
            <div className={classes.searchCategoryCard_img}>
                <img src={props.source}/>
            </div>
            <div className={classes.searchCategoryCard_text}>
                <span>{props.value}</span>
            </div>
        </div>
    )
}

export default SearchCategory;