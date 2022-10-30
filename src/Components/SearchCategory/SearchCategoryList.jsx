import React, { useState} from "react";
import { useEffect } from "react";
import SearchCategory from "./SearchCategory";
import classes from "./SearchCategoryList.module.css"

const SearchCategoryList = (props) =>{

    const[isShow, setIsShow] = useState(false);

    useEffect(()=>{
        if(props.show===true){
            setIsShow(true)
        }else{
            setIsShow(false)
        }
    })

    const updateShow = ()=>{
        if(isShow === true){
            setIsShow(false);

            props.onUpdateShow(false);
        }
    }

    return(
        <div className={`${classes.searchCategoryList} ${isShow?classes.active:""}`} onClick={updateShow}>
            {props.items.map((category) =>(
                <SearchCategory
                    key={category.id}
                    source={category.source}
                    value={category.value}
                    onUpdate={props.onChangeData}
                />
            ))}
        </div>
    )
}

export default SearchCategoryList;

