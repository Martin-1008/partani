import React from "react";
import classes from "./CategoryList.module.css";
import Category from "./Category";

const CategoryList = (props) => {
  return (
    <div className={classes.categoryList}>
      {props.items.map((categoryCard) => (
        <Category
          key={categoryCard.id}
          source={categoryCard.source}
          value={categoryCard.value}
          getCategoryValue={props.getCategory}
        />
      ))}
    </div>
  );
};

export default CategoryList;
