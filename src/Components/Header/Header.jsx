import React, { useState } from "react";
import classes from "./Header.module.css";
import PartaniIcon from "../../Assets/Icons/PartaniIcon.svg";
import ProfileIcon from "../../Assets/Icons/ProfileIcon.svg";
import SearchCategoryList from "../SearchCategory/SearchCategoryList";
import UserTypeSearch from "./UserTypeSearch";
import { Badge, IconButton, Chip, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SearchCategoryData = [
  {
    id: "a1",
    value: "Petani",
    source: "Icons/PetaniIcon.svg",
  },
  {
    id: "a2",
    value: "Hobi",
    source: "Icons/HobiKebunIcon.svg",
  },
];

const Header = (props) => {
  const navigate = useNavigate();

  const navigateToUser = () => {
    navigate("/user");
  };

  const [searchCategoryItem, setSearchCategoryItem] = useState({
    id: "a1",
    value: "Petani",
    source: "Icons/PetaniIcon.svg",
  });

  const [isShow, setIsShow] = useState(false);

  const updateSearchCategoryHandler = (searchCategoryData) => {
    setSearchCategoryItem({
      id: searchCategoryData.id,
      value: searchCategoryData.value,
      source: searchCategoryData.source,
    });
  };

  const updateIsShow = () => {
    if (isShow === false) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  return (
    <div className={classes.section}>
      <div className={classes.header}>
        <div className={classes.firstHeaderSection}>
          <Link to={"/home"}>
            <img src={PartaniIcon} />
          </Link>
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
              {isShow ? (
                <SearchCategoryList
                  items={SearchCategoryData}
                  onChangeData={updateSearchCategoryHandler}
                  onUpdateShow={updateIsShow}
                  show={isShow}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={classes.searchBar}>
            <input type="text" placeholder="Search"></input>
          </div>
        </div>
        <div className={classes.thirdHeaderSection}>
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            direction="row"
            spacing={2}
          >
            <IconButton>
              <Badge classes={{ badge: classes.badge }}>
                <NotificationsIcon fontSize="large" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} classes={{ badge: classes.badge }}>
                <ShoppingCartIcon fontSize="large" />
              </Badge>
            </IconButton>
            <Chip
              avatar={<Avatar></Avatar>}
              label="Quest"
              onClick={navigateToUser}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Header;
