import React from "react";
import classes from "./UserTypeSearch.module.css"

const UserTypeSearch = (props) =>{

    return(
        <div className={classes.userTypeSearchCard}>
            <div className={classes.userTypeSearchCard_img}>
                <img src={props.source}/>
            </div>
            <div className={classes.userTypeSearchCard_text}>
                <span>{props.value}</span>
            </div>
        </div>
    )
}

export default UserTypeSearch;