import React , { useState } from "react";
import classes from "./Header.module.css"
import PartaniIcon from "../../Assets/Icons/PartaniIcon.svg"
import CartIcon from "../../Assets/Icons/CartIcon.svg"
import NotificationIcon from "../../Assets/Icons/NotificationIcon.svg"
import ProfileIcon from "../../Assets/Icons/ProfileIcon.svg"
import SearchCategoryList from "../SearchCategory/SearchCategoryList";
import UserTypeSearch from "./UserTypeSearch";

const Header = (props)=>{

    const [searchCategoryItem, setSearchCategoryItem] = useState({
        id:"a1",
        value: "Petani",
        source: "Icons/PetaniIcon.svg"
    })

    const [isShow, setIsShow] = useState(false)

    const updateSearchCategoryHandler =(searchCategoryData)=>{
        setSearchCategoryItem({id: searchCategoryData.id , value: searchCategoryData.value , source: searchCategoryData.source})
    }

    const updateIsShow =()=>{
        if(isShow === false){
            setIsShow(true)
        }else{
            setIsShow(false)
        }
    }

    return(
        <div className={classes.section}>
            <div className={classes.header}>
                <div className={classes.firstHeaderSection}>
                    <a>
                        <img src={PartaniIcon}/>
                    </a>
                </div>
                <div className={classes.secondHeaderSection}>
                    <div className={classes.searchCategory}>
                        <div onClick={updateIsShow}>
                            <UserTypeSearch
                                key={searchCategoryItem.id}
                                source={searchCategoryItem.source}
                                value={searchCategoryItem.value}
                            />
                        </div>
                        <div>
                            {isShow?(<SearchCategoryList 
                                items={props.items} 
                                onChangeData={updateSearchCategoryHandler}
                                onUpdateShow={updateIsShow}
                                show={isShow}
                            />) :""}
                        </div>
                    </div>
                    <div className={classes.searchBar}>
                        <input
                            type="text"
                            placeholder="Search">

                        </input>
                    </div>
                </div>
                <div className={classes.thirdHeaderSection}>
                    <div className={classes.thirdHeaderSectionIcon}>
                        <a>
                            <img src={NotificationIcon}/>
                        </a>
                    </div>
                    <div className={classes.thirdHeaderSectionIcon}>
                        <a>
                            <img src={CartIcon}/>
                        </a>                        
                    </div>
                    <div className={classes.thirdHeaderSectionIcon}>
                        <a>
                            <img src={ProfileIcon}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;