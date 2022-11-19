import React, { useRef, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchCategoryData = [
  {
    id: "a1",
    value: "Petani",
    source: "/Icons/PetaniIcon.svg",
  },
  {
    id: "a2",
    value: "Hobi",
    source: "/Icons/HobiKebunIcon.svg",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [filter, setFilter] = useState("");
  const searchRef = useRef();
  const navigateToUser = () => {
    navigate("/user");
  };

  const [searchCategoryItem, setSearchCategoryItem] = useState({
    id: "a1",
    value: "Petani",
    source: "/Icons/PetaniIcon.svg",
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

  const handleSearch = async () => {
    console.log(searchRef.current.value);
    if (searchRef.current.value.trim().length > 0) {
      navigate(`/product/search/${searchRef.current.value.toLowerCase()}`);
      searchRef.current.value = "";
    }
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={classes.section}>
      <div className={classes.header}>
        <div className={classes.firstHeaderSection}>
          <Link to={"/"}>
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
          <Box
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "7px 10px 7px 20px",
              gap: "6px",
              background: "#E2E2E2",
              borderRadius: "20px",
              "& svg": {
                cursor: "pointer",
              },
            }}
          >
            <input
              placeholder="Cari Produk"
              className={classes.searchInput}
              ref={searchRef}
              onKeyDown={handleEnterSearch}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              onClick={handleSearch}
            >
              <SearchIcon fontSize="large" />
            </Box>
          </Box>
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
              label={user.userNama}
              onClick={navigateToUser}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Header;
